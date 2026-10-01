/* =====================================================================
   ربط تطبيق "صلاتي" بـ Firebase (Authentication + Firestore اختياري)
   -----------------------------------------------------------------
   هذا الملف وحدة ES Module مستقلة عن script.js الأصلي (لا يُعدّل بنيته).
   يقوم بـ:
   1) تهيئة Firebase بإعداد المشروع الحقيقي (muslim-day-365) كما هو، دون أي تغيير.
   2) تفعيل تسجيل الدخول بـ Google وبالبريد الإلكتروني/كلمة المرور.
   3) اعتماد Firebase UID كمعرّف أساسي للحساب.
   4) استخدام الاستمرارية المحلية لـ Firebase (IndexedDB عبر browserLocalPersistence)
      بدل الاعتماد على localStorage لحفظ حالة تسجيل الدخول — الجلسة تبقى بعد
      إغلاق التطبيق وإعادة فتحه، تمامًا مثل أي تطبيق حقيقي متصل بحساب.
   5) توفير مزامنة اختيارية لبيانات المستخدم (الإعدادات وسجل "يوم المسلم")
      عبر Firestore مرتبطة بالـ UID، بحيث يمكن لاحقًا استخدام نفس الحساب
      على نسخة Android أو Windows من نفس المشروع.
   يعرض هذا الملف واجهة برمجية بسيطة على window.SalatiAuth، ويُطلق حدث
   'salati-firebase-ready' عند اكتمال التهيئة، لأن هذا سكربت من نوع module
   (مؤجّل تلقائيًا) وقد يبدأ تنفيذه بعد script.js الكلاسيكي — لذلك يعتمد
   script.js على هذا الحدث بدل افتراض ترتيب تحميل معيّن.
   ===================================================================== */

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAnalytics, isSupported as analyticsIsSupported } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-analytics.js";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  EmailAuthProvider,
  signOut as firebaseSignOut,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

// إعداد Firebase الحقيقي كما وصل من Firebase Console — بدون أي تعديل على القيم.
const firebaseConfig = {
  apiKey: "AIzaSyABal1158Y5H-lmgMS5Lsfxx3wyr26VpAg",
  authDomain: "muslim-day-365.firebaseapp.com",
  projectId: "muslim-day-365",
  storageBucket: "muslim-day-365.firebasestorage.app",
  messagingSenderId: "220100633187",
  appId: "1:220100633187:web:256f3b20c00472ab308e56",
  measurementId: "G-S31GRHZMXE",
};

const app = initializeApp(firebaseConfig);

// Analytics اختياري تمامًا: قد يُحجب بمانع إعلانات أو دون اتصال، ويجب ألا يوقف باقي التطبيق أبدًا.
analyticsIsSupported()
  .then((ok) => { if (ok) { try { getAnalytics(app); } catch (e) { /* تجاهل */ } } })
  .catch(() => {});

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// استمرارية محلية حقيقية (IndexedDB داخليًا) بدل الاعتماد على localStorage —
// هذا ما يجعل جلسة المستخدم تبقى بعد إغلاق التطبيق وإعادة فتحه.
setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.warn("[Firebase] تعذّر ضبط استمرارية الجلسة المحلية:", err);
});

function mapUser(u) {
  if (!u) return null;
  return {
    uid: u.uid,                 // المعرّف الأساسي للحساب في كل أنحاء التطبيق
    name: u.displayName || "",
    email: u.email || "",
    picture: u.photoURL || "",
  };
}

function friendlyAuthError(err) {
  const code = (err && err.code) || "";
  const map = {
    "auth/invalid-email": "البريد الإلكتروني غير صالح.",
    "auth/missing-password": "الرجاء إدخال كلمة المرور.",
    "auth/weak-password": "كلمة المرور ضعيفة جدًا (6 أحرف على الأقل).",
    "auth/email-already-in-use": "هذا البريد الإلكتروني مستخدم بالفعل — جرّب تسجيل الدخول بدل إنشاء حساب.",
    "auth/invalid-credential": "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    "auth/wrong-password": "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    "auth/user-not-found": "لا يوجد حساب بهذا البريد الإلكتروني.",
    "auth/too-many-requests": "محاولات كثيرة جدًا، الرجاء المحاولة لاحقًا.",
    "auth/popup-closed-by-user": "تم إغلاق نافذة تسجيل الدخول قبل إكمالها.",
    "auth/network-request-failed": "تعذّر الاتصال بالشبكة، تحقق من الإنترنت.",
    "auth/operation-not-allowed": "طريقة تسجيل الدخول هذه غير مُفعّلة بعد في إعدادات Firebase.",
  };
  return map[code] || "حدث خطأ غير متوقع، الرجاء المحاولة مرة أخرى.";
}

const authListeners = [];
onAuthStateChanged(auth, (user) => {
  const mapped = mapUser(user);
  authListeners.forEach((fn) => {
    try { fn(mapped); } catch (e) { console.error(e); }
  });
});

window.SalatiAuth = {
  /** يُستدعى في كل مرة تتغيّر فيها حالة تسجيل الدخول (بما فيها استعادة الجلسة عند فتح التطبيق). */
  onChange(fn) {
    authListeners.push(fn);
  },
  getCurrentUser() {
    return mapUser(auth.currentUser);
  },
  async signInWithGoogle() {
    try {
      const cred = await signInWithPopup(auth, googleProvider);
      return { user: mapUser(cred.user) };
    } catch (err) {
      return { error: friendlyAuthError(err) };
    }
  },
  async registerWithEmail(email, password, displayName) {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) {
        try { await updateProfile(cred.user, { displayName }); } catch (e) { /* غير حرج */ }
      }
      return { user: mapUser(cred.user) };
    } catch (err) {
      return { error: friendlyAuthError(err) };
    }
  },
  async signInWithEmail(email, password) {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      return { user: mapUser(cred.user) };
    } catch (err) {
      return { error: friendlyAuthError(err) };
    }
  },
  async resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return { ok: true };
    } catch (err) {
      return { error: friendlyAuthError(err) };
    }
  },
  async signOutUser() {
    try {
      await firebaseSignOut(auth);
      return { ok: true };
    } catch (err) {
      return { error: friendlyAuthError(err) };
    }
  },
  /* ===== تأكيد الهوية قبل تعديل الحساب ===== */
  /** 'password' إن كان للحساب كلمة مرور (بريد)، وإلا 'google'. */
  getAuthMethod() {
    const u = auth.currentUser;
    if (!u) return null;
    return u.providerData.some((p) => p.providerId === "password") ? "password" : "google";
  },
  async reauthenticate(password) {
    const u = auth.currentUser;
    if (!u) return { error: friendlyAuthError(null) };
    try {
      if (this.getAuthMethod() === "password") {
        await reauthenticateWithCredential(u, EmailAuthProvider.credential(u.email, password || ""));
      } else {
        await reauthenticateWithPopup(u, googleProvider);
      }
      return { ok: true };
    } catch (err) {
      const code = (err && err.code) || "";
      const wrongPassword = code === "auth/invalid-credential" || code === "auth/wrong-password";
      return { error: friendlyAuthError(err), wrongPassword };
    }
  },
  /* ===== تعديل الاسم وصورة الحساب ===== */
  async updateName(name) {
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      return { ok: true };
    } catch (err) {
      return { error: friendlyAuthError(err) };
    }
  },
  // صورة الحساب تُحفظ مصغّرة (256px JPEG) داخل مستند المستخدم في Firestore، لأن photoURL في Auth لا يتّسع لصورة.
  async saveAvatar(uid, dataUrl) {
    try {
      await setDoc(doc(db, "users", uid), { avatar: dataUrl || "", updatedAt: serverTimestamp() }, { merge: true });
      return { ok: true };
    } catch (e) {
      console.warn("[Firestore] تعذّر حفظ صورة الحساب:", e);
      return { error: "avatar-save-failed" };
    }
  },
  async loadAvatar(uid) {
    try {
      const snap = await getDoc(doc(db, "users", uid));
      return snap.exists() ? (snap.data().avatar || "") : "";
    } catch (e) { return null; }
  },
  /* ===== مزامنة اختيارية عبر Firestore، مرتبطة بـ UID (لا تكسر شيئًا إن لم تكن مُفعّلة) ===== */
  async loadCloudData(uid) {
    try {
      const snap = await getDoc(doc(db, "users", uid));
      return snap.exists() ? snap.data() : null;
    } catch (e) {
      console.warn("[Firestore] تعذّرت قراءة بيانات الحساب (تأكد من تفعيل Firestore في مشروع Firebase):", e);
      return null;
    }
  },
  async saveCloudData(uid, data) {
    try {
      await setDoc(doc(db, "users", uid), { ...data, updatedAt: serverTimestamp() }, { merge: true });
      return true;
    } catch (e) {
      console.warn("[Firestore] تعذّر حفظ بيانات الحساب (تأكد من تفعيل Firestore في مشروع Firebase):", e);
      return false;
    }
  },
};

window.dispatchEvent(new Event("salati-firebase-ready"));
