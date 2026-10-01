/* ================= الإعدادات القابلة للتعديل ================= */
const KAABA = { lat: 21.4225, lng: 39.8262 };

// روابط أصوات الأذان — كل رابط قابل للاستبدال بسهولة إذا انحجب أحدها
const ADHAN_SOUNDS = [
  { id:'makkah',  url:'https://archive.org/download/adhans_sunnah/adhan_makkah.mp3' },
  { id:'madina',  url:'https://archive.org/download/adhans_sunnah/adhan_madina.mp3' },
  { id:'egypt',   url:'https://archive.org/download/adhans_sunnah/adhan_egypt.mp3' },
  { id:'mishari', url:'https://archive.org/download/adhans_sunnah/adhan_mishari.mp3' },
  { id:'qatami',  url:'https://archive.org/download/adhans_sunnah/adhan_nasser_al_qatami.mp3' },
  { id:'beep',    url:'https://archive.org/download/adhans_sunnah/beep2.mp3' },
];

// طرق حساب مواقيت الصلاة المدعومة فعليًا من AlAdhan (معرّفات رسمية)
const CALC_METHODS = [
  { id:3,  key:'mwl' },
  { id:5,  key:'egyptian' },
  { id:4,  key:'makkah' },
  { id:1,  key:'karachi' },
  { id:2,  key:'isna' },
  { id:9,  key:'kuwait' },
  { id:10, key:'qatar' },
  { id:8,  key:'gulf' },
  { id:11, key:'singapore' },
  { id:13, key:'turkey' },
  { id:16, key:'dubai' },
];

/* ================= الثيمات (20 ثيمة لونية) ================= */
const THEMES = [
  { id:'brand',     c1:'#5A3FE0', c2:'#C6963E' },
  { id:'layl',      c1:'#8B7BFB', c2:'#E8B75A' },
  { id:'zumurrud',  c1:'#0F8A5F', c2:'#C9A24A' },
  { id:'muhit',     c1:'#116FB8', c2:'#3FB6C6' },
  { id:'sahra',     c1:'#9C5A2A', c2:'#B8672B' },
  { id:'yaqut',     c1:'#7E1F2C', c2:'#C9932F' },
  { id:'fajr',      c1:'#8A4FB0', c2:'#D98CA0' },
  { id:'sama',      c1:'#4C8DF0', c2:'#F0C46B' },
  { id:'zaytun',    c1:'#5B6B2E', c2:'#9C8A3C' },
  { id:'fidha',     c1:'#3A4250', c2:'#8A8F99' },
  { id:'marjan',    c1:'#E8503A', c2:'#FF9466' },
  { id:'wardi',     c1:'#C2185B', c2:'#F2A6C6' },
  { id:'kahol',     c1:'#3730A3', c2:'#8C7AF0' },
  { id:'sundus',    c1:'#0D9488', c2:'#5EEAD4' },
  { id:'kahf',      c1:'#39D97A', c2:'#7CFC6E' },
  { id:'kahraman',  c1:'#B8860B', c2:'#F4C430' },
  { id:'samawi',    c1:'#00A9CE', c2:'#FFD166' },
  { id:'banafsaji', c1:'#9B4DCA', c2:'#E0A9FF' },
  { id:'burtuqali', c1:'#E8720C', c2:'#FFB454' },
  { id:'laymun',    c1:'#7CB518', c2:'#B8D93A' },
];
const THEME_NAMES = {
  ar:{ brand:'الافتراضي', layl:'الليلي', zumurrud:'الزمردي', muhit:'المحيطي', sahra:'الصحراوي', yaqut:'الياقوتي', fajr:'الفجر', sama:'سماء الليل', zaytun:'الزيتوني', fidha:'الفضي', marjan:'المرجاني', wardi:'الوردي', kahol:'الكحلي', sundus:'السندسي', kahf:'الكهف', kahraman:'الكهرماني', samawi:'السماوي', banafsaji:'الباذنجاني', burtuqali:'البرتقالي', laymun:'الليموني' },
  en:{ brand:'Default', layl:'Night', zumurrud:'Emerald', muhit:'Ocean', sahra:'Desert', yaqut:'Ruby', fajr:'Dawn', sama:'Midnight', zaytun:'Olive', fidha:'Silver', marjan:'Coral', wardi:'Rose', kahol:'Indigo', sundus:'Turquoise', kahf:'Onyx', kahraman:'Amber', samawi:'Sky', banafsaji:'Eggplant', burtuqali:'Orange', laymun:'Lime' },
  fr:{ brand:'Par défaut', layl:'Nuit', zumurrud:'Émeraude', muhit:'Océan', sahra:'Désert', yaqut:'Rubis', fajr:'Aube', sama:'Minuit', zaytun:'Olive', fidha:'Argent', marjan:'Corail', wardi:'Rose', kahol:'Indigo', sundus:'Turquoise', kahf:'Onyx', kahraman:'Ambre', samawi:'Ciel', banafsaji:'Aubergine', burtuqali:'Orange', laymun:'Citron vert' },
  es:{ brand:'Predeterminado', layl:'Noche', zumurrud:'Esmeralda', muhit:'Océano', sahra:'Desierto', yaqut:'Rubí', fajr:'Amanecer', sama:'Medianoche', zaytun:'Oliva', fidha:'Plata', marjan:'Coral', wardi:'Rosa', kahol:'Índigo', sundus:'Turquesa', kahf:'Ónix', kahraman:'Ámbar', samawi:'Cielo', banafsaji:'Berenjena', burtuqali:'Naranja', laymun:'Lima' },
  zh:{ brand:'默认', layl:'夜晚', zumurrud:'翡翠绿', muhit:'海洋蓝', sahra:'沙漠', yaqut:'红宝石', fajr:'黎明', sama:'午夜', zaytun:'橄榄', fidha:'银色', marjan:'珊瑚', wardi:'玫瑰', kahol:'靛蓝', sundus:'绿松石', kahf:'黑曜石', kahraman:'琥珀色', samawi:'天空蓝', banafsaji:'茄紫色', burtuqali:'橙色', laymun:'青柠色' },
  ru:{ brand:'По умолчанию', layl:'Ночь', zumurrud:'Изумруд', muhit:'Океан', sahra:'Пустыня', yaqut:'Рубин', fajr:'Рассвет', sama:'Полночь', zaytun:'Оливковый', fidha:'Серебро', marjan:'Коралловый', wardi:'Розовый', kahol:'Индиго', sundus:'Бирюзовый', kahf:'Оникс', kahraman:'Янтарный', samawi:'Небесный', banafsaji:'Баклажановый', burtuqali:'Оранжевый', laymun:'Лаймовый' },
};
const THEMES_TITLE = { ar:'المظهر والثيمات', en:'Appearance & Themes', fr:'Apparence et thèmes', es:'Apariencia y temas', zh:'外观与主题', ru:'Оформление и темы' };
const INSTALL_APP_TEXT = { ar:'تثبيت التطبيق على جهازك', en:'Install app on your device', fr:"Installer l'application", es:'Instalar la aplicación', zh:'安装到设备', ru:'Установить приложение' };
const CHANGE_THEME_TEXT = { ar:'تغيير الثيم', en:'Change Theme', fr:'Changer de thème', es:'Cambiar tema', zh:'更改主题', ru:'Сменить тему' };
const HIDE_THEMES_TEXT = { ar:'إخفاء الثيمات', en:'Hide Themes', fr:'Masquer les thèmes', es:'Ocultar temas', zh:'隐藏主题', ru:'Скрыть темы' };

/* ================= اللغات الست (نفس قائمة صلاتي / Muslim ai) ================= */
const LANGUAGES = [
  { code:'ar', flag:'🇸🇦', dir:'rtl' },
  { code:'en', flag:'🇬🇧', dir:'ltr' },
  { code:'fr', flag:'🇫🇷', dir:'ltr' },
  { code:'es', flag:'🇪🇸', dir:'ltr' },
  { code:'zh', flag:'🇨🇳', dir:'ltr' },
  { code:'ru', flag:'🇷🇺', dir:'ltr' },
];

const STRINGS = {
  ar: {
    langName:'العربية', appName:'Muslim Day', tagline:'المساجد القريبة · أوقات الصلاة · القبلة · الأذان',
    locPrompt:'اضغط لتحديد موقعك بدقة', locSearching:'جاري تحديد موقعك بدقة...', locFound:(a)=>`تم تحديد الموقع (دقة ${a} م)`,
    locError:'تعذر تحديد الموقع — تأكد من تفعيل GPS ومنح الإذن', noGeo:'المتصفح لا يدعم تحديد الموقع',
    nextPrayerLabel:'الصلاة القادمة', setLocFirst:'حدّد موقعك أولاً', timesTitle:'أوقات اليوم',
    notifTitle:'تنبيه الأذان', notifDesc:'إشعار وصوت أذان تلقائي عند دخول الوقت',
    mosquesTitle:'المساجد القريبة منك', mosquesRefresh:'تحديث البحث حول موقعي', mosquesPrompt:'حدّد موقعك لعرض أقرب المساجد',
    mosquesSearching:'جاري البحث عن المساجد القريبة...', mosquesError:'تعذر جلب بيانات المساجد، تأكد من الاتصال بالإنترنت',
    mosquesNone:'لا توجد مساجد مسجّلة على OpenStreetMap ضمن هذا النطاق من موقعك', mosqueNoName:'مسجد بدون اسم', yourLocation:'موقعك الحالي', km:'كم',
    qiblaTitle:'اتجاه القبلة', qiblaNote:'وجّه أعلى الهاتف نحو المؤشر الذهبي. الدقة تعتمد على حساس البوصلة في جهازك — قارنها دائمًا بمصدر موثوق.',
    qiblaEnable:'تفعيل البوصلة الحية', qiblaEnabled:'البوصلة مفعّلة', qiblaFromNorth:(d)=>`${d}° من الشمال`, qiblaAligned:'✅ أنت الآن باتجاه القبلة', qiblaNoSensor:'لا يوجد حساس بوصلة متاح في هذا الجهاز/المتصفح. استخدم الزاوية المعروضة مع بوصلة خارجية.', qiblaDenied:'تم رفض إذن حساس الحركة. فعّله من إعدادات المتصفح ثم أعد المحاولة.', qiblaCalibrate:'⚠️ دقة البوصلة ضعيفة — حرّك الهاتف على شكل رقم 8 للمعايرة، وابتعد عن المعادن والمغناطيس.', qiblaNeedLocation:'حدّد موقعك أولًا ليُحسب اتجاه القبلة.',
    soundTitle:'صوت الأذان', soundBanner:'هذه روابط صوتية تجريبية من أرشيف مفتوح. يمكن استبدال أي رابط بسهولة من مصفوفة ADHAN_SOUNDS في الكود.',
    soundTry:'تجربة', soundPlayError:'تعذر التشغيل — جرّب صوتًا آخر أو تحقق من الاتصال بالإنترنت',
    navHome:'الرئيسية', navMosques:'المساجد', navQibla:'القبلة', navSound:'الأذان',
    prayerNames:{Fajr:'الفجر', Dhuhr:'الظهر', Asr:'العصر', Maghrib:'المغرب', Isha:'العشاء'},
    prayerFetchError:'تعذر جلب أوقات الصلاة، حاول مجددًا', adhanBody:'حي على الصلاة، حي على الفلاح',
    adhanTitle:(p)=>`حان الآن وقت ${p}`, langSheetTitle:'اختر اللغة',
    soundNames:{makkah:'أذان مكة المكرمة', madina:'أذان المدينة المنورة', egypt:'أذان مصري تقليدي', mishari:'أذان بصوت مشاري', qatami:'أذان بصوت ناصر القطامي', beep:'نغمة تنبيه بسيطة'},
  },
  en: {
    langName:'English', appName:'Muslim Day', tagline:'Nearby mosques · Prayer times · Qibla · Adhan',
    locPrompt:'Tap to locate you precisely', locSearching:'Locating you precisely...', locFound:(a)=>`Location found (accuracy ${a} m)`,
    locError:'Could not get location — check GPS and permissions', noGeo:'Your browser does not support geolocation',
    nextPrayerLabel:'Next prayer', setLocFirst:'Set your location first', timesTitle:"Today's times",
    notifTitle:'Adhan alert', notifDesc:'Automatic notification and adhan sound at prayer time',
    mosquesTitle:'Mosques near you', mosquesRefresh:'Refresh search around me', mosquesPrompt:'Set your location to see nearby mosques',
    mosquesSearching:'Searching for nearby mosques...', mosquesError:'Could not fetch mosque data, check your internet connection',
    mosquesNone:'No mosques registered on OpenStreetMap within this range of your location', mosqueNoName:'Unnamed mosque', yourLocation:'Your location', km:'km',
    qiblaTitle:'Qibla direction', qiblaNote:'Point the top of your phone toward the golden marker. Accuracy depends on your device compass — always double-check against a trusted source.',
    qiblaEnable:'Enable live compass', qiblaEnabled:'Compass enabled', qiblaFromNorth:(d)=>`${d}° from North`, qiblaAligned:'✅ You are facing the Qibla', qiblaNoSensor:'No compass sensor available on this device/browser. Use the angle shown with an external compass.', qiblaDenied:'Motion-sensor permission was denied. Enable it in browser settings and retry.', qiblaCalibrate:'⚠️ Low compass accuracy — move the phone in a figure-8 to calibrate and stay away from metal/magnets.', qiblaNeedLocation:'Set your location first so the Qibla can be calculated.',
    soundTitle:'Adhan sound', soundBanner:'These are sample audio links from an open archive. Any link can easily be replaced in the ADHAN_SOUNDS array in the code.',
    soundTry:'Preview', soundPlayError:'Could not play — try another sound or check your connection',
    navHome:'Home', navMosques:'Mosques', navQibla:'Qibla', navSound:'Adhan',
    prayerNames:{Fajr:'Fajr', Dhuhr:'Dhuhr', Asr:'Asr', Maghrib:'Maghrib', Isha:'Isha'},
    prayerFetchError:'Could not fetch prayer times, try again', adhanBody:"Hayya 'ala-salah, Hayya 'ala-l-falah",
    adhanTitle:(p)=>`It's time for ${p}`, langSheetTitle:'Choose a language',
    soundNames:{makkah:'Adhan of Makkah', madina:'Adhan of Madinah', egypt:'Traditional Egyptian Adhan', mishari:'Adhan by Mishari', qatami:'Adhan by Nasser Al-Qatami', beep:'Simple alert tone'},
  },
  fr: {
    langName:'Français', appName:'Muslim Day', tagline:'Mosquées proches · Horaires de prière · Qibla · Adhan',
    locPrompt:'Appuyez pour localiser précisément', locSearching:'Localisation en cours...', locFound:(a)=>`Position trouvée (précision ${a} m)`,
    locError:'Impossible de vous localiser — vérifiez le GPS et les autorisations', noGeo:'Votre navigateur ne prend pas en charge la géolocalisation',
    nextPrayerLabel:'Prochaine prière', setLocFirst:'Définissez votre position', timesTitle:"Horaires du jour",
    notifTitle:'Alerte Adhan', notifDesc:'Notification et son d\u2019adhan automatiques à l\u2019heure de la prière',
    mosquesTitle:'Mosquées à proximité', mosquesRefresh:'Actualiser autour de moi', mosquesPrompt:'Définissez votre position pour voir les mosquées proches',
    mosquesSearching:'Recherche des mosquées proches...', mosquesError:'Impossible de récupérer les données, vérifiez votre connexion',
    mosquesNone:'Aucune mosquée enregistrée sur OpenStreetMap dans ce rayon', mosqueNoName:'Mosquée sans nom', yourLocation:'Votre position', km:'km',
    qiblaTitle:'Direction de la Qibla', qiblaNote:'Orientez le haut du téléphone vers le repère doré. La précision dépend du capteur de votre appareil — vérifiez toujours avec une source fiable.',
    qiblaEnable:'Activer la boussole', qiblaEnabled:'Boussole activée', qiblaFromNorth:(d)=>`${d}° par rapport au Nord`, qiblaAligned:'✅ Vous faites face à la Qibla', qiblaNoSensor:'Aucun capteur de boussole disponible. Utilisez l’angle affiché avec une boussole externe.', qiblaDenied:'Permission du capteur refusée. Activez-la dans les réglages du navigateur puis réessayez.', qiblaCalibrate:'⚠️ Précision faible — tracez un 8 avec le téléphone pour calibrer, loin des métaux/aimants.', qiblaNeedLocation:'Définissez d’abord votre position pour calculer la Qibla.',
    soundTitle:'Son de l\u2019Adhan', soundBanner:'Liens audio d\u2019exemple provenant d\u2019une archive ouverte. Chaque lien peut être remplacé facilement dans le tableau ADHAN_SOUNDS du code.',
    soundTry:'Écouter', soundPlayError:'Lecture impossible — essayez un autre son ou vérifiez votre connexion',
    navHome:'Accueil', navMosques:'Mosquées', navQibla:'Qibla', navSound:'Adhan',
    prayerNames:{Fajr:'Fajr', Dhuhr:'Dhuhr', Asr:'Asr', Maghrib:'Maghrib', Isha:'Isha'},
    prayerFetchError:'Impossible de récupérer les horaires, réessayez', adhanBody:"Hayya 'ala-salah, Hayya 'ala-l-falah",
    adhanTitle:(p)=>`C'est l'heure de ${p}`, langSheetTitle:'Choisir une langue',
    soundNames:{makkah:'Adhan de la Mecque', madina:'Adhan de Médine', egypt:'Adhan égyptien traditionnel', mishari:'Adhan par Mishari', qatami:'Adhan par Nasser Al-Qatami', beep:'Tonalité simple'},
  },
  es: {
    langName:'Español', appName:'Muslim Day', tagline:'Mezquitas cercanas · Horarios de oración · Qibla · Adhan',
    locPrompt:'Toca para ubicarte con precisión', locSearching:'Ubicándote con precisión...', locFound:(a)=>`Ubicación encontrada (precisión ${a} m)`,
    locError:'No se pudo obtener tu ubicación — revisa el GPS y los permisos', noGeo:'Tu navegador no admite geolocalización',
    nextPrayerLabel:'Próxima oración', setLocFirst:'Define tu ubicación primero', timesTitle:'Horarios de hoy',
    notifTitle:'Alerta de Adhan', notifDesc:'Notificación y sonido de adhan automáticos a la hora de la oración',
    mosquesTitle:'Mezquitas cerca de ti', mosquesRefresh:'Actualizar cerca de mí', mosquesPrompt:'Define tu ubicación para ver mezquitas cercanas',
    mosquesSearching:'Buscando mezquitas cercanas...', mosquesError:'No se pudieron obtener los datos, revisa tu conexión',
    mosquesNone:'No hay mezquitas registradas en OpenStreetMap en este radio', mosqueNoName:'Mezquita sin nombre', yourLocation:'Tu ubicación', km:'km',
    qiblaTitle:'Dirección de la Qibla', qiblaNote:'Apunta la parte superior del teléfono hacia el marcador dorado. La precisión depende del sensor de tu dispositivo — verifica siempre con una fuente confiable.',
    qiblaEnable:'Activar brújula en vivo', qiblaEnabled:'Brújula activada', qiblaFromNorth:(d)=>`${d}° desde el Norte`, qiblaAligned:'✅ Estás mirando hacia la Qibla', qiblaNoSensor:'No hay sensor de brújula disponible. Usa el ángulo mostrado con una brújula externa.', qiblaDenied:'Se denegó el permiso del sensor. Actívalo en los ajustes del navegador y reintenta.', qiblaCalibrate:'⚠️ Precisión baja — mueve el teléfono en forma de 8 para calibrar y aléjate de metales/imanes.', qiblaNeedLocation:'Define primero tu ubicación para calcular la Qibla.',
    soundTitle:'Sonido del Adhan', soundBanner:'Enlaces de audio de muestra de un archivo abierto. Cualquier enlace se puede reemplazar fácilmente en el arreglo ADHAN_SOUNDS del código.',
    soundTry:'Escuchar', soundPlayError:'No se pudo reproducir — prueba otro sonido o revisa tu conexión',
    navHome:'Inicio', navMosques:'Mezquitas', navQibla:'Qibla', navSound:'Adhan',
    prayerNames:{Fajr:'Fajr', Dhuhr:'Dhuhr', Asr:'Asr', Maghrib:'Maghrib', Isha:'Isha'},
    prayerFetchError:'No se pudieron obtener los horarios, intenta de nuevo', adhanBody:"Hayya 'ala-salah, Hayya 'ala-l-falah",
    adhanTitle:(p)=>`Es hora de ${p}`, langSheetTitle:'Elige un idioma',
    soundNames:{makkah:'Adhan de La Meca', madina:'Adhan de Medina', egypt:'Adhan egipcio tradicional', mishari:'Adhan por Mishari', qatami:'Adhan por Nasser Al-Qatami', beep:'Tono simple'},
  },
  zh: {
    langName:'中文', appName:'Muslim Day', tagline:'附近清真寺 · 祷告时间 · 朝拜方向 · 宣礼',
    locPrompt:'点击以精确定位', locSearching:'正在精确定位...', locFound:(a)=>`已定位（精度 ${a} 米）`,
    locError:'无法获取位置 — 请检查GPS和权限', noGeo:'您的浏览器不支持定位功能',
    nextPrayerLabel:'下一次礼拜', setLocFirst:'请先设置您的位置', timesTitle:'今日礼拜时间',
    notifTitle:'宣礼提醒', notifDesc:'到礼拜时间自动通知并播放宣礼声音',
    mosquesTitle:'附近的清真寺', mosquesRefresh:'刷新附近搜索', mosquesPrompt:'设置您的位置以查看附近的清真寺',
    mosquesSearching:'正在搜索附近的清真寺...', mosquesError:'无法获取清真寺数据，请检查网络连接',
    mosquesNone:'您所在范围内的OpenStreetMap上没有登记的清真寺', mosqueNoName:'未命名清真寺', yourLocation:'您的位置', km:'公里',
    qiblaTitle:'朝拜方向（Qibla）', qiblaNote:'将手机顶部指向金色标记。精度取决于您设备的指南针传感器 — 请始终与可靠来源核对。',
    qiblaEnable:'启用实时指南针', qiblaEnabled:'指南针已启用', qiblaFromNorth:(d)=>`距正北 ${d}°`, qiblaAligned:'✅ 您已面向朝拜方向', qiblaNoSensor:'此设备/浏览器没有可用的指南针传感器。请配合外部指南针使用所示角度。', qiblaDenied:'传感器权限被拒绝。请在浏览器设置中启用后重试。', qiblaCalibrate:'⚠️ 指南针精度较低 — 请以8字形移动手机校准，并远离金属/磁铁。', qiblaNeedLocation:'请先设置您的位置以计算朝拜方向。',
    soundTitle:'宣礼声音', soundBanner:'这些是来自开放档案的示例音频链接。可以在代码的 ADHAN_SOUNDS 数组中轻松替换任何链接。',
    soundTry:'试听', soundPlayError:'无法播放 — 请尝试其他声音或检查网络连接',
    navHome:'主页', navMosques:'清真寺', navQibla:'朝拜方向', navSound:'宣礼',
    prayerNames:{Fajr:'晨礼', Dhuhr:'晌礼', Asr:'晡礼', Maghrib:'昏礼', Isha:'宵礼'},
    prayerFetchError:'无法获取礼拜时间，请重试', adhanBody:"Hayya 'ala-salah, Hayya 'ala-l-falah",
    adhanTitle:(p)=>`现在是${p}的时间`, langSheetTitle:'选择语言',
    soundNames:{makkah:'麦加宣礼', madina:'麦地那宣礼', egypt:'传统埃及宣礼', mishari:'米沙里宣礼', qatami:'纳赛尔·卡塔米宣礼', beep:'简单提示音'},
  },
  ru: {
    langName:'Русский', appName:'Muslim Day', tagline:'Ближайшие мечети · Время намаза · Кибла · Азан',
    locPrompt:'Нажмите для точного определения местоположения', locSearching:'Определение местоположения...', locFound:(a)=>`Местоположение найдено (точность ${a} м)`,
    locError:'Не удалось определить местоположение — проверьте GPS и разрешения', noGeo:'Ваш браузер не поддерживает геолокацию',
    nextPrayerLabel:'Следующий намаз', setLocFirst:'Сначала укажите местоположение', timesTitle:'Время намазов сегодня',
    notifTitle:'Оповещение азана', notifDesc:'Автоматическое уведомление и звук азана во время намаза',
    mosquesTitle:'Мечети рядом с вами', mosquesRefresh:'Обновить поиск рядом со мной', mosquesPrompt:'Укажите местоположение, чтобы увидеть ближайшие мечети',
    mosquesSearching:'Поиск ближайших мечетей...', mosquesError:'Не удалось получить данные о мечетях, проверьте интернет-соединение',
    mosquesNone:'В этом радиусе от вас нет мечетей, зарегистрированных на OpenStreetMap', mosqueNoName:'Мечеть без названия', yourLocation:'Ваше местоположение', km:'км',
    qiblaTitle:'Направление киблы', qiblaNote:'Направьте верх телефона на золотой маркер. Точность зависит от компаса устройства — всегда сверяйтесь с надёжным источником.',
    qiblaEnable:'Включить компас', qiblaEnabled:'Компас включён', qiblaFromNorth:(d)=>`${d}° от севера`, qiblaAligned:'✅ Вы смотрите в сторону киблы', qiblaNoSensor:'Датчик компаса недоступен. Используйте указанный угол с внешним компасом.', qiblaDenied:'Доступ к датчику отклонён. Включите его в настройках браузера и повторите.', qiblaCalibrate:'⚠️ Низкая точность компаса — опишите телефоном восьмёрку для калибровки, держитесь вдали от металла/магнитов.', qiblaNeedLocation:'Сначала укажите местоположение, чтобы рассчитать киблу.',
    soundTitle:'Звук азана', soundBanner:'Это примеры аудиоссылок из открытого архива. Любую ссылку легко заменить в массиве ADHAN_SOUNDS в коде.',
    soundTry:'Прослушать', soundPlayError:'Не удалось воспроизвести — попробуйте другой звук или проверьте соединение',
    navHome:'Главная', navMosques:'Мечети', navQibla:'Кибла', navSound:'Азан',
    prayerNames:{Fajr:'Фаджр', Dhuhr:'Зухр', Asr:'Аср', Maghrib:'Магриб', Isha:'Иша'},
    prayerFetchError:'Не удалось получить время намазов, попробуйте снова', adhanBody:"Хайя 'аля-ссаля, Хайя 'аля-ль-фалях",
    adhanTitle:(p)=>`Наступило время ${p}`, langSheetTitle:'Выберите язык',
    soundNames:{makkah:'Азан Мекки', madina:'Азан Медины', egypt:'Традиционный египетский азан', mishari:'Азан в исполнении Мишари', qatami:'Азан в исполнении Насера Аль-Катами', beep:'Простой сигнал'},
  },
};
const PRAYER_ORDER = ['Fajr','Dhuhr','Asr','Maghrib','Isha'];

/* ================= نصوص إضافية: يوم المسلم + الإعدادات المتقدمة ================= */
const STRINGS_EXT = {
  ar: {
    navMuslimDay:'يوم المسلم', navSettingsTitle:'الإعدادات', openMuslimDay:'فتح يوم المسلم',
    mdHomeProgress:(d,t)=> t===0 ? 'اختر الأعمال التي تريد متابعتها' : `أنجزت ${d} من ${t} أعمال اليوم`,
    mdTitleShort:'🌙 يوم المسلم',
    extraTimesTitle:'أوقات إضافية', extraSunrise:'الشروق', extraImsak:'الإمساك', extraMidnight:'منتصف الليل', extraLastThird:'آخر ثلث الليل',
    notifHint:'لتحكم أدق بكل صلاة على حدة، افتح الإعدادات ⚙️',
    radiusLabel:'نطاق البحث',
    favMosqueTitle:'مسجدي المفضل', favMosqueOpen:'فتح',
    mdBackToday:'اليوم', mdMonthShow:'📅 هذا الشهر', mdMonthHide:'✕ إغلاق الشهر',
    hijriDisclaimer:'قد يختلف التاريخ الهجري يومًا حسب رؤية الهلال والجهة المحلية.',
    mdProgressText:(d,t)=> t===0 ? 'لم تُفعّل متابعة أي عمل بعد — اضغط ⚙️ للتخصيص.' : `أنجزت ${d} من ${t} من الأعمال التي اخترتها اليوم.`,
    secPrayers:'الصلوات', secQuran:'القرآن', secAzkar:'الأذكار', secNight:'قيام الليل', secParents:'بر الوالدين',
    secLearning:'طلب العلم', secCharity:'أعمال الخير', secFasting:'الصيام', secFriday:'أعمال يوم الجمعة',
    prayed:'صليت', jamaah:'جماعة', atMosque:'في المسجد', mashallah:'ما شاء الله، أحسنت.',
    quranRead:'قرأت القرآن اليوم', quranMemorized:'حفظت قرآنًا اليوم', quranReviewed:'راجعت حفظي اليوم',
    azkarMorning:'أذكار الصباح', azkarEvening:'أذكار المساء', azkarAfter:'أذكار بعد الصلاة',
    azkarNote:'سيتم ربط هذا القسم بمحتوى الأذكار عند توفره في التطبيق.',
    qiyam:'قيام الليل', witr:'الوتر', parentsDone:'فعلت اليوم شيئًا من بر الوالدين', learningDone:'تعلمت شيئًا جديدًا في ديني اليوم',
    charitySadaqah:'تصدقت', charityHelped:'ساعدت شخصًا', charitySilaRahim:'وصلت رحمي', charityOther:'فعلت عملًا صالحًا آخر',
    fastingQuestion:'هل صمت اليوم؟', fastingYes:'نعم', fastingNo:'لا',
    fastingReasonMonday:'الاثنين — يوم صيام مسنون', fastingReasonThursday:'الخميس — يوم صيام مسنون', fastingReasonWhite:'من الأيام البيض (13-15 هجري) — أيام صيام مسنونة',
    fridayKahf:'قراءة سورة الكهف', fridaySalawat:'الإكثار من الصلاة على النبي ﷺ', fridayDua:'الدعاء', fridayEarly:'التبكير إلى صلاة الجمعة', fridayGhusl:'الاغتسال والتطيب للجمعة',
    monthTitle:'هذا الشهر', monthStatPrayed:'صلوات مسجّلة', monthStatJamaah:'صلوات جماعة', monthStatMosque:'صلوات بالمسجد',
    monthStatQuran:'أيام قراءة القرآن', monthStatMorningAzkar:'أذكار الصباح', monthStatEveningAzkar:'أذكار المساء',
    monthStatQiyam:'قيام الليل', monthStatWitr:'الوتر', monthStatFasting:'أيام الصيام',
    customizeTitle:'اختر ما تريد متابعته', customizeSave:'حفظ',
    trackPrayers:'الصلوات', trackJamaah:'الصلاة جماعة', trackMosque:'الصلاة في المسجد', trackQuran:'القرآن',
    trackQuranMemorize:'حفظ القرآن', trackQuranReview:'مراجعة القرآن', trackAzkarMorning:'أذكار الصباح', trackAzkarEvening:'أذكار المساء',
    trackAzkarAfter:'أذكار بعد الصلاة', trackQiyam:'قيام الليل', trackWitr:'الوتر', trackParents:'بر الوالدين', trackLearning:'طلب العلم',
    trackSadaqah:'الصدقة', trackGoodDeeds:'أعمال الخير', trackFasting:'الصيام',
    settingsTitle:'الإعدادات', secSettingsPrayer:'مواقيت الصلاة', calcMethod:'طريقة الحساب', asrMadhhab:'مذهب العصر',
    shafi:'شافعي', maliki:'مالكي', hanbali:'حنبلي', hanafi:'حنفي', adjustTimes:'تعديل المواقيت (بالدقائق)',
    asrNote:'فلكيًا، مواقيت العصر عند الشافعي والمالكي والحنبلي متطابقة (يبدأ الوقت حين يصير ظل الشيء مثله)، بينما يتأخر وقته عند الحنفي (حين يصير الظل مثليه). لذلك تُحسب هذه المذاهب الثلاثة بنفس الطريقة في التطبيق.',
    secSettingsAdhan:'الأذان والتنبيهات', notifyLabel:'إشعار', adhanLabel:'أذان', reminderLabel:'تذكير',
    reminderBefore:'التذكير قبل الصلاة', reminderOff:'إيقاف', reminderNotice:(m,p)=>`تبقى ${m} دقائق على صلاة ${p}`,
    secSettingsLocation:'الموقع', useGps:'تحديث عبر GPS', manualCoords:'إدخال إحداثيات يدويًا', save:'حفظ',
    secSettingsAccount:'الحساب', googleNote:'تسجيل الدخول عبر Firebase يربط حسابك (Google أو البريد الإلكتروني) بهذا التطبيق، حتى يمكنك لاحقًا استخدام نفس بياناتك على أجهزة أخرى.', signOut:'تسجيل الخروج',
    googleSignIn:'المتابعة بحساب Google', authOr:'أو', authEmailPlaceholder:'البريد الإلكتروني', authPasswordPlaceholder:'كلمة المرور',
    authSubmitLogin:'تسجيل الدخول', authSubmitRegister:'إنشاء حساب', authToggleToRegister:'ليس لديك حساب؟ أنشئ حسابًا جديدًا', authToggleToLogin:'لديك حساب بالفعل؟ سجّل الدخول',
    authForgot:'نسيت كلمة المرور؟', authNeedFields:'الرجاء إدخال البريد الإلكتروني وكلمة المرور.', authNeedEmailForReset:'الرجاء إدخال بريدك الإلكتروني أولًا.', authResetSent:'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.',
    authNamePlaceholder:'اسمك', authNeedName:'الرجاء إدخال اسمك.', authNotReady:'تعذّر الاتصال بخدمة تسجيل الدخول، تحقق من اتصالك بالإنترنت.',
    accountSignedOutPrompt:'لست مسجّلاً الدخول حاليًا.', openAuthGate:'تسجيل الدخول',
    gateTitle:'مرحبًا بك في Muslim Day', gateSubtitle:'سجّل الدخول لحفظ إعداداتك واستخدام نفس حسابك لاحقًا على أجهزة أخرى', gateLoading:'جارٍ التحقق من حسابك...', gateGuest:'المتابعة بدون حساب الآن',
    geocodeNote:'البحث بالاسم عن مدينة يتطلب خدمة بحث جغرافي خارجية غير مضافة حاليًا للحفاظ على سياسة الأمان الحالية (CSP). استخدم GPS أو أدخل الإحداثيات يدويًا.',
    secSettingsMuslimDay:'يوم المسلم', editTracked:'الأعمال المتابَعة', resetToday:'إعادة ضبط بيانات اليوم', clearHistory:'مسح السجل بالكامل',
    iosInstallTitle:'ثبّت التطبيق على شاشتك الرئيسية', iosInstallSteps:'اضغط زر المشاركة أسفل الشاشة، ثم اختر "إضافة إلى الشاشة الرئيسية"',
    confirmResetToday:'هل تريد إعادة ضبط بيانات اليوم؟ لا يمكن التراجع.', confirmClearHistory:'هل تريد مسح كل سجل يوم المسلم نهائيًا؟ لا يمكن التراجع.',
    methodNames:{mwl:'رابطة العالم الإسلامي', egyptian:'الهيئة المصرية العامة للمساحة', makkah:'أم القرى - مكة المكرمة', karachi:'جامعة العلوم الإسلامية - كراتشي', isna:'الجمعية الإسلامية لأمريكا الشمالية', kuwait:'الكويت', qatar:'قطر', gulf:'منطقة الخليج', singapore:'سنغافورة', turkey:'ديانت - تركيا', dubai:'دبي'},
    detailDistance:'المسافة', detailDirections:'الاتجاهات', detailPhone:'الهاتف', detailWebsite:'الموقع الإلكتروني', detailHours:'أوقات العمل', detailNoExtra:'لا تتوفر بيانات إضافية موثوقة لهذا المسجد على OpenStreetMap.',
  },
  en: {
    navMuslimDay:'Muslim Day', navSettingsTitle:'Settings', openMuslimDay:'Open Muslim Day',
    mdHomeProgress:(d,t)=> t===0 ? 'Choose what you want to track' : `${d} of ${t} tasks done today`,
    mdTitleShort:'🌙 Muslim Day',
    extraTimesTitle:'Extra times', extraSunrise:'Sunrise', extraImsak:'Imsak', extraMidnight:'Midnight', extraLastThird:'Last third of night',
    notifHint:'For finer per-prayer control, open Settings ⚙️',
    radiusLabel:'Search radius',
    favMosqueTitle:'My favorite mosque', favMosqueOpen:'Open',
    mdBackToday:'Today', mdMonthShow:'📅 This month', mdMonthHide:'✕ Close month view',
    hijriDisclaimer:'The Hijri date may differ by a day depending on moon sighting and local authority.',
    mdProgressText:(d,t)=> t===0 ? 'No tasks enabled yet — tap ⚙️ to customize.' : `You completed ${d} of ${t} of the tasks you chose today.`,
    secPrayers:'Prayers', secQuran:'Quran', secAzkar:'Azkar', secNight:'Night worship', secParents:'Kindness to parents',
    secLearning:'Seeking knowledge', secCharity:'Good deeds', secFasting:'Fasting', secFriday:"Friday's recommended acts",
    prayed:'Prayed', jamaah:'Congregation', atMosque:'At the mosque', mashallah:"Ma sha' Allah, well done.",
    quranRead:'Read Quran today', quranMemorized:'Memorized Quran today', quranReviewed:'Reviewed my memorization today',
    azkarMorning:'Morning azkar', azkarEvening:'Evening azkar', azkarAfter:'Azkar after prayer',
    azkarNote:'This section will link to azkar content once it is added to the app.',
    qiyam:'Night prayer (Qiyam)', witr:'Witr', parentsDone:'Did something kind for my parents today', learningDone:'Learned something new about my religion today',
    charitySadaqah:'Gave charity', charityHelped:'Helped someone', charitySilaRahim:'Kept family ties', charityOther:'Did another good deed',
    fastingQuestion:'Did you fast today?', fastingYes:'Yes', fastingNo:'No',
    fastingReasonMonday:'Monday — a recommended fasting day', fastingReasonThursday:'Thursday — a recommended fasting day', fastingReasonWhite:'One of the White Days (13–15 Hijri) — recommended fasting days',
    fridayKahf:'Read Surah Al-Kahf', fridaySalawat:'Send abundant blessings on the Prophet ﷺ', fridayDua:'Make dua', fridayEarly:'Go early to Friday prayer', fridayGhusl:'Ghusl and perfume for Friday',
    monthTitle:'This month', monthStatPrayed:'Prayers logged', monthStatJamaah:'Congregational prayers', monthStatMosque:'Prayers at the mosque',
    monthStatQuran:'Quran reading days', monthStatMorningAzkar:'Morning azkar', monthStatEveningAzkar:'Evening azkar',
    monthStatQiyam:'Night prayer', monthStatWitr:'Witr', monthStatFasting:'Fasting days',
    customizeTitle:'Choose what to track', customizeSave:'Save',
    trackPrayers:'Prayers', trackJamaah:'Praying in congregation', trackMosque:'Praying at the mosque', trackQuran:'Quran',
    trackQuranMemorize:'Quran memorization', trackQuranReview:'Quran review', trackAzkarMorning:'Morning azkar', trackAzkarEvening:'Evening azkar',
    trackAzkarAfter:'Azkar after prayer', trackQiyam:'Night prayer', trackWitr:'Witr', trackParents:'Kindness to parents', trackLearning:'Seeking knowledge',
    trackSadaqah:'Charity', trackGoodDeeds:'Good deeds', trackFasting:'Fasting',
    settingsTitle:'Settings', secSettingsPrayer:'Prayer times', calcMethod:'Calculation method', asrMadhhab:'Asr school',
    shafi:'Shafi', maliki:'Maliki', hanbali:'Hanbali', hanafi:'Hanafi', adjustTimes:'Adjust times (minutes)',
    asrNote:'Astronomically, Asr starts at the same moment for the Shafi, Maliki and Hanbali schools (when an object\u2019s shadow equals its length), while the Hanafi school starts it later (when the shadow is twice the length). So these three schools are calculated the same way in the app.',
    secSettingsAdhan:'Adhan & alerts', notifyLabel:'Notify', adhanLabel:'Adhan', reminderLabel:'Reminder',
    reminderBefore:'Reminder before prayer', reminderOff:'Off', reminderNotice:(m,p)=>`${m} minutes left until ${p}`,
    secSettingsLocation:'Location', useGps:'Refresh via GPS', manualCoords:'Enter coordinates manually', save:'Save',
    secSettingsAccount:'Account', googleNote:'Signing in with Firebase links your account (Google or email) to this app, so you can later use the same data on other devices.', signOut:'Sign out',
    googleSignIn:'Continue with Google', authOr:'or', authEmailPlaceholder:'Email address', authPasswordPlaceholder:'Password',
    authSubmitLogin:'Sign in', authSubmitRegister:'Create account', authToggleToRegister:"Don't have an account? Create one", authToggleToLogin:'Already have an account? Sign in',
    authForgot:'Forgot your password?', authNeedFields:'Please enter your email and password.', authNeedEmailForReset:'Please enter your email address first.', authResetSent:'A password reset link has been sent to your email.',
    authNamePlaceholder:'Your name', authNeedName:'Please enter your name.', authNotReady:'Could not reach the sign-in service — check your internet connection.',
    accountSignedOutPrompt:"You're not signed in.", openAuthGate:'Sign in',
    gateTitle:'Welcome to Muslim Day', gateSubtitle:'Sign in to save your settings and use the same account later on other devices', gateLoading:'Checking your account...', gateGuest:'Continue without an account',
    geocodeNote:'Searching for a city by name needs an external geocoding service that isn\u2019t currently added, to keep the existing security policy (CSP) intact. Use GPS or enter coordinates manually instead.',
    secSettingsMuslimDay:'Muslim Day', editTracked:'Tracked tasks', resetToday:"Reset today's data", clearHistory:'Clear all history',
    iosInstallTitle:'Add this app to your Home Screen', iosInstallSteps:'Tap the Share button at the bottom of the screen, then choose "Add to Home Screen"',
    confirmResetToday:"Reset today's data? This can't be undone.", confirmClearHistory:"Clear all Muslim Day history? This can't be undone.",
    methodNames:{mwl:'Muslim World League', egyptian:'Egyptian General Authority of Survey', makkah:'Umm Al-Qura, Makkah', karachi:'University of Islamic Sciences, Karachi', isna:'Islamic Society of North America', kuwait:'Kuwait', qatar:'Qatar', gulf:'Gulf Region', singapore:'Singapore', turkey:'Diyanet, Turkey', dubai:'Dubai'},
    detailDistance:'Distance', detailDirections:'Directions', detailPhone:'Phone', detailWebsite:'Website', detailHours:'Opening hours', detailNoExtra:'No additional verified data is available for this mosque on OpenStreetMap.',
  },
  fr: {
    navMuslimDay:'Jour du musulman', navSettingsTitle:'Paramètres', openMuslimDay:'Ouvrir',
    mdHomeProgress:(d,t)=> t===0 ? 'Choisissez ce que vous voulez suivre' : `${d} sur ${t} tâches faites aujourd\u2019hui`,
    mdTitleShort:'🌙 Jour du musulman',
    extraTimesTitle:'Horaires supplémentaires', extraSunrise:'Lever du soleil', extraImsak:'Imsak', extraMidnight:'Minuit', extraLastThird:'Dernier tiers de la nuit',
    notifHint:'Pour un contrôle plus précis par prière, ouvrez les Paramètres ⚙️',
    radiusLabel:'Rayon de recherche',
    favMosqueTitle:'Ma mosquée favorite', favMosqueOpen:'Ouvrir',
    mdBackToday:"Aujourd'hui", mdMonthShow:'📅 Ce mois-ci', mdMonthHide:'✕ Fermer',
    hijriDisclaimer:'La date hégirienne peut différer d\u2019un jour selon l\u2019observation de la lune et l\u2019autorité locale.',
    mdProgressText:(d,t)=> t===0 ? 'Aucune tâche activée — appuyez sur ⚙️ pour personnaliser.' : `Vous avez accompli ${d} sur ${t} des tâches choisies aujourd\u2019hui.`,
    secPrayers:'Prières', secQuran:'Coran', secAzkar:'Azkar', secNight:'Prière nocturne', secParents:'Bonté envers les parents',
    secLearning:'Quête du savoir', secCharity:'Bonnes actions', secFasting:'Jeûne', secFriday:'Actes recommandés du vendredi',
    prayed:'Prié', jamaah:'En groupe', atMosque:'À la mosquée', mashallah:'Mach\u2019Allah, bien joué.',
    quranRead:"Lu le Coran aujourd'hui", quranMemorized:"Mémorisé du Coran aujourd'hui", quranReviewed:"Révisé ma mémorisation aujourd'hui",
    azkarMorning:'Azkar du matin', azkarEvening:'Azkar du soir', azkarAfter:'Azkar après la prière',
    azkarNote:'Cette section sera reliée au contenu des azkar une fois ajouté à l\u2019application.',
    qiyam:'Prière nocturne (Qiyam)', witr:'Witr', parentsDone:"Fait quelque chose de bien pour mes parents aujourd'hui", learningDone:"Appris quelque chose de nouveau sur ma religion aujourd'hui",
    charitySadaqah:'Fait l\u2019aumône', charityHelped:'Aidé quelqu\u2019un', charitySilaRahim:'Maintenu les liens familiaux', charityOther:'Fait une autre bonne action',
    fastingQuestion:'Avez-vous jeûné aujourd\u2019hui ?', fastingYes:'Oui', fastingNo:'Non',
    fastingReasonMonday:'Lundi — jour de jeûne recommandé', fastingReasonThursday:'Jeudi — jour de jeûne recommandé', fastingReasonWhite:'Un des jours blancs (13-15 hégirien) — jours de jeûne recommandés',
    fridayKahf:'Lire la sourate Al-Kahf', fridaySalawat:'Multiplier les prières sur le Prophète ﷺ', fridayDua:'Invoquer Allah', fridayEarly:'Aller tôt à la prière du vendredi', fridayGhusl:'Ghusl et parfum pour le vendredi',
    monthTitle:'Ce mois-ci', monthStatPrayed:'Prières enregistrées', monthStatJamaah:'Prières en groupe', monthStatMosque:'Prières à la mosquée',
    monthStatQuran:'Jours de lecture du Coran', monthStatMorningAzkar:'Azkar du matin', monthStatEveningAzkar:'Azkar du soir',
    monthStatQiyam:'Prière nocturne', monthStatWitr:'Witr', monthStatFasting:'Jours de jeûne',
    customizeTitle:'Choisissez ce que vous voulez suivre', customizeSave:'Enregistrer',
    trackPrayers:'Prières', trackJamaah:'Prière en groupe', trackMosque:'Prière à la mosquée', trackQuran:'Coran',
    trackQuranMemorize:'Mémorisation du Coran', trackQuranReview:'Révision du Coran', trackAzkarMorning:'Azkar du matin', trackAzkarEvening:'Azkar du soir',
    trackAzkarAfter:'Azkar après la prière', trackQiyam:'Prière nocturne', trackWitr:'Witr', trackParents:'Bonté envers les parents', trackLearning:'Quête du savoir',
    trackSadaqah:'Aumône', trackGoodDeeds:'Bonnes actions', trackFasting:'Jeûne',
    settingsTitle:'Paramètres', secSettingsPrayer:'Horaires de prière', calcMethod:'Méthode de calcul', asrMadhhab:'École pour Asr',
    shafi:'Chafiite', maliki:'Malikite', hanbali:'Hanbalite', hanafi:'Hanafite', adjustTimes:'Ajuster les horaires (minutes)',
    asrNote:'Astronomiquement, l\u2019heure de Asr est identique pour les écoles chafiite, malikite et hanbalite (quand l\u2019ombre d\u2019un objet égale sa longueur), tandis qu\u2019elle est plus tardive pour l\u2019école hanafite (ombre égale au double). Ces trois écoles sont donc calculées de la même façon dans l\u2019application.',
    secSettingsAdhan:'Adhan et alertes', notifyLabel:'Notifier', adhanLabel:'Adhan', reminderLabel:'Rappel',
    reminderBefore:'Rappel avant la prière', reminderOff:'Désactivé', reminderNotice:(m,p)=>`Il reste ${m} minutes avant ${p}`,
    secSettingsLocation:'Position', useGps:'Actualiser via GPS', manualCoords:'Saisir les coordonnées manuellement', save:'Enregistrer',
    secSettingsAccount:'Compte', googleNote:'La connexion via Firebase relie votre compte (Google ou e-mail) à cette application, afin de retrouver vos données sur d\u2019autres appareils.', signOut:'Se déconnecter',
    googleSignIn:'Continuer avec Google', authOr:'ou', authEmailPlaceholder:'Adresse e-mail', authPasswordPlaceholder:'Mot de passe',
    authSubmitLogin:'Se connecter', authSubmitRegister:'Créer un compte', authToggleToRegister:'Pas de compte ? Créez-en un', authToggleToLogin:'Déjà un compte ? Connectez-vous',
    authForgot:'Mot de passe oublié ?', authNeedFields:'Veuillez saisir votre e-mail et votre mot de passe.', authNeedEmailForReset:'Veuillez d\u2019abord saisir votre adresse e-mail.', authResetSent:'Un lien de réinitialisation a été envoyé à votre e-mail.',
    authNamePlaceholder:'Votre nom', authNeedName:'Veuillez saisir votre nom.', authNotReady:'Impossible de joindre le service de connexion — vérifiez votre connexion internet.',
    accountSignedOutPrompt:"Vous n'êtes pas connecté.", openAuthGate:'Se connecter',
    gateTitle:'Bienvenue sur Muslim Day', gateSubtitle:'Connectez-vous pour sauvegarder vos réglages et retrouver le même compte sur d\u2019autres appareils', gateLoading:'Vérification de votre compte...', gateGuest:'Continuer sans compte',
    geocodeNote:'La recherche d\u2019une ville par son nom nécessite un service de géocodage externe non ajouté actuellement, afin de préserver la politique de sécurité (CSP) en place. Utilisez le GPS ou saisissez les coordonnées manuellement.',
    secSettingsMuslimDay:'Jour du musulman', editTracked:'Tâches suivies', resetToday:"Réinitialiser les données d'aujourd'hui", clearHistory:'Effacer tout l\u2019historique',
    iosInstallTitle:"Ajoutez l'application à l'écran d'accueil", iosInstallSteps:'Appuyez sur le bouton Partager en bas de l\u2019écran, puis choisissez « Sur l\u2019écran d\u2019accueil »',
    confirmResetToday:"Réinitialiser les données d'aujourd'hui ? Action irréversible.", confirmClearHistory:'Effacer tout l\u2019historique du Jour du musulman ? Action irréversible.',
    methodNames:{mwl:'Ligue islamique mondiale', egyptian:'Autorité générale égyptienne du relevé', makkah:'Oumm Al-Qura, La Mecque', karachi:'Université des sciences islamiques, Karachi', isna:'ISNA (Amérique du Nord)', kuwait:'Koweït', qatar:'Qatar', gulf:'Région du Golfe', singapore:'Singapour', turkey:'Diyanet, Turquie', dubai:'Dubaï'},
    detailDistance:'Distance', detailDirections:'Itinéraire', detailPhone:'Téléphone', detailWebsite:'Site web', detailHours:'Horaires', detailNoExtra:'Aucune donnée supplémentaire vérifiée n\u2019est disponible pour cette mosquée sur OpenStreetMap.',
  },
  es: {
    navMuslimDay:'Día del musulmán', navSettingsTitle:'Ajustes', openMuslimDay:'Abrir',
    mdHomeProgress:(d,t)=> t===0 ? 'Elige qué quieres seguir' : `${d} de ${t} tareas hechas hoy`,
    mdTitleShort:'🌙 Día del musulmán',
    extraTimesTitle:'Horarios adicionales', extraSunrise:'Amanecer', extraImsak:'Imsak', extraMidnight:'Medianoche', extraLastThird:'Último tercio de la noche',
    notifHint:'Para un control más preciso por oración, abre Ajustes ⚙️',
    radiusLabel:'Radio de búsqueda',
    favMosqueTitle:'Mi mezquita favorita', favMosqueOpen:'Abrir',
    mdBackToday:'Hoy', mdMonthShow:'📅 Este mes', mdMonthHide:'✕ Cerrar',
    hijriDisclaimer:'La fecha hijri puede diferir un día según el avistamiento de la luna y la autoridad local.',
    mdProgressText:(d,t)=> t===0 ? 'Ninguna tarea activada — toca ⚙️ para personalizar.' : `Completaste ${d} de ${t} de las tareas que elegiste hoy.`,
    secPrayers:'Oraciones', secQuran:'Corán', secAzkar:'Azkar', secNight:'Oración nocturna', secParents:'Bondad con los padres',
    secLearning:'Búsqueda del conocimiento', secCharity:'Buenas obras', secFasting:'Ayuno', secFriday:'Actos recomendados del viernes',
    prayed:'Recé', jamaah:'En congregación', atMosque:'En la mezquita', mashallah:'Mash\u00e1 Al\u00e1, bien hecho.',
    quranRead:'Leí el Corán hoy', quranMemorized:'Memoricé Corán hoy', quranReviewed:'Repasé mi memorización hoy',
    azkarMorning:'Azkar de la mañana', azkarEvening:'Azkar de la tarde', azkarAfter:'Azkar tras la oración',
    azkarNote:'Esta sección se vinculará al contenido de azkar cuando esté disponible en la app.',
    qiyam:'Oración nocturna (Qiyam)', witr:'Witr', parentsDone:'Hice algo bueno por mis padres hoy', learningDone:'Aprendí algo nuevo sobre mi religión hoy',
    charitySadaqah:'Di caridad', charityHelped:'Ayudé a alguien', charitySilaRahim:'Mantuve lazos familiares', charityOther:'Hice otra buena obra',
    fastingQuestion:'¿Ayunaste hoy?', fastingYes:'Sí', fastingNo:'No',
    fastingReasonMonday:'Lunes — día de ayuno recomendado', fastingReasonThursday:'Jueves — día de ayuno recomendado', fastingReasonWhite:'Uno de los días blancos (13-15 hijri) — días de ayuno recomendados',
    fridayKahf:'Leer la sura Al-Kahf', fridaySalawat:'Enviar abundantes bendiciones al Profeta ﷺ', fridayDua:'Hacer dua', fridayEarly:'Ir temprano a la oración del viernes', fridayGhusl:'Ghusl y perfume para el viernes',
    monthTitle:'Este mes', monthStatPrayed:'Oraciones registradas', monthStatJamaah:'Oraciones en congregación', monthStatMosque:'Oraciones en la mezquita',
    monthStatQuran:'Días de lectura del Corán', monthStatMorningAzkar:'Azkar de la mañana', monthStatEveningAzkar:'Azkar de la tarde',
    monthStatQiyam:'Oración nocturna', monthStatWitr:'Witr', monthStatFasting:'Días de ayuno',
    customizeTitle:'Elige qué quieres seguir', customizeSave:'Guardar',
    trackPrayers:'Oraciones', trackJamaah:'Oración en congregación', trackMosque:'Oración en la mezquita', trackQuran:'Corán',
    trackQuranMemorize:'Memorización del Corán', trackQuranReview:'Repaso del Corán', trackAzkarMorning:'Azkar de la mañana', trackAzkarEvening:'Azkar de la tarde',
    trackAzkarAfter:'Azkar tras la oración', trackQiyam:'Oración nocturna', trackWitr:'Witr', trackParents:'Bondad con los padres', trackLearning:'Búsqueda del conocimiento',
    trackSadaqah:'Caridad', trackGoodDeeds:'Buenas obras', trackFasting:'Ayuno',
    settingsTitle:'Ajustes', secSettingsPrayer:'Horarios de oración', calcMethod:'Método de cálculo', asrMadhhab:'Escuela para Asr',
    shafi:'Shafi', maliki:'Maliki', hanbali:'Hanbali', hanafi:'Hanafi', adjustTimes:'Ajustar horarios (minutos)',
    asrNote:'Astronómicamente, la hora de Asr es la misma para las escuelas shafi, maliki y hanbali (cuando la sombra de un objeto iguala su longitud), mientras que es más tardía para la escuela hanafi (sombra igual al doble). Por eso estas tres escuelas se calculan igual en la app.',
    secSettingsAdhan:'Adhan y alertas', notifyLabel:'Notificar', adhanLabel:'Adhan', reminderLabel:'Recordatorio',
    reminderBefore:'Recordatorio antes de la oración', reminderOff:'Desactivado', reminderNotice:(m,p)=>`Quedan ${m} minutos para ${p}`,
    secSettingsLocation:'Ubicación', useGps:'Actualizar por GPS', manualCoords:'Introducir coordenadas manualmente', save:'Guardar',
    secSettingsAccount:'Cuenta', googleNote:'Iniciar sesión con Firebase vincula tu cuenta (Google o correo) a esta app, para que luego puedas usar los mismos datos en otros dispositivos.', signOut:'Cerrar sesión',
    googleSignIn:'Continuar con Google', authOr:'o', authEmailPlaceholder:'Correo electrónico', authPasswordPlaceholder:'Contraseña',
    authSubmitLogin:'Iniciar sesión', authSubmitRegister:'Crear cuenta', authToggleToRegister:'¿No tienes cuenta? Crea una', authToggleToLogin:'¿Ya tienes cuenta? Inicia sesión',
    authForgot:'¿Olvidaste tu contraseña?', authNeedFields:'Por favor introduce tu correo y contraseña.', authNeedEmailForReset:'Por favor introduce tu correo electrónico primero.', authResetSent:'Se ha enviado un enlace de restablecimiento a tu correo.',
    authNamePlaceholder:'Tu nombre', authNeedName:'Por favor introduce tu nombre.', authNotReady:'No se pudo conectar con el servicio de inicio de sesión — revisa tu conexión a internet.',
    accountSignedOutPrompt:'No has iniciado sesión.', openAuthGate:'Iniciar sesión',
    gateTitle:'Bienvenido a Muslim Day', gateSubtitle:'Inicia sesión para guardar tu configuración y usar la misma cuenta luego en otros dispositivos', gateLoading:'Comprobando tu cuenta...', gateGuest:'Continuar sin cuenta',
    geocodeNote:'Buscar una ciudad por nombre requiere un servicio de geocodificación externo que no está añadido actualmente, para mantener la política de seguridad (CSP) existente. Usa el GPS o introduce las coordenadas manualmente.',
    secSettingsMuslimDay:'Día del musulmán', editTracked:'Tareas seguidas', resetToday:'Restablecer los datos de hoy', clearHistory:'Borrar todo el historial',
    iosInstallTitle:'Añade la app a tu pantalla de inicio', iosInstallSteps:'Toca el botón Compartir en la parte inferior y elige "Añadir a pantalla de inicio"',
    confirmResetToday:'¿Restablecer los datos de hoy? No se puede deshacer.', confirmClearHistory:'¿Borrar todo el historial del Día del musulmán? No se puede deshacer.',
    methodNames:{mwl:'Liga Mundial Musulmana', egyptian:'Autoridad General Egipcia de Topografía', makkah:'Umm Al-Qura, La Meca', karachi:'Universidad de Ciencias Islámicas, Karachi', isna:'ISNA (Norteamérica)', kuwait:'Kuwait', qatar:'Catar', gulf:'Región del Golfo', singapore:'Singapur', turkey:'Diyanet, Turquía', dubai:'Dubái'},
    detailDistance:'Distancia', detailDirections:'Direcciones', detailPhone:'Teléfono', detailWebsite:'Sitio web', detailHours:'Horario', detailNoExtra:'No hay datos adicionales verificados disponibles para esta mezquita en OpenStreetMap.',
  },
  zh: {
    navMuslimDay:'穆斯林之日', navSettingsTitle:'设置', openMuslimDay:'打开',
    mdHomeProgress:(d,t)=> t===0 ? '选择您想追踪的项目' : `今日已完成 ${d}/${t} 项`,
    mdTitleShort:'🌙 穆斯林之日',
    extraTimesTitle:'其他时间', extraSunrise:'日出', extraImsak:'伊姆萨克', extraMidnight:'午夜', extraLastThird:'夜晚最后三分之一',
    notifHint:'如需对每次礼拜进行更精细的控制，请打开设置 ⚙️',
    radiusLabel:'搜索范围',
    favMosqueTitle:'我最喜欢的清真寺', favMosqueOpen:'打开',
    mdBackToday:'今天', mdMonthShow:'📅 本月', mdMonthHide:'✕ 关闭',
    hijriDisclaimer:'伊斯兰历日期可能因见月和当地权威机构而相差一天。',
    mdProgressText:(d,t)=> t===0 ? '尚未启用任何项目 — 点击 ⚙️ 进行自定义。' : `您今天已完成所选 ${t} 项中的 ${d} 项。`,
    secPrayers:'礼拜', secQuran:'古兰经', secAzkar:'赞念', secNight:'夜间礼拜', secParents:'孝敬父母',
    secLearning:'求知', secCharity:'善行', secFasting:'斋戒', secFriday:'主麻日推荐功修',
    prayed:'已礼拜', jamaah:'集体礼拜', atMosque:'在清真寺', mashallah:'马沙安拉，做得好。',
    quranRead:'今天诵读了古兰经', quranMemorized:'今天背诵了古兰经', quranReviewed:'今天复习了我的背诵',
    azkarMorning:'晨间赞念', azkarEvening:'晚间赞念', azkarAfter:'礼拜后赞念',
    azkarNote:'待应用添加相关内容后，本部分将与赞念内容关联。',
    qiyam:'夜间礼拜（Qiyam）', witr:'维特尔', parentsDone:'今天为父母做了一件孝顺的事', learningDone:'今天学习了一些新的宗教知识',
    charitySadaqah:'施舍了', charityHelped:'帮助了别人', charitySilaRahim:'联系了亲人', charityOther:'做了另一件善事',
    fastingQuestion:'你今天斋戒了吗？', fastingYes:'是', fastingNo:'否',
    fastingReasonMonday:'星期一 — 推荐斋戒日', fastingReasonThursday:'星期四 — 推荐斋戒日', fastingReasonWhite:'白色日之一（伊斯兰历13-15日）— 推荐斋戒日',
    fridayKahf:'诵读山洞章', fridaySalawat:'多为先知祈福 ﷺ', fridayDua:'祈祷', fridayEarly:'提早前往主麻聚礼', fridayGhusl:'主麻日大净并使用香料',
    monthTitle:'本月', monthStatPrayed:'已记录礼拜', monthStatJamaah:'集体礼拜次数', monthStatMosque:'在清真寺礼拜次数',
    monthStatQuran:'诵经天数', monthStatMorningAzkar:'晨间赞念', monthStatEveningAzkar:'晚间赞念',
    monthStatQiyam:'夜间礼拜', monthStatWitr:'维特尔', monthStatFasting:'斋戒天数',
    customizeTitle:'选择您想追踪的项目', customizeSave:'保存',
    trackPrayers:'礼拜', trackJamaah:'集体礼拜', trackMosque:'在清真寺礼拜', trackQuran:'古兰经',
    trackQuranMemorize:'背诵古兰经', trackQuranReview:'复习古兰经', trackAzkarMorning:'晨间赞念', trackAzkarEvening:'晚间赞念',
    trackAzkarAfter:'礼拜后赞念', trackQiyam:'夜间礼拜', trackWitr:'维特尔', trackParents:'孝敬父母', trackLearning:'求知',
    trackSadaqah:'施舍', trackGoodDeeds:'善行', trackFasting:'斋戒',
    settingsTitle:'设置', secSettingsPrayer:'礼拜时间', calcMethod:'计算方法', asrMadhhab:'晡礼教法学派',
    shafi:'沙斐仪', maliki:'马立克', hanbali:'罕百里', hanafi:'哈乃斐', adjustTimes:'调整时间（分钟）',
    asrNote:'从天文角度看，沙斐仪、马立克和罕百里三个教法学派的晡礼时间相同（物体影长等于物体本身长度时开始），而哈乃斐学派则较晚开始（影长为物体长度的两倍时）。因此应用中这三个学派按相同方式计算。',
    secSettingsAdhan:'宣礼与提醒', notifyLabel:'通知', adhanLabel:'宣礼', reminderLabel:'提醒',
    reminderBefore:'礼拜前提醒', reminderOff:'关闭', reminderNotice:(m,p)=>`距${p}还有${m}分钟`,
    secSettingsLocation:'位置', useGps:'通过GPS刷新', manualCoords:'手动输入坐标', save:'保存',
    secSettingsAccount:'账户', googleNote:'通过 Firebase 登录会将您的账户（Google 或邮箱）与本应用关联，以便日后在其他设备上使用相同的数据。', signOut:'退出登录',
    googleSignIn:'继续使用 Google 账号', authOr:'或', authEmailPlaceholder:'电子邮箱', authPasswordPlaceholder:'密码',
    authSubmitLogin:'登录', authSubmitRegister:'创建账户', authToggleToRegister:'还没有账户？创建一个', authToggleToLogin:'已有账户？登录',
    authForgot:'忘记密码？', authNeedFields:'请输入电子邮箱和密码。', authNeedEmailForReset:'请先输入您的电子邮箱。', authResetSent:'密码重置链接已发送到您的邮箱。',
    authNamePlaceholder:'您的姓名', authNeedName:'请输入您的姓名。', authNotReady:'无法连接登录服务，请检查您的网络连接。',
    accountSignedOutPrompt:'您尚未登录。', openAuthGate:'登录',
    gateTitle:'欢迎使用 Muslim Day', gateSubtitle:'登录以保存您的设置，并在其他设备上使用同一账户', gateLoading:'正在检查您的账户...', gateGuest:'暂不登录，继续使用',
    geocodeNote:'按城市名称搜索需要外部地理编码服务，为保持现有安全策略（CSP）目前未添加此功能。请使用GPS或手动输入坐标。',
    secSettingsMuslimDay:'穆斯林之日', editTracked:'追踪的项目', resetToday:'重置今日数据', clearHistory:'清除全部记录',
    iosInstallTitle:'将本应用添加到主屏幕', iosInstallSteps:'点击屏幕底部的分享按钮，然后选择"添加到主屏幕"',
    confirmResetToday:'重置今日数据？此操作无法撤销。', confirmClearHistory:'清除全部穆斯林之日记录？此操作无法撤销。',
    methodNames:{mwl:'世界伊斯兰联盟', egyptian:'埃及测绘总局', makkah:'麦加倭马亚', karachi:'卡拉奇伊斯兰科学大学', isna:'北美伊斯兰协会', kuwait:'科威特', qatar:'卡塔尔', gulf:'海湾地区', singapore:'新加坡', turkey:'土耳其宗教事务部', dubai:'迪拜'},
    detailDistance:'距离', detailDirections:'路线', detailPhone:'电话', detailWebsite:'网站', detailHours:'营业时间', detailNoExtra:'OpenStreetMap上没有此清真寺的额外可靠数据。',
  },
  ru: {
    navMuslimDay:'День мусульманина', navSettingsTitle:'Настройки', openMuslimDay:'Открыть',
    mdHomeProgress:(d,t)=> t===0 ? 'Выберите, что отслеживать' : `Выполнено ${d} из ${t} дел сегодня`,
    mdTitleShort:'🌙 День мусульманина',
    extraTimesTitle:'Дополнительное время', extraSunrise:'Восход', extraImsak:'Имсак', extraMidnight:'Полночь', extraLastThird:'Последняя треть ночи',
    notifHint:'Для более точной настройки каждого намаза откройте Настройки ⚙️',
    radiusLabel:'Радиус поиска',
    favMosqueTitle:'Моя любимая мечеть', favMosqueOpen:'Открыть',
    mdBackToday:'Сегодня', mdMonthShow:'📅 Этот месяц', mdMonthHide:'✕ Закрыть',
    hijriDisclaimer:'Дата по хиджре может отличаться на день в зависимости от наблюдения луны и местных властей.',
    mdProgressText:(d,t)=> t===0 ? 'Пока ничего не отслеживается — нажмите ⚙️, чтобы настроить.' : `Вы выполнили ${d} из ${t} выбранных сегодня дел.`,
    secPrayers:'Намазы', secQuran:'Коран', secAzkar:'Азкары', secNight:'Ночная молитва', secParents:'Забота о родителях',
    secLearning:'Поиск знаний', secCharity:'Добрые дела', secFasting:'Пост', secFriday:'Рекомендуемые дела пятницы',
    prayed:'Помолился(-лась)', jamaah:'В джамаате', atMosque:'В мечети', mashallah:'МашаАллах, молодец.',
    quranRead:'Читал(а) Коран сегодня', quranMemorized:'Выучил(а) часть Корана сегодня', quranReviewed:'Повторил(а) выученное сегодня',
    azkarMorning:'Утренние азкары', azkarEvening:'Вечерние азкары', azkarAfter:'Азкары после намаза',
    azkarNote:'Этот раздел будет связан с текстами азкаров, когда они появятся в приложении.',
    qiyam:'Ночная молитва (Кыям)', witr:'Витр', parentsDone:'Сегодня сделал(а) что-то доброе для родителей', learningDone:'Сегодня узнал(а) что-то новое о своей религии',
    charitySadaqah:'Подал(а) милостыню', charityHelped:'Помог(ла) кому-то', charitySilaRahim:'Поддержал(а) связь с родственниками', charityOther:'Сделал(а) другое доброе дело',
    fastingQuestion:'Вы постились сегодня?', fastingYes:'Да', fastingNo:'Нет',
    fastingReasonMonday:'Понедельник — рекомендованный день поста', fastingReasonThursday:'Четверг — рекомендованный день поста', fastingReasonWhite:'Один из «белых дней» (13–15 по хиджре) — рекомендованные дни поста',
    fridayKahf:'Прочитать суру Аль-Кахф', fridaySalawat:'Чаще призывать благословение на Пророка ﷺ', fridayDua:'Сделать дуа', fridayEarly:'Прийти пораньше на пятничную молитву', fridayGhusl:'Полное омовение и благовония по пятницам',
    monthTitle:'Этот месяц', monthStatPrayed:'Отмечено намазов', monthStatJamaah:'Намазов в джамаате', monthStatMosque:'Намазов в мечети',
    monthStatQuran:'Дней чтения Корана', monthStatMorningAzkar:'Утренние азкары', monthStatEveningAzkar:'Вечерние азкары',
    monthStatQiyam:'Ночная молитва', monthStatWitr:'Витр', monthStatFasting:'Дней поста',
    customizeTitle:'Выберите, что отслеживать', customizeSave:'Сохранить',
    trackPrayers:'Намазы', trackJamaah:'Намаз в джамаате', trackMosque:'Намаз в мечети', trackQuran:'Коран',
    trackQuranMemorize:'Заучивание Корана', trackQuranReview:'Повторение Корана', trackAzkarMorning:'Утренние азкары', trackAzkarEvening:'Вечерние азкары',
    trackAzkarAfter:'Азкары после намаза', trackQiyam:'Ночная молитва', trackWitr:'Витр', trackParents:'Забота о родителях', trackLearning:'Поиск знаний',
    trackSadaqah:'Милостыня', trackGoodDeeds:'Добрые дела', trackFasting:'Пост',
    settingsTitle:'Настройки', secSettingsPrayer:'Время намаза', calcMethod:'Метод расчёта', asrMadhhab:'Мазхаб для Аср',
    shafi:'Шафиитский', maliki:'Маликитский', hanbali:'Ханбалитский', hanafi:'Ханафитский', adjustTimes:'Коррекция времени (в минутах)',
    asrNote:'Астрономически время Аср одинаково для шафиитского, маликитского и ханбалитского мазхабов (когда тень предмета равна его длине), а у ханафитского мазхаба оно наступает позже (тень равна двум длинам). Поэтому эти три мазхаба рассчитываются в приложении одинаково.',
    secSettingsAdhan:'Азан и оповещения', notifyLabel:'Уведомление', adhanLabel:'Азан', reminderLabel:'Напоминание',
    reminderBefore:'Напоминание перед намазом', reminderOff:'Выкл.', reminderNotice:(m,p)=>`Осталось ${m} минут до ${p}`,
    secSettingsLocation:'Местоположение', useGps:'Обновить через GPS', manualCoords:'Ввести координаты вручную', save:'Сохранить',
    secSettingsAccount:'Аккаунт', googleNote:'Вход через Firebase связывает ваш аккаунт (Google или email) с этим приложением, чтобы позже использовать те же данные на других устройствах.', signOut:'Выйти',
    googleSignIn:'Продолжить с Google', authOr:'или', authEmailPlaceholder:'Электронная почта', authPasswordPlaceholder:'Пароль',
    authSubmitLogin:'Войти', authSubmitRegister:'Создать аккаунт', authToggleToRegister:'Нет аккаунта? Создать', authToggleToLogin:'Уже есть аккаунт? Войти',
    authForgot:'Забыли пароль?', authNeedFields:'Пожалуйста, введите email и пароль.', authNeedEmailForReset:'Сначала введите ваш email.', authResetSent:'Ссылка для сброса пароля отправлена на ваш email.',
    authNamePlaceholder:'Ваше имя', authNeedName:'Пожалуйста, введите ваше имя.', authNotReady:'Не удалось подключиться к сервису входа — проверьте подключение к интернету.',
    accountSignedOutPrompt:'Вы не вошли в аккаунт.', openAuthGate:'Войти',
    gateTitle:'Добро пожаловать в Muslim Day', gateSubtitle:'Войдите, чтобы сохранить настройки и использовать тот же аккаунт на других устройствах', gateLoading:'Проверка вашего аккаунта...', gateGuest:'Продолжить без аккаунта',
    geocodeNote:'Поиск города по названию требует внешнего сервиса геокодирования, который сейчас не подключён, чтобы сохранить текущую политику безопасности (CSP). Используйте GPS или введите координаты вручную.',
    secSettingsMuslimDay:'День мусульманина', editTracked:'Отслеживаемые дела', resetToday:'Сбросить данные за сегодня', clearHistory:'Очистить всю историю',
    iosInstallTitle:'Добавьте приложение на экран «Домой»', iosInstallSteps:'Нажмите кнопку «Поделиться» внизу экрана, затем выберите «На экран «Домой»»',
    confirmResetToday:'Сбросить данные за сегодня? Это необратимо.', confirmClearHistory:'Очистить всю историю Дня мусульманина? Это необратимо.',
    methodNames:{mwl:'Всемирная исламская лига', egyptian:'Египетское геодезическое управление', makkah:'Умм аль-Кура, Мекка', karachi:'Университет исламских наук, Карачи', isna:'ISNA (Северная Америка)', kuwait:'Кувейт', qatar:'Катар', gulf:'Регион Залива', singapore:'Сингапур', turkey:'Diyanet, Турция', dubai:'Дубай'},
    detailDistance:'Расстояние', detailDirections:'Маршрут', detailPhone:'Телефон', detailWebsite:'Сайт', detailHours:'Часы работы', detailNoExtra:'Дополнительные проверенные данные об этой мечети в OpenStreetMap отсутствуют.',
  },
};
Object.keys(STRINGS_EXT).forEach(k => Object.assign(STRINGS[k], STRINGS_EXT[k]));

/* ===== النوافل + الأعمال الخاصة: نصوص إضافية ===== */
const STRINGS_NAWAFIL = {
  ar:{ secNawafil:'السنن والنوافل', nawafilFajr:'سنة الفجر (ركعتان)', nawafilDhuhrBefore:'سنة الظهر القبلية (4 ركعات)', nawafilDhuhrAfter:'سنة الظهر البعدية (ركعتان)', nawafilMaghrib:'سنة المغرب البعدية (ركعتان)', nawafilIsha:'سنة العشاء البعدية (ركعتان)', nawafilDuha:'صلاة الضحى',
       trackRawatib:'السنن الرواتب', trackDuha:'صلاة الضحى', secCustom:'أعمالي الخاصة', customHeading:'أعمالي الخاصة (حتى 3)', customHint:'اكتب اسم العمل الذي تريد متابعته يوميًا، واترك الخانة فارغة لإخفائه.', customPlaceholder:n=>`العمل الخاص ${n}` },
  en:{ secNawafil:'Sunnah & voluntary prayers', nawafilFajr:'Fajr sunnah (2 rakaʿat)', nawafilDhuhrBefore:'Dhuhr sunnah before (4 rakaʿat)', nawafilDhuhrAfter:'Dhuhr sunnah after (2 rakaʿat)', nawafilMaghrib:'Maghrib sunnah after (2 rakaʿat)', nawafilIsha:'Isha sunnah after (2 rakaʿat)', nawafilDuha:'Duha prayer',
       trackRawatib:'Regular sunnah prayers', trackDuha:'Duha prayer', secCustom:'My own deeds', customHeading:'My own deeds (up to 3)', customHint:'Type the deed you want to track daily. Leave it empty to hide it.', customPlaceholder:n=>`Custom deed ${n}` },
  fr:{ secNawafil:'Sunna et prières surérogatoires', nawafilFajr:'Sunna du Fajr (2 rakaʿat)', nawafilDhuhrBefore:'Sunna avant le Dhuhr (4 rakaʿat)', nawafilDhuhrAfter:'Sunna après le Dhuhr (2 rakaʿat)', nawafilMaghrib:'Sunna après le Maghrib (2 rakaʿat)', nawafilIsha:"Sunna après l'Isha (2 rakaʿat)", nawafilDuha:'Prière du Duha',
       trackRawatib:'Sunna régulières', trackDuha:'Prière du Duha', secCustom:'Mes propres actions', customHeading:'Mes propres actions (jusqu’à 3)', customHint:'Écrivez l’action à suivre chaque jour. Laissez vide pour la masquer.', customPlaceholder:n=>`Action personnelle ${n}` },
  es:{ secNawafil:'Sunna y oraciones voluntarias', nawafilFajr:'Sunna del Fajr (2 rakaʿat)', nawafilDhuhrBefore:'Sunna previa al Dhuhr (4 rakaʿat)', nawafilDhuhrAfter:'Sunna posterior al Dhuhr (2 rakaʿat)', nawafilMaghrib:'Sunna posterior al Maghrib (2 rakaʿat)', nawafilIsha:'Sunna posterior al Isha (2 rakaʿat)', nawafilDuha:'Oración del Duha',
       trackRawatib:'Sunnas regulares', trackDuha:'Oración del Duha', secCustom:'Mis propias obras', customHeading:'Mis propias obras (hasta 3)', customHint:'Escribe la obra que quieres seguir cada día. Déjala vacía para ocultarla.', customPlaceholder:n=>`Obra personal ${n}` },
  zh:{ secNawafil:'圣行与自愿拜', nawafilFajr:'晨礼圣行（2拜）', nawafilDhuhrBefore:'晌礼前圣行（4拜）', nawafilDhuhrAfter:'晌礼后圣行（2拜）', nawafilMaghrib:'昏礼后圣行（2拜）', nawafilIsha:'宵礼后圣行（2拜）', nawafilDuha:'上午拜（杜哈）',
       trackRawatib:'固定圣行拜', trackDuha:'上午拜（杜哈）', secCustom:'我的自定义功修', customHeading:'我的自定义功修（最多3项）', customHint:'输入您想每天追踪的功修，留空则隐藏。', customPlaceholder:n=>`自定义功修 ${n}` },
  ru:{ secNawafil:'Сунна и добровольные намазы', nawafilFajr:'Сунна Фаджр (2 ракята)', nawafilDhuhrBefore:'Сунна до Зухр (4 ракята)', nawafilDhuhrAfter:'Сунна после Зухр (2 ракята)', nawafilMaghrib:'Сунна после Магриб (2 ракята)', nawafilIsha:'Сунна после Иша (2 ракята)', nawafilDuha:'Намаз Духа',
       trackRawatib:'Постоянные сунна-намазы', trackDuha:'Намаз Духа', secCustom:'Мои личные дела', customHeading:'Мои личные дела (до 3)', customHint:'Впишите дело, которое хотите отслеживать каждый день. Оставьте пустым, чтобы скрыть.', customPlaceholder:n=>`Личное дело ${n}` },
};
Object.keys(STRINGS_NAWAFIL).forEach(k => Object.assign(STRINGS[k], STRINGS_NAWAFIL[k]));

/* ================= يوم المسلم: تعريف العناصر القابلة للتخصيص ================= */
const TRACK_TOGGLES = [
  { key:'trackPrayers',      label:'trackPrayers' },
  { key:'rawatib',           label:'trackRawatib' },
  { key:'duha',              label:'trackDuha' },
  { key:'jamaah',            label:'trackJamaah' },
  { key:'mosque',            label:'trackMosque' },
  { key:'quran',             label:'trackQuran' },
  { key:'quranMemorize',     label:'trackQuranMemorize' },
  { key:'quranReview',       label:'trackQuranReview' },
  { key:'azkarMorning',      label:'trackAzkarMorning' },
  { key:'azkarEvening',      label:'trackAzkarEvening' },
  { key:'azkarAfter',        label:'trackAzkarAfter' },
  { key:'qiyam',             label:'trackQiyam' },
  { key:'witr',              label:'trackWitr' },
  { key:'parents',           label:'trackParents' },
  { key:'learning',          label:'trackLearning' },
  { key:'sadaqah',           label:'trackSadaqah' },
  { key:'goodDeeds',         label:'trackGoodDeeds' },
  { key:'fasting',           label:'trackFasting' },
];

/* ================= الحالة والإعدادات المحفوظة ================= */
const CUSTOM_TASK_COUNT = 3;
function normalizeCustomTasks(arr){
  const out = [];
  for(let i = 0; i < CUSTOM_TASK_COUNT; i++){
    out.push(Array.isArray(arr) && typeof arr[i] === 'string' ? arr[i].trim().slice(0, 60) : '');
  }
  return out;
}
function loadSettings(){
  const def = {
    method: 3, school: 0,
    tune: { Fajr:0, Dhuhr:0, Asr:0, Maghrib:0, Isha:0 },
    notifPerPrayer: {
      Fajr:{notify:true, adhan:true, reminder:false},
      Dhuhr:{notify:true, adhan:true, reminder:false},
      Asr:{notify:true, adhan:true, reminder:false},
      Maghrib:{notify:true, adhan:true, reminder:false},
      Isha:{notify:true, adhan:true, reminder:false},
    },
    reminderMinutes: 10,
    radiusKm: 5,
    favoriteMosque: null,
    lastCoords: null,
    manualLocation: false,
    trackedItems: { trackPrayers:true, jamaah:true, mosque:true, quran:true, quranMemorize:true, quranReview:true,
      azkarMorning:true, azkarEvening:true, azkarAfter:true, qiyam:true, witr:true, parents:true, learning:true,
      sadaqah:true, goodDeeds:true, fasting:true, rawatib:true, duha:true },
    customTasks: ['', '', ''],
  };
  try{
    const raw = localStorage.getItem('salati_settings');
    if(!raw) return def;
    const saved = JSON.parse(raw);
    return {
      ...def, ...saved,
      tune: { ...def.tune, ...(saved.tune||{}) },
      notifPerPrayer: Object.fromEntries(PRAYER_ORDER.map(k => [k, { ...def.notifPerPrayer[k], ...((saved.notifPerPrayer||{})[k]||{}) }])),
      trackedItems: { ...def.trackedItems, ...(saved.trackedItems||{}) },
      customTasks: normalizeCustomTasks(saved.customTasks),
    };
  }catch(e){ console.error(e); return def; }
}
function saveSettings(){ localStorage.setItem('salati_settings', JSON.stringify(state.settings)); if(typeof scheduleCloudSave === 'function') scheduleCloudSave(); }

let state = {
  lang: localStorage.getItem('salati_lang') || 'ar',
  theme: localStorage.getItem('salati_theme') || 'brand',
  coords: null,
  timings: null,
  timingsExtra: null, // Sunrise, Imsak, Midnight, Firstthird, Lastthird
  mosques: [],
  selectedSound: ADHAN_SOUNDS[0].id,
  notifTimers: [],
  map: null,
  mapMarkersLayer: null,
  compassActive: false,
  qiblaBearing: null,
  settings: loadSettings(),
  mdViewDate: new Date(), // التاريخ المعروض حاليًا داخل "يوم المسلم"
  mdMonthOpen: false,
  mdMonthOffset: 0,
};
function t(){ return STRINGS[state.lang]; }

/* ================= الثيمات: تطبيق واختيار ================= */
function applyTheme(themeId){
  document.documentElement.setAttribute('data-theme', themeId);
  state.theme = themeId;
  localStorage.setItem('salati_theme', themeId);
  if(typeof scheduleCloudSave === 'function') scheduleCloudSave();
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta){
    const grad1 = getComputedStyle(document.documentElement).getPropertyValue('--grad1').trim();
    if(grad1) meta.setAttribute('content', grad1);
  }
  renderThemeGrid();
}
function renderThemeGrid(){
  const grid = document.getElementById('themeGrid');
  if(!grid) return;
  const names = THEME_NAMES[state.lang] || THEME_NAMES.en;
  grid.innerHTML = THEMES.map(th => `
    <div class="theme-cell">
      <div class="theme-swatch${state.theme===th.id ? ' active' : ''}" data-theme-id="${th.id}" style="background:linear-gradient(135deg, ${th.c1}, ${th.c2});" role="button" aria-label="${escapeHtml(names[th.id] || th.id)}">
        <span class="check">✓</span>
      </div>
      <div class="theme-name">${escapeHtml(names[th.id] || th.id)}</div>
    </div>
  `).join('');
  grid.querySelectorAll('.theme-swatch').forEach(el => {
    el.addEventListener('click', () => {
      applyTheme(el.dataset.themeId);
      setThemeGridOpen(false); // إغلاق الشبكة تلقائيًا بعد اختيار ثيم
    });
  });
  updateCurrentThemePreview();
}
function updateCurrentThemePreview(){
  const names = THEME_NAMES[state.lang] || THEME_NAMES.en;
  const current = THEMES.find(th => th.id === state.theme) || THEMES[0];
  const swatch = document.getElementById('themeCurrentSwatch');
  const nameEl = document.getElementById('themeCurrentName');
  if(swatch) swatch.style.background = `linear-gradient(135deg, ${current.c1}, ${current.c2})`;
  if(nameEl) nameEl.textContent = names[current.id] || current.id;
}
function applyChangeThemeButtonText(){
  const btn = document.getElementById('toggleThemeGridBtn');
  if(!btn) return;
  const grid = document.getElementById('themeGrid');
  const isOpen = grid && grid.style.display !== 'none';
  const dict = isOpen ? HIDE_THEMES_TEXT : CHANGE_THEME_TEXT;
  const label = btn.querySelector('span') || btn;
  label.textContent = dict[state.lang] || dict.en;
}
function setThemeGridOpen(open){
  const grid = document.getElementById('themeGrid');
  if(!grid) return;
  grid.style.display = open ? 'grid' : 'none';
  applyChangeThemeButtonText();
}
document.getElementById('toggleThemeGridBtn')?.addEventListener('click', () => {
  const grid = document.getElementById('themeGrid');
  const isOpen = grid && grid.style.display !== 'none';
  setThemeGridOpen(!isOpen);
});

/* ================= تثبيت التطبيق (PWA) على أندرويد/ويندوز ================= */
let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const btn = document.getElementById('installAppBtn');
  if(btn) btn.style.display = 'block';
});
window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  const btn = document.getElementById('installAppBtn');
  if(btn) btn.style.display = 'none';
});
document.getElementById('installAppBtn')?.addEventListener('click', async () => {
  if(!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  const btn = document.getElementById('installAppBtn');
  if(btn) btn.style.display = 'none';
});
if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(()=>{});
  });
}

/* ================= بديل التثبيت على iOS Safari (لا يدعم beforeinstallprompt) ================= */
(function initIosInstallBanner(){
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.navigator.standalone === true ||
    window.matchMedia('(display-mode: standalone)').matches;
  const dismissed = localStorage.getItem('salati_ios_banner_dismissed') === '1';
  if(!isIOS || isStandalone || dismissed) return;
  const banner = document.getElementById('iosInstallBanner');
  if(!banner) return;
  banner.style.display = 'flex';
  document.getElementById('iosInstallCloseBtn')?.addEventListener('click', () => {
    banner.style.display = 'none';
    localStorage.setItem('salati_ios_banner_dismissed', '1');
  });
})();

/* ================= تسجيل الدخول عبر Firebase Authentication ================= */
// المعرّف الأساسي للحساب هو Firebase UID (وليس أي بيانات محلية). الجلسة نفسها
// تُستعاد تلقائيًا بعد إغلاق التطبيق وإعادة فتحه عبر استمرارية Firebase المحلية
// (مُهيّأة في firebase-init.js) — لا نعتمد على localStorage لتخزين الحساب.
// عند توفر Firestore على مشروع Firebase، تتم أيضًا مزامنة إعدادات المستخدم وسجل
// "يوم المسلم" مرتبطة بنفس الـ UID، بحيث يمكن استخدام نفس الحساب لاحقًا من نسخة
// Android أو Windows لهذا المشروع دون فقدان البيانات.
//
// شاشة تسجيل الدخول (Auth Gate): تظهر مرة واحدة فقط عند أول فتح للتطبيق على هذا
// الجهاز، وتسمح بالمتابعة كزائر بدون حساب. بمجرد أن يسجّل المستخدم الدخول أو
// يختار "المتابعة بدون حساب"، لا تُفرض الشاشة عليه مرة أخرى تلقائيًا — يبقى بإمكانه
// إدارة حسابه لاحقًا من ⚙️ الإعدادات → الحساب.
const GATE_DISMISSED_KEY = 'salati_gate_dismissed';
state.currentUser = null; // { uid, name, email, picture } أو null
state.authMode = 'login';
let cloudSyncTimer = null;

function renderAccountUI(user){
  const signedOut = document.getElementById('accountSignedOut');
  const signedIn = document.getElementById('accountSignedIn');
  if(!signedOut || !signedIn) return;
  if(user){
    signedOut.style.display = 'none';
    signedIn.style.display = 'flex';
    document.getElementById('accountAvatar').src = avatarFor(user);
    document.getElementById('accountName').textContent = user.name || (user.email || '');
    document.getElementById('accountEmail').textContent = user.email || '';
  }else{
    signedOut.style.display = 'block';
    signedIn.style.display = 'none';
  }
}
function showGateMessage(kind, text){
  const errBox = document.getElementById('gateAuthError');
  const okBox = document.getElementById('gateAuthSuccess');
  if(errBox){ errBox.style.display = kind === 'error' && text ? 'block' : 'none'; errBox.textContent = kind === 'error' ? (text||'') : ''; }
  if(okBox){ okBox.style.display = kind === 'success' && text ? 'block' : 'none'; okBox.textContent = kind === 'success' ? (text||'') : ''; }
}
function setGateSubmitting(isSubmitting){
  const form = document.getElementById('gateAuthForm');
  const btn = document.getElementById('gateAuthSubmitBtn');
  if(form) form.classList.toggle('auth-submitting', !!isSubmitting);
  if(btn) btn.disabled = !!isSubmitting;
}
function showAuthGate(){
  document.getElementById('authGateOverlay')?.classList.add('active');
}
function hideAuthGate(){
  document.getElementById('authGateOverlay')?.classList.remove('active');
  localStorage.setItem(GATE_DISMISSED_KEY, '1');
}
function setGateLoading(isLoading){
  const loading = document.getElementById('gateLoading');
  const body = document.getElementById('gateAuthBody');
  if(loading) loading.style.display = isLoading ? 'block' : 'none';
  if(body) body.style.display = isLoading ? 'none' : 'block';
}
function applyGateNameVisibility(){
  const nameInput = document.getElementById('gateName');
  if(nameInput) nameInput.style.display = state.authMode === 'register' ? 'block' : 'none';
}
// يستدعي الدالة الممرَّرة فقط إذا كان Firebase قد انتهى من التحميل، وإلا يعرض
// رسالة واضحة بدل فشل صامت (مفيد خصوصًا بلا اتصال بالإنترنت).
function withSalatiAuth(action){
  return async (...args) => {
    if(!window.SalatiAuth){ showGateMessage('error', t().authNotReady); return; }
    return action(window.SalatiAuth, ...args);
  };
}

function collectCloudPayload(){
  try{
    return {
      settings: state.settings,
      muslimday: JSON.parse(localStorage.getItem('salati_muslimday') || '{}'),
      lang: state.lang,
      theme: state.theme,
    };
  }catch(e){ return { settings: state.settings, lang: state.lang, theme: state.theme }; }
}
function scheduleCloudSave(){
  if(!state.currentUser || !window.SalatiAuth) return;
  clearTimeout(cloudSyncTimer);
  cloudSyncTimer = setTimeout(() => {
    window.SalatiAuth.saveCloudData(state.currentUser.uid, collectCloudPayload());
  }, 1200);
}
async function pullCloudDataIntoApp(uid){
  if(!window.SalatiAuth) return;
  const cloud = await window.SalatiAuth.loadCloudData(uid);
  if(!cloud){ scheduleCloudSave(); return; } // لا بيانات سحابية بعد لهذا الحساب — نرفع النسخة المحلية الحالية كبداية
  try{
    if(cloud.settings){ state.settings = { ...state.settings, ...cloud.settings, trackedItems: { ...state.settings.trackedItems, ...(cloud.settings.trackedItems||{}) }, customTasks: normalizeCustomTasks(cloud.settings.customTasks || state.settings.customTasks) }; saveSettings(); }
    if(cloud.muslimday){ localStorage.setItem('salati_muslimday', JSON.stringify(cloud.muslimday)); }
    if(cloud.lang && cloud.lang !== state.lang){ state.lang = cloud.lang; localStorage.setItem('salati_lang', cloud.lang); }
    if(cloud.theme && cloud.theme !== state.theme){ applyTheme(cloud.theme); }
    applyLanguage();
    if(typeof renderMuslimDay === 'function') renderMuslimDay();
  }catch(e){ console.warn('تعذّر تطبيق بيانات الحساب السحابية:', e); }
}

function whenFirebaseReady(cb){
  if(window.SalatiAuth) cb(window.SalatiAuth);
  else window.addEventListener('salati-firebase-ready', () => cb(window.SalatiAuth), { once:true });
}

// إظهار شاشة الدخول عند أول فتح فقط (ما لم يسبق للمستخدم تخطّيها أو تسجيل الدخول من قبل)
if(localStorage.getItem(GATE_DISMISSED_KEY) !== '1'){
  showAuthGate();
  setGateLoading(true);
  // حماية: إن تعذّر تحميل Firebase (بلا اتصال مثلًا) لا نُبقي المستخدم عالقًا على شاشة تحميل بلا نهاية
  setTimeout(() => { if(!window.SalatiAuth) setGateLoading(false); }, 4000);
}

// أزرار لا تحتاج انتظار Firebase (تعمل حتى بلا اتصال بالإنترنت):
document.getElementById('gateGuestBtn')?.addEventListener('click', () => {
  hideAuthGate();
});
document.getElementById('openAuthGateBtn')?.addEventListener('click', () => {
  localStorage.removeItem(GATE_DISMISSED_KEY); // فتح الشاشة يدويًا من الإعدادات حتى لو سبق تخطّيها
  state.authMode = 'login';
  applyAuthModeTexts();
  applyGateNameVisibility();
  showGateMessage(null, '');
  setGateLoading(false);
  showAuthGate();
});
document.getElementById('gateAuthToggleModeBtn')?.addEventListener('click', () => {
  state.authMode = state.authMode === 'register' ? 'login' : 'register';
  applyAuthModeTexts();
  applyGateNameVisibility();
  showGateMessage(null, '');
});

document.getElementById('gateGoogleSignInBtn')?.addEventListener('click', withSalatiAuth(async (SalatiAuth) => {
  showGateMessage(null, '');
  const result = await SalatiAuth.signInWithGoogle();
  if(result && result.error) showGateMessage('error', result.error);
}));

document.getElementById('gateAuthForgotBtn')?.addEventListener('click', withSalatiAuth(async (SalatiAuth) => {
  const email = (document.getElementById('gateEmail')?.value || '').trim();
  if(!email){ showGateMessage('error', t().authNeedEmailForReset); return; }
  const result = await SalatiAuth.resetPassword(email);
  if(result && result.error) showGateMessage('error', result.error);
  else showGateMessage('success', t().authResetSent);
}));

document.getElementById('gateAuthForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if(!window.SalatiAuth){ showGateMessage('error', t().authNotReady); return; }
  const SalatiAuth = window.SalatiAuth;
  showGateMessage(null, '');
  const name = (document.getElementById('gateName')?.value || '').trim();
  const email = (document.getElementById('gateEmail')?.value || '').trim();
  const password = document.getElementById('gatePassword')?.value || '';
  if(!email || !password){ showGateMessage('error', t().authNeedFields); return; }
  const isRegister = state.authMode === 'register';
  if(isRegister && !name){ showGateMessage('error', t().authNeedName); return; }
  setGateSubmitting(true);
  const result = isRegister
    ? await SalatiAuth.registerWithEmail(email, password, name)
    : await SalatiAuth.signInWithEmail(email, password);
  setGateSubmitting(false);
  if(result && result.error) showGateMessage('error', result.error);
});

document.getElementById('googleSignOutBtn')?.addEventListener('click', withSalatiAuth(async (SalatiAuth) => {
  await SalatiAuth.signOutUser();
}));

whenFirebaseReady((SalatiAuth) => {
  let firstAuthCheck = true;
  SalatiAuth.onChange((user) => {
    applyStoredAvatar(user);
    state.currentUser = user;
    renderAccountUI(user);
    if(firstAuthCheck){
      firstAuthCheck = false;
      setGateLoading(false);
    }
    if(user){
      showGateMessage(null, '');
      hideAuthGate();
      pullCloudDataIntoApp(user.uid);
      refreshAvatarFromCloud(user);
    }
  });
});

/* =====================================================================
   تعديل الحساب: الاسم + صورة الحساب (كاميرا / معرض / ملفات)
   أي تعديل على الحساب يتطلب أولًا تأكيد كلمة المرور (أو تأكيد Google لحسابات Google)،
   وتبقى نتيجة التأكيد صالحة 5 دقائق فقط ثم يُطلب التأكيد من جديد.
   ===================================================================== */
const STRINGS_PROFILE = {
  ar:{ pfEdit:'تعديل الحساب', pfTitle:'تعديل الحساب', pfCamera:'كاميرا', pfGallery:'المعرض', pfFiles:'الملفات', pfRemove:'حذف الصورة', pfName:'الاسم', pfSave:'حفظ التغييرات', pfCancel:'إلغاء', pfReauthTitle:'تأكيد هويتك', pfReauthPw:'لحماية حسابك، أدخل كلمة المرور الحالية للمتابعة.', pfReauthGoogle:'لحماية حسابك، سنطلب منك تأكيد الدخول عبر Google.', pfPwPlaceholder:'كلمة المرور', pfConfirm:'تأكيد', pfWrongPw:'كلمة المرور غير صحيحة.', pfNeedPw:'الرجاء إدخال كلمة المرور.', pfNeedName:'الرجاء إدخال اسمك.', pfBadImage:'تعذّر استخدام هذه الصورة، اختر صورة أخرى.', pfFailed:'تعذّر حفظ التغييرات، تحقق من الاتصال وحاول مرة أخرى.' },
  en:{ pfEdit:'Edit account', pfTitle:'Edit account', pfCamera:'Camera', pfGallery:'Gallery', pfFiles:'Files', pfRemove:'Remove photo', pfName:'Name', pfSave:'Save changes', pfCancel:'Cancel', pfReauthTitle:'Confirm it\u2019s you', pfReauthPw:'To protect your account, enter your current password to continue.', pfReauthGoogle:'To protect your account, you\u2019ll be asked to confirm with Google.', pfPwPlaceholder:'Password', pfConfirm:'Confirm', pfWrongPw:'Incorrect password.', pfNeedPw:'Please enter your password.', pfNeedName:'Please enter your name.', pfBadImage:'This image can\u2019t be used. Please choose another one.', pfFailed:'Couldn\u2019t save changes. Check your connection and try again.' },
  fr:{ pfEdit:'Modifier le compte', pfTitle:'Modifier le compte', pfCamera:'Appareil photo', pfGallery:'Galerie', pfFiles:'Fichiers', pfRemove:'Supprimer la photo', pfName:'Nom', pfSave:'Enregistrer', pfCancel:'Annuler', pfReauthTitle:'Confirmez votre identité', pfReauthPw:'Pour prot\u00e9ger votre compte, saisissez votre mot de passe actuel.', pfReauthGoogle:'Pour prot\u00e9ger votre compte, une confirmation via Google vous sera demand\u00e9e.', pfPwPlaceholder:'Mot de passe', pfConfirm:'Confirmer', pfWrongPw:'Mot de passe incorrect.', pfNeedPw:'Veuillez saisir votre mot de passe.', pfNeedName:'Veuillez saisir votre nom.', pfBadImage:'Cette image est inutilisable, choisissez-en une autre.', pfFailed:'Impossible d\u2019enregistrer. V\u00e9rifiez votre connexion et r\u00e9essayez.' },
  es:{ pfEdit:'Editar cuenta', pfTitle:'Editar cuenta', pfCamera:'C\u00e1mara', pfGallery:'Galer\u00eda', pfFiles:'Archivos', pfRemove:'Quitar foto', pfName:'Nombre', pfSave:'Guardar cambios', pfCancel:'Cancelar', pfReauthTitle:'Confirma tu identidad', pfReauthPw:'Para proteger tu cuenta, introduce tu contrase\u00f1a actual.', pfReauthGoogle:'Para proteger tu cuenta, se te pedir\u00e1 confirmar con Google.', pfPwPlaceholder:'Contrase\u00f1a', pfConfirm:'Confirmar', pfWrongPw:'Contrase\u00f1a incorrecta.', pfNeedPw:'Introduce tu contrase\u00f1a.', pfNeedName:'Introduce tu nombre.', pfBadImage:'No se puede usar esta imagen. Elige otra.', pfFailed:'No se pudieron guardar los cambios. Revisa tu conexi\u00f3n e int\u00e9ntalo de nuevo.' },
  zh:{ pfEdit:'\u7f16\u8f91\u8d26\u6237', pfTitle:'\u7f16\u8f91\u8d26\u6237', pfCamera:'\u76f8\u673a', pfGallery:'\u76f8\u518c', pfFiles:'\u6587\u4ef6', pfRemove:'\u5220\u9664\u5934\u50cf', pfName:'\u59d3\u540d', pfSave:'\u4fdd\u5b58\u66f4\u6539', pfCancel:'\u53d6\u6d88', pfReauthTitle:'\u9a8c\u8bc1\u60a8\u7684\u8eab\u4efd', pfReauthPw:'\u4e3a\u4fdd\u62a4\u60a8\u7684\u8d26\u6237\uff0c\u8bf7\u8f93\u5165\u5f53\u524d\u5bc6\u7801\u4ee5\u7ee7\u7eed\u3002', pfReauthGoogle:'\u4e3a\u4fdd\u62a4\u60a8\u7684\u8d26\u6237\uff0c\u9700\u8981\u901a\u8fc7 Google \u8fdb\u884c\u9a8c\u8bc1\u3002', pfPwPlaceholder:'\u5bc6\u7801', pfConfirm:'\u786e\u8ba4', pfWrongPw:'\u5bc6\u7801\u4e0d\u6b63\u786e\u3002', pfNeedPw:'\u8bf7\u8f93\u5165\u5bc6\u7801\u3002', pfNeedName:'\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d\u3002', pfBadImage:'\u65e0\u6cd5\u4f7f\u7528\u8fd9\u5f20\u56fe\u7247\uff0c\u8bf7\u53e6\u9009\u4e00\u5f20\u3002', pfFailed:'\u4fdd\u5b58\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\u540e\u91cd\u8bd5\u3002' },
  ru:{ pfEdit:'\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442', pfTitle:'\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442', pfCamera:'\u041a\u0430\u043c\u0435\u0440\u0430', pfGallery:'\u0413\u0430\u043b\u0435\u0440\u0435\u044f', pfFiles:'\u0424\u0430\u0439\u043b\u044b', pfRemove:'\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e', pfName:'\u0418\u043c\u044f', pfSave:'\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c', pfCancel:'\u041e\u0442\u043c\u0435\u043d\u0430', pfReauthTitle:'\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u044c', pfReauthPw:'\u0414\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c.', pfReauthGoogle:'\u0414\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 Google.', pfPwPlaceholder:'\u041f\u0430\u0440\u043e\u043b\u044c', pfConfirm:'\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c', pfWrongPw:'\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c.', pfNeedPw:'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c.', pfNeedName:'\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f.', pfBadImage:'\u042d\u0442\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442, \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0435.', pfFailed:'\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0435\u0442\u044c \u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435.' },
};
Object.keys(STRINGS_PROFILE).forEach(k => Object.assign(STRINGS[k], STRINGS_PROFILE[k]));

const REAUTH_TTL_MS = 5 * 60 * 1000;
const AVATAR_KEY_PREFIX = 'salati_avatar_';
let reauthVerifiedAt = 0;
let pendingAvatar = null; // null = لا تغيير | '' = حذف الصورة | dataURL = صورة جديدة
const pfEl = (id) => document.getElementById(id);

function applyProfileTexts(){
  const s = t();
  document.querySelectorAll('[data-pk]').forEach(el => { if(s[el.dataset.pk]) el.textContent = s[el.dataset.pk]; });
  const ni = pfEl('profileNameInput'); if(ni) ni.placeholder = s.pfName;
  const pw = pfEl('reauthPassword'); if(pw) pw.placeholder = s.pfPwPlaceholder;
  const eb = pfEl('editAccountBtn'); if(eb) eb.setAttribute('aria-label', s.pfEdit);
}

// صورة افتراضية (حرف الاسم الأول) عندما لا توجد صورة — data: URI مسموح بالـ CSP
function avatarFor(user){
  if(user && user.picture) return user.picture;
  const ch = (((user && (user.name || user.email)) || '?').trim()[0] || '?').toUpperCase().replace(/[<>&"']/g, '?');
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#0f766e"/><text x="48" y="64" font-size="44" font-family="sans-serif" font-weight="700" text-anchor="middle" fill="#fff">' + ch + '</text></svg>';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
function applyStoredAvatar(user){
  if(!user) return;
  try{ const cached = localStorage.getItem(AVATAR_KEY_PREFIX + user.uid); if(cached) user.picture = cached; }catch(e){}
}
async function refreshAvatarFromCloud(user){
  if(!window.SalatiAuth || !user) return;
  const avatar = await window.SalatiAuth.loadAvatar(user.uid);
  if(avatar === null || !state.currentUser || state.currentUser.uid !== user.uid) return;
  try{ avatar ? localStorage.setItem(AVATAR_KEY_PREFIX + user.uid, avatar) : localStorage.removeItem(AVATAR_KEY_PREFIX + user.uid); }catch(e){}
  if(avatar){ state.currentUser.picture = avatar; renderAccountUI(state.currentUser); }
}

function showPfError(boxId, text){
  const box = pfEl(boxId); if(!box) return;
  box.style.display = text ? 'block' : 'none'; box.textContent = text || '';
}

// يطلب تأكيد كلمة المرور (أو Google) ويعيد true عند النجاح. صالح لمدة 5 دقائق.
function ensureVerified(){
  return new Promise((resolve) => {
    if(Date.now() - reauthVerifiedAt < REAUTH_TTL_MS){ resolve(true); return; }
    const A = window.SalatiAuth;
    if(!A || !state.currentUser){ resolve(false); return; }
    const overlay = pfEl('reauthOverlay'), pw = pfEl('reauthPassword');
    const confirmBtn = pfEl('reauthConfirmBtn'), cancelBtn = pfEl('reauthCancelBtn');
    const isGoogle = A.getAuthMethod() === 'google';
    pfEl('reauthDesc').textContent = isGoogle ? t().pfReauthGoogle : t().pfReauthPw;
    pw.style.display = isGoogle ? 'none' : 'block';
    pw.value = ''; showPfError('reauthError', '');
    overlay.classList.add('active');
    if(!isGoogle) setTimeout(() => pw.focus(), 60);
    const finish = (ok) => {
      overlay.classList.remove('active'); pw.value = '';
      confirmBtn.onclick = null; cancelBtn.onclick = null; pw.onkeydown = null;
      resolve(ok);
    };
    const submit = async () => {
      if(!isGoogle && !pw.value){ showPfError('reauthError', t().pfNeedPw); return; }
      confirmBtn.disabled = true;
      const r = await A.reauthenticate(pw.value);
      confirmBtn.disabled = false;
      if(r.error){ showPfError('reauthError', r.wrongPassword ? t().pfWrongPw : r.error); return; }
      reauthVerifiedAt = Date.now();
      finish(true);
    };
    confirmBtn.onclick = submit;
    cancelBtn.onclick = () => finish(false);
    pw.onkeydown = (e) => { if(e.key === 'Enter'){ e.preventDefault(); submit(); } };
  });
}

// قصّ مربّع من المنتصف + تصغير إلى 256px + JPEG لتبقى الصورة بحجم صغير (≈ 15–40KB)
function processAvatarFile(file){
  return new Promise((resolve, reject) => {
    if(!file || !/^image\//.test(file.type) || file.size > 15 * 1024 * 1024){ reject(new Error('bad')); return; }
    const fr = new FileReader();
    fr.onerror = () => reject(new Error('bad'));
    fr.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('bad'));
      img.onload = () => {
        const size = 256, side = Math.min(img.width, img.height);
        const cv = document.createElement('canvas'); cv.width = cv.height = size;
        cv.getContext('2d').drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, size, size);
        resolve(cv.toDataURL('image/jpeg', 0.82));
      };
      img.src = fr.result;
    };
    fr.readAsDataURL(file);
  });
}

async function openProfileEditor(){
  if(!state.currentUser) return;
  if(!(await ensureVerified())) return;      // لا يُفتح التعديل قبل تأكيد كلمة المرور
  pendingAvatar = null;
  pfEl('profileNameInput').value = state.currentUser.name || '';
  pfEl('profileAvatarPreview').src = avatarFor(state.currentUser);
  showPfError('profileError', '');
  pfEl('profileOverlay').classList.add('active');
}
function closeProfileEditor(){ pfEl('profileOverlay').classList.remove('active'); pendingAvatar = null; }

async function saveProfileChanges(){
  const A = window.SalatiAuth, u = state.currentUser;
  if(!A || !u) return;
  const name = pfEl('profileNameInput').value.trim();
  if(!name){ showPfError('profileError', t().pfNeedName); return; }
  if(!(await ensureVerified())) return;       // انتهت صلاحية التأكيد أثناء التعديل → نطلبه من جديد
  const btn = pfEl('profileSaveBtn'); btn.disabled = true; showPfError('profileError', '');
  let failed = false;
  if(name !== u.name){
    const r = await A.updateName(name);
    if(r.error) failed = true; else state.currentUser.name = name;
  }
  if(!failed && pendingAvatar !== null){
    const r = await A.saveAvatar(u.uid, pendingAvatar);
    if(r.error) failed = true;
    else{
      try{ pendingAvatar ? localStorage.setItem(AVATAR_KEY_PREFIX + u.uid, pendingAvatar) : localStorage.removeItem(AVATAR_KEY_PREFIX + u.uid); }catch(e){}
      state.currentUser.picture = pendingAvatar || (A.getCurrentUser() || {}).picture || '';
    }
  }
  btn.disabled = false;
  renderAccountUI(state.currentUser);
  if(failed){ showPfError('profileError', t().pfFailed); return; }
  closeProfileEditor();
}

pfEl('editAccountBtn')?.addEventListener('click', openProfileEditor);
pfEl('profileCancelBtn')?.addEventListener('click', closeProfileEditor);
pfEl('profileSaveBtn')?.addEventListener('click', saveProfileChanges);
pfEl('pickCameraBtn')?.addEventListener('click', () => pfEl('avatarCameraInput').click());
pfEl('pickGalleryBtn')?.addEventListener('click', () => pfEl('avatarGalleryInput').click());
pfEl('pickFilesBtn')?.addEventListener('click', () => pfEl('avatarFilesInput').click());
pfEl('removeAvatarBtn')?.addEventListener('click', () => {
  pendingAvatar = '';
  pfEl('profileAvatarPreview').src = avatarFor({ name: pfEl('profileNameInput').value || (state.currentUser && state.currentUser.name), email: state.currentUser && state.currentUser.email });
});
['avatarCameraInput', 'avatarGalleryInput', 'avatarFilesInput'].forEach((id) => {
  pfEl(id)?.addEventListener('change', async (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = '';
    if(!file) return;
    try{
      pendingAvatar = await processAvatarFile(file);
      pfEl('profileAvatarPreview').src = pendingAvatar;
      showPfError('profileError', '');
    }catch(err){ showPfError('profileError', t().pfBadImage); }
  });
});
applyProfileTexts();

function applyAuthModeTexts(){
  const s = t();
  const isRegister = state.authMode === 'register';
  const submitEl = document.getElementById('txtGateAuthSubmit');
  const toggleEl = document.getElementById('txtGateAuthToggleMode');
  const pwInput = document.getElementById('gatePassword');
  if(submitEl) submitEl.textContent = isRegister ? s.authSubmitRegister : s.authSubmitLogin;
  if(toggleEl) toggleEl.textContent = isRegister ? s.authToggleToLogin : s.authToggleToRegister;
  if(pwInput) pwInput.setAttribute('autocomplete', isRegister ? 'new-password' : 'current-password');
}


/* ================= أدوات مساعدة ================= */
// حماية من XSS: تنظيف أي نص خارجي (مثل أسماء المساجد القادمة من OpenStreetMap) قبل إدراجه في الصفحة
function escapeHtml(str){
  const div = document.createElement('div');
  div.textContent = String(str ?? '');
  return div.innerHTML;
}
function haversine(lat1, lon1, lat2, lon2){
  const R = 6371;
  const dLat = (lat2-lat1) * Math.PI/180;
  const dLon = (lon2-lon1) * Math.PI/180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
function qiblaBearing(lat, lng){
  const φ1 = lat*Math.PI/180, λ1 = lng*Math.PI/180;
  const φ2 = KAABA.lat*Math.PI/180, λ2 = KAABA.lng*Math.PI/180;
  const Δλ = λ2 - λ1;
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x = Math.cos(φ1)*Math.sin(φ2) - Math.sin(φ1)*Math.cos(φ2)*Math.cos(Δλ);
  return ((Math.atan2(y,x)*180/Math.PI) + 360) % 360;
}
function dateKey(d){
  const y = d.getFullYear(), m = String(d.getMonth()+1).padStart(2,'0'), day = String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function isSameDay(a,b){ return dateKey(a) === dateKey(b); }
function localeForLang(){
  return { ar:'ar', en:'en', fr:'fr', es:'es', zh:'zh', ru:'ru' }[state.lang] || 'en';
}
// التاريخ الهجري: نحسبه عبر واجهة Intl المدمجة في المتصفح (لا بيانات مخترعة)، مع تنبيه دقة واضح للمستخدم
function getHijriInfo(date){
  try{
    const cal = (Intl.DateTimeFormat.prototype.resolvedOptions && (() => {
      try{ return new Intl.DateTimeFormat('en-u-ca-islamic-umalqura').resolvedOptions().calendar === 'islamic-umalqura'; }catch(e){ return false; }
    })()) ? 'islamic-umalqura' : 'islamic';
    const fmt = new Intl.DateTimeFormat(`${localeForLang()}-u-ca-${cal}`, { day:'numeric', month:'long', year:'numeric' });
    const parts = fmt.formatToParts(date);
    const day = Number(parts.find(p=>p.type==='day')?.value);
    const text = fmt.format(date);
    return { day, text };
  }catch(e){
    console.error(e);
    return { day:null, text:'—' };
  }
}

/* ================= اللغة ================= */
function applyLanguage(){
  const cfg = LANGUAGES.find(l => l.code === state.lang) || LANGUAGES[0];
  const s = t();
  document.getElementById('htmlRoot').setAttribute('lang', cfg.code);
  document.getElementById('htmlRoot').setAttribute('dir', cfg.dir);
  document.body.classList.toggle('lang-ltr', cfg.dir === 'ltr');
  document.getElementById('pageTitle').textContent = s.appName;
  document.getElementById('txtAppName').textContent = s.appName;
  document.getElementById('txtTagline').textContent = s.tagline;
  document.getElementById('langBtnFlag').textContent = cfg.flag;
  document.getElementById('langBtnLabel').textContent = s.langName;
  document.getElementById('txtNextPrayerLabel').textContent = s.nextPrayerLabel;
  document.getElementById('txtTimesTitle').textContent = s.timesTitle;
  document.getElementById('txtNotifTitle').textContent = s.notifTitle;
  document.getElementById('txtNotifDesc').textContent = s.notifDesc;
  document.getElementById('txtNotifHint').textContent = s.notifHint;
  document.getElementById('txtMosquesTitle').textContent = s.mosquesTitle;
  document.getElementById('findMosquesBtn').textContent = s.mosquesRefresh;
  document.getElementById('txtQiblaTitle').textContent = s.qiblaTitle;
  document.getElementById('txtQiblaNote').textContent = s.qiblaNote;
  document.getElementById('enableCompassBtn').textContent = state.compassActive ? s.qiblaEnabled : s.qiblaEnable;
  document.getElementById('txtSoundTitle').textContent = s.soundTitle;
  document.getElementById('txtNavHome').textContent = s.navHome;
  document.getElementById('txtNavMosques').textContent = s.navMosques;
  document.getElementById('txtNavQibla').textContent = s.navQibla;
  document.getElementById('txtNavSound').textContent = s.navSound;
  document.getElementById('txtNavMuslimDay').textContent = s.navMuslimDay;
  document.getElementById('txtLangSheetTitle').textContent = s.langSheetTitle;
  document.getElementById('settingsBtn').title = s.settingsTitle;
  document.getElementById('settingsBtn').setAttribute('aria-label', s.settingsTitle);

  document.getElementById('txtExtraTimesTitle').textContent = s.extraTimesTitle;
  document.getElementById('txtExtraSunrise').textContent = s.extraSunrise;
  document.getElementById('txtExtraImsak').textContent = s.extraImsak;
  document.getElementById('txtExtraMidnight').textContent = s.extraMidnight;
  document.getElementById('txtExtraLastThird').textContent = s.extraLastThird;
  document.getElementById('txtOpenMuslimDay').textContent = s.openMuslimDay;
  document.getElementById('txtRadiusLabel').textContent = s.radiusLabel;
  document.getElementById('txtFavMosqueTitle').textContent = s.favMosqueTitle;
  document.getElementById('txtFavMosqueOpen').textContent = s.favMosqueOpen;
  document.getElementById('txtMdTitle').textContent = s.mdTitleShort;
  document.getElementById('txtMdHomeTitle').textContent = s.mdTitleShort;
  document.getElementById('txtMdBackToday').textContent = s.mdBackToday;
  document.getElementById('txtMdMonthBtn').textContent = state.mdMonthOpen ? s.mdMonthHide : s.mdMonthShow;
  document.getElementById('mdHijriDisclaimer').textContent = s.hijriDisclaimer;
  if(!state.mdMonthOpen) document.getElementById('txtMonthTitle').textContent = s.monthTitle;
  document.getElementById('txtSecPrayers').textContent = s.secPrayers;
  document.getElementById('txtSecNawafil').textContent = s.secNawafil;
  document.getElementById('txtSecCustom').textContent = s.secCustom;
  document.getElementById('txtSecQuran').textContent = s.secQuran;
  document.getElementById('txtSecAzkar').textContent = s.secAzkar;
  document.getElementById('txtSecNight').textContent = s.secNight;
  document.getElementById('txtSecParents').textContent = s.secParents;
  document.getElementById('txtSecLearning').textContent = s.secLearning;
  document.getElementById('txtSecCharity').textContent = s.secCharity;
  document.getElementById('txtSecFasting').textContent = s.secFasting;
  document.getElementById('txtSecFriday').textContent = s.secFriday;
  document.getElementById('txtCustomizeTitle').textContent = s.customizeTitle;
  document.getElementById('txtCustomizeSave').textContent = s.customizeSave;

  document.getElementById('txtSettingsTitle').textContent = s.settingsTitle;
  document.getElementById('txtSecSettingsPrayer').textContent = s.secSettingsPrayer;
  document.getElementById('txtCalcMethod').textContent = s.calcMethod;
  document.getElementById('txtAsrMadhhab').textContent = s.asrMadhhab;
  document.getElementById('optShafi').textContent = s.shafi;
  document.getElementById('optMaliki').textContent = s.maliki;
  document.getElementById('optHanbali').textContent = s.hanbali;
  document.getElementById('optHanafi').textContent = s.hanafi;
  document.getElementById('txtAsrNote').textContent = s.asrNote;
  document.getElementById('txtAdjustTimes').textContent = s.adjustTimes;
  document.getElementById('txtSecSettingsAdhan').textContent = s.secSettingsAdhan;
  document.getElementById('txtReminderBefore').textContent = s.reminderBefore;
  document.getElementById('optRemOff').textContent = s.reminderOff;
  document.getElementById('txtSecSettingsLocation').textContent = s.secSettingsLocation;
  document.getElementById('txtUseGps').textContent = s.useGps;
  document.getElementById('txtManualCoords').textContent = s.manualCoords;
  document.getElementById('txtSave').textContent = s.save;
  document.getElementById('txtGeocodeNote').textContent = s.geocodeNote;
  document.getElementById('txtSecSettingsMuslimDay').textContent = s.secSettingsMuslimDay;
  document.getElementById('txtEditTracked').textContent = s.editTracked;
  document.getElementById('txtResetToday').textContent = s.resetToday;
  document.getElementById('txtClearHistory').textContent = s.clearHistory;
  document.getElementById('txtSecSettingsThemes').textContent = THEMES_TITLE[state.lang] || THEMES_TITLE.en;
  document.getElementById('txtInstallApp').textContent = INSTALL_APP_TEXT[state.lang] || INSTALL_APP_TEXT.en;
  applyChangeThemeButtonText();
  document.getElementById('txtIosInstallTitle').textContent = s.iosInstallTitle;
  document.getElementById('txtIosInstallSteps').textContent = s.iosInstallSteps;
  document.getElementById('txtSecSettingsAccount').textContent = s.secSettingsAccount;
  document.getElementById('txtSignOut').textContent = s.signOut;
  if(typeof applyProfileTexts === 'function') applyProfileTexts();
  const txtSignedOutPrompt = document.getElementById('txtAccountSignedOutPrompt'); if(txtSignedOutPrompt) txtSignedOutPrompt.textContent = s.accountSignedOutPrompt;
  const txtOpenGate = document.getElementById('txtOpenAuthGate'); if(txtOpenGate) txtOpenGate.textContent = s.openAuthGate;
  const txtGateTitle = document.getElementById('txtGateTitle'); if(txtGateTitle) txtGateTitle.textContent = s.gateTitle;
  const txtGateSubtitle = document.getElementById('txtGateSubtitle'); if(txtGateSubtitle) txtGateSubtitle.textContent = s.gateSubtitle;
  const txtGateLoading = document.getElementById('txtGateLoading'); if(txtGateLoading) txtGateLoading.textContent = s.gateLoading;
  const txtGateGuest = document.getElementById('txtGateGuest'); if(txtGateGuest) txtGateGuest.textContent = s.gateGuest;
  const txtGateGoogleSignIn = document.getElementById('txtGateGoogleSignIn'); if(txtGateGoogleSignIn) txtGateGoogleSignIn.textContent = s.googleSignIn;
  const txtGateOr = document.getElementById('txtGateOr'); if(txtGateOr) txtGateOr.textContent = s.authOr;
  const gateNameEl = document.getElementById('gateName'); if(gateNameEl) gateNameEl.placeholder = s.authNamePlaceholder;
  const gateEmailEl = document.getElementById('gateEmail'); if(gateEmailEl) gateEmailEl.placeholder = s.authEmailPlaceholder;
  const gatePasswordEl = document.getElementById('gatePassword'); if(gatePasswordEl) gatePasswordEl.placeholder = s.authPasswordPlaceholder;
  const txtGateAuthForgot = document.getElementById('txtGateAuthForgot'); if(txtGateAuthForgot) txtGateAuthForgot.textContent = s.authForgot;
  if(typeof applyAuthModeTexts === 'function') applyAuthModeTexts();
  renderThemeGrid();

  // إعادة رسم المحتوى الديناميكي بلغته الجديدة
  const locText = document.getElementById('locText');
  if(!state.coords) locText.textContent = s.locPrompt;
  if(state.timings) renderTimes(); else document.getElementById('npCountdown').textContent = s.setLocFirst;
  if(state.mosques.length || state.coords) renderMosques();
  else document.getElementById('mosqueList').innerHTML = `<div class="status-msg">${escapeHtml(s.mosquesPrompt)}</div>`;
  if(state.qiblaBearing != null) document.getElementById('qiblaDeg').textContent = s.qiblaFromNorth(Math.round(state.qiblaBearing));
  renderSounds();
  renderLangList();
  renderRadiusChips();
  renderFavMosqueBox();
  renderCalcMethodOptions();
  renderTuneRows();
  renderPerPrayerNotifRows();
  renderReminderSelect();
  renderMuslimDay();
}
function renderLangList(){
  const list = document.getElementById('langList');
  list.innerHTML = '';
  LANGUAGES.forEach(l => {
    const btn = document.createElement('button');
    btn.className = 'lang-option' + (l.code === state.lang ? ' active' : '');
    btn.innerHTML = `<span class="flag">${l.flag}</span><span>${escapeHtml(STRINGS[l.code].langName)}</span>`;
    btn.addEventListener('click', () => {
      state.lang = l.code;
      localStorage.setItem('salati_lang', l.code);
      if(typeof scheduleCloudSave === 'function') scheduleCloudSave();
      applyLanguage();
      document.getElementById('langOverlay').classList.remove('active');
    });
    list.appendChild(btn);
  });
}
document.getElementById('langBtn').addEventListener('click', () => {
  document.getElementById('langOverlay').classList.add('active');
});
document.getElementById('langOverlay').addEventListener('click', (e) => {
  if(e.target.id === 'langOverlay') e.target.classList.remove('active');
});

/* ================= تحديد الموقع بدقة ================= */
function requestLocation(){
  const locText = document.getElementById('locText');
  const locDot = document.getElementById('locDot');
  if(!navigator.geolocation){
    locText.textContent = t().noGeo;
    return;
  }
  locText.textContent = t().locSearching;
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      state.coords = { lat: pos.coords.latitude, lng: pos.coords.longitude, accuracy: pos.coords.accuracy };
      state.settings.manualLocation = false;
      state.settings.lastCoords = { lat: state.coords.lat, lng: state.coords.lng };
      saveSettings();
      locDot.classList.add('live');
      locText.textContent = t().locFound(Math.round(pos.coords.accuracy));
      onLocationReady();
    },
    (err) => {
      locText.textContent = t().locError;
      console.error(err);
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
  );
}
function setManualCoords(lat, lng){
  state.coords = { lat, lng, accuracy: null };
  state.settings.manualLocation = true;
  state.settings.lastCoords = { lat, lng };
  saveSettings();
  document.getElementById('locDot').classList.add('live');
  document.getElementById('locText').textContent = t().yourLocation + ` (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
  onLocationReady();
}
function onLocationReady(){
  fetchPrayerTimes();
  fetchMosques();
  updateQibla();
}
document.getElementById('locPill').addEventListener('click', requestLocation);
document.getElementById('gpsRefreshBtn').addEventListener('click', requestLocation);
document.getElementById('manualCoordsBtn').addEventListener('click', () => {
  const lat = parseFloat(document.getElementById('manualLat').value);
  const lng = parseFloat(document.getElementById('manualLng').value);
  if(Number.isFinite(lat) && Number.isFinite(lng)) setManualCoords(lat, lng);
});
// عند بدء التشغيل: استخدم آخر موقع محفوظ فورًا (بدون تكرار طلب الإذن)، ثم يمكن للمستخدم تحديثه يدويًا
function restoreLastLocationIfAny(){
  const last = state.settings.lastCoords;
  if(last && Number.isFinite(last.lat) && Number.isFinite(last.lng)){
    state.coords = { lat: last.lat, lng: last.lng, accuracy: null };
    document.getElementById('locDot').classList.add('live');
    document.getElementById('locText').textContent = t().yourLocation + ` (${last.lat.toFixed(3)}, ${last.lng.toFixed(3)})`;
    onLocationReady();
    return true;
  }
  return false;
}

/* ================= أوقات الصلاة (Aladhan API) ================= */
function buildTuneString(){
  const tu = state.settings.tune;
  // ترتيب AlAdhan الموثق: Imsak,Fajr,Sunrise,Dhuhr,Asr,Maghrib,Sunset,Isha,Midnight
  return [0, tu.Fajr||0, 0, tu.Dhuhr||0, tu.Asr||0, tu.Maghrib||0, 0, tu.Isha||0, 0].join(',');
}
async function fetchPrayerTimes(){
  const { lat, lng } = state.coords;
  const ts = Math.floor(Date.now()/1000);
  try{
    const params = new URLSearchParams({
      latitude: lat, longitude: lng,
      method: state.settings.method, school: state.settings.school,
      tune: buildTuneString(),
    });
    const res = await fetch(`https://api.aladhan.com/v1/timings/${ts}?${params.toString()}`);
    const data = await res.json();
    const times = data.data.timings;
    state.timings = {};
    PRAYER_ORDER.forEach(k => state.timings[k] = times[k].split(' ')[0]);
    state.timingsExtra = {
      Sunrise: (times.Sunrise||'—').split(' ')[0],
      Imsak: (times.Imsak||'—').split(' ')[0],
      Midnight: (times.Midnight||'—').split(' ')[0],
      Firstthird: (times.Firstthird||'—').split(' ')[0],
      Lastthird: (times.Lastthird||'—').split(' ')[0],
    };
    renderTimes();
    renderExtraTimes();
    scheduleNotifications();
  }catch(e){
    console.error(e);
    document.getElementById('npCountdown').textContent = t().prayerFetchError;
  }
}
function renderTimes(){
  const grid = document.getElementById('timesGrid');
  grid.innerHTML = '';
  const names = t().prayerNames;
  PRAYER_ORDER.forEach(k => {
    const cell = document.createElement('div');
    cell.className = 'time-cell';
    cell.innerHTML = `<div class="n">${escapeHtml(names[k])}</div><div class="t">${escapeHtml(state.timings[k])}</div>`;
    grid.appendChild(cell);
  });
  updateNextPrayer();
}
function renderExtraTimes(){
  if(!state.timingsExtra) return;
  document.getElementById('valSunrise').textContent = state.timingsExtra.Sunrise;
  document.getElementById('valImsak').textContent = state.timingsExtra.Imsak;
  document.getElementById('valMidnight').textContent = state.timingsExtra.Midnight;
  document.getElementById('valLastThird').textContent = state.timingsExtra.Lastthird;
}
function timeStrToDate(hhmm){
  const [h,m] = hhmm.split(':').map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d;
}
function updateNextPrayer(){
  if(!state.timings) return;
  const now = new Date();
  let next = null, nextKey = null;
  for(const k of PRAYER_ORDER){
    const d = timeStrToDate(state.timings[k]);
    if(d > now){ next = d; nextKey = k; break; }
  }
  if(!next){ nextKey = 'Fajr'; next = new Date(timeStrToDate(state.timings.Fajr).getTime() + 86400000); }

  document.getElementById('npName').textContent = t().prayerNames[nextKey];
  const diff = next - now;
  const h = Math.floor(diff/3600000), m = Math.floor((diff%3600000)/60000), s = Math.floor((diff%60000)/1000);
  document.getElementById('npCountdown').textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

  document.querySelectorAll('.time-cell').forEach((cell, i) => {
    if(i < PRAYER_ORDER.length) cell.classList.toggle('active', PRAYER_ORDER[i] === nextKey);
  });
}
setInterval(updateNextPrayer, 1000);

/* ================= تنبيهات الأذان (إعدادات لكل صلاة + تذكير قبل الوقت) ================= */
// ملاحظة صريحة حول القيد: هذه المؤقتات تعمل عبر setTimeout داخل الصفحة المفتوحة فقط،
// ولا يمكنها إطلاق إشعارات حقيقية بعد إغلاق التبويب/المتصفح تمامًا دون خادم Push حقيقي.
function scheduleNotifications(){
  state.notifTimers.forEach(clearTimeout);
  state.notifTimers = [];
  if(!state.timings) return;
  const masterOn = document.getElementById('notifToggle').checked;
  if(!masterOn) return;
  const now = new Date();
  const remMin = Number(state.settings.reminderMinutes) || 0;
  PRAYER_ORDER.forEach(k => {
    const cfg = state.settings.notifPerPrayer[k];
    const time = timeStrToDate(state.timings[k]);
    const delay = time - now;
    if(delay > 0 && (cfg.notify || cfg.adhan)){
      const id = setTimeout(() => fireAdhan(k), delay);
      state.notifTimers.push(id);
    }
    if(delay > 0 && cfg.reminder && remMin > 0){
      const remDelay = delay - remMin*60000;
      if(remDelay > 0){
        const id2 = setTimeout(() => fireReminder(k, remMin), remDelay);
        state.notifTimers.push(id2);
      }
    }
  });
}
function fireAdhan(key){
  const cfg = state.settings.notifPerPrayer[key];
  if(cfg.notify && Notification.permission === 'granted'){
    new Notification(t().adhanTitle(t().prayerNames[key]), { body: t().adhanBody });
  }
  if(cfg.adhan) playSelectedSound();
}
function fireReminder(key, mins){
  if(Notification.permission === 'granted'){
    new Notification(t().appName, { body: t().reminderNotice(mins, t().prayerNames[key]) });
  }
}
document.getElementById('notifToggle').addEventListener('change', (e) => {
  if(e.target.checked && 'Notification' in window && Notification.permission !== 'granted'){
    Notification.requestPermission().then(perm => {
      if(perm !== 'granted') e.target.checked = false;
      scheduleNotifications();
    });
  } else {
    scheduleNotifications();
  }
});

/* ================= المساجد القريبة (Overpass / OpenStreetMap) ================= */
function renderRadiusChips(){
  const box = document.getElementById('radiusChips');
  const options = [1,5,10,20];
  box.innerHTML = options.map(km => `<button class="chip ${km===state.settings.radiusKm?'active':''}" data-km="${km}">${km} ${escapeHtml(t().km)}</button>`).join('');
  box.querySelectorAll('.chip').forEach(btn => {
    btn.addEventListener('click', () => {
      state.settings.radiusKm = Number(btn.dataset.km);
      saveSettings();
      renderRadiusChips();
      if(state.coords) fetchMosques();
    });
  });
}
function renderFavMosqueBox(){
  const box = document.getElementById('favMosqueBox');
  const fav = state.settings.favoriteMosque;
  if(!fav){ box.style.display = 'none'; return; }
  box.style.display = 'flex';
  document.getElementById('favMosqueName').textContent = fav.name;
  document.getElementById('favMosqueGoBtn').onclick = () => openMosqueDetail(fav);
}
// خوادم Overpass عامة ومجانية، وتتعرض أحيانًا للازدحام أو الإيقاف المؤقت من مُشغّليها.
// لهذا نجرّب أكثر من خادم بالترتيب بدل الاعتماد على خادم واحد فقط.
const OVERPASS_ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
];
async function fetchOverpass(query){
  let lastErr = null;
  for(const endpoint of OVERPASS_ENDPOINTS){
    try{
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000);
      const res = await fetch(endpoint, { method:'POST', body: query, signal: controller.signal });
      clearTimeout(timeoutId);
      if(!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    }catch(e){
      console.warn(`تعذر الاتصال بـ ${endpoint}:`, e);
      lastErr = e;
    }
  }
  throw lastErr;
}
async function fetchMosques(){
  const list = document.getElementById('mosqueList');
  list.innerHTML = `<div class="status-msg">${escapeHtml(t().mosquesSearching)}</div>`;
  const { lat, lng } = state.coords;
  const radius = (state.settings.radiusKm || 5) * 1000;
  const query = `[out:json][timeout:25];(node["amenity"="place_of_worship"]["religion"="muslim"](around:${radius},${lat},${lng});way["amenity"="place_of_worship"]["religion"="muslim"](around:${radius},${lat},${lng}););out center tags;`;
  try{
    const data = await fetchOverpass(query);
    state.mosques = data.elements.map(el => {
      const elat = el.lat ?? el.center?.lat;
      const elng = el.lon ?? el.center?.lon;
      const tags = el.tags || {};
      return {
        id: `${el.type}/${el.id}`,
        name: tags.name || t().mosqueNoName,
        lat: elat, lng: elng,
        dist: haversine(lat, lng, elat, elng),
        phone: tags.phone || tags['contact:phone'] || null,
        website: tags.website || tags['contact:website'] || null,
        hours: tags.opening_hours || null,
      };
    }).sort((a,b) => a.dist - b.dist);
    renderMosques();
  }catch(e){
    console.error(e);
    list.innerHTML = `<div class="status-msg">${escapeHtml(t().mosquesError)}</div>`;
  }
}
function isFavoriteMosque(m){
  const fav = state.settings.favoriteMosque;
  return fav && fav.id === m.id;
}
function toggleFavoriteMosque(m){
  if(isFavoriteMosque(m)) state.settings.favoriteMosque = null;
  else state.settings.favoriteMosque = { id:m.id, name:m.name, lat:m.lat, lng:m.lng };
  saveSettings();
  renderMosques();
  renderFavMosqueBox();
}
function renderMosques(){
  const list = document.getElementById('mosqueList');
  if(state.mosques.length === 0){
    list.innerHTML = `<div class="status-msg">${escapeHtml(t().mosquesNone)}</div>`;
  } else {
    list.innerHTML = state.mosques.slice(0,20).map((m,i) =>
      `<div class="mosque-item" data-idx="${i}">
        <div class="mosque-item-row">
          <div class="name">${escapeHtml(m.name)}</div>
          <div style="display:flex; align-items:center;">
            <button class="star-btn" data-fav-idx="${i}" title="★">${isFavoriteMosque(m) ? '★' : '☆'}</button>
            <div class="dist">${m.dist.toFixed(2)} ${escapeHtml(t().km)}</div>
          </div>
        </div>
      </div>`
    ).join('');
    list.querySelectorAll('.mosque-item').forEach(el => {
      el.addEventListener('click', (e) => {
        if(e.target.closest('.star-btn')) return;
        const idx = Number(el.dataset.idx);
        openMosqueDetail(state.mosques[idx]);
      });
    });
    list.querySelectorAll('.star-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = Number(btn.dataset.favIdx);
        toggleFavoriteMosque(state.mosques[idx]);
      });
    });
  }
  renderMap();
}
function openMosqueDetail(m){
  const s = t();
  const body = document.getElementById('mosqueDetailBody');
  const rows = [];
  if(m.phone) rows.push(`<div class="md-detail-row"><b>${escapeHtml(s.detailPhone)}:</b>&nbsp;${escapeHtml(m.phone)}</div>`);
  if(m.website) rows.push(`<div class="md-detail-row"><b>${escapeHtml(s.detailWebsite)}:</b>&nbsp;${escapeHtml(m.website)}</div>`);
  if(m.hours) rows.push(`<div class="md-detail-row"><b>${escapeHtml(s.detailHours)}:</b>&nbsp;${escapeHtml(m.hours)}</div>`);
  if(rows.length === 0) rows.push(`<div class="md-detail-row">${escapeHtml(s.detailNoExtra)}</div>`);
  const isFav = m.id && isFavoriteMosque(m);
  body.innerHTML = `
    <div class="md-detail-name">${escapeHtml(m.name)}</div>
    ${Number.isFinite(m.dist) ? `<div class="md-detail-dist">${s.detailDistance}: ${m.dist.toFixed(2)} ${escapeHtml(s.km)}</div>` : ''}
    ${rows.join('')}
    <div class="md-detail-actions">
      <button class="ghost" id="detailFavBtn" type="button">${isFav ? '★' : '☆'} ${escapeHtml(s.favMosqueTitle)}</button>
      <button class="primary" id="detailDirectionsBtn" type="button">🧭 ${escapeHtml(s.detailDirections)}</button>
    </div>
  `;
  document.getElementById('detailDirectionsBtn').addEventListener('click', () => {
    window.open(`https://www.openstreetmap.org/directions?to=${m.lat}%2C${m.lng}`, '_blank', 'noopener');
  });
  document.getElementById('detailFavBtn').addEventListener('click', () => {
    if(!m.id) return; // مسجد بلا معرف (نادر) لا يمكن حفظه كمفضّل
    toggleFavoriteMosque(m);
    openMosqueDetail(m);
  });
  document.getElementById('mosqueDetailOverlay').classList.add('active');
}
document.getElementById('mosqueDetailOverlay').addEventListener('click', (e) => {
  if(e.target.id === 'mosqueDetailOverlay') e.target.classList.remove('active');
});
function renderMap(){
  if(!state.coords) return;
  if(!state.map){
    state.map = L.map('map').setView([state.coords.lat, state.coords.lng], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(state.map);
    state.mapMarkersLayer = L.layerGroup().addTo(state.map);
  } else {
    state.map.setView([state.coords.lat, state.coords.lng], 14);
    state.mapMarkersLayer.clearLayers();
    setTimeout(() => state.map.invalidateSize(), 200);
  }
  L.circleMarker([state.coords.lat, state.coords.lng], { radius:8, color:'#5A3FE0', fillColor:'#7CD9A5', fillOpacity:1 })
    .addTo(state.mapMarkersLayer).bindPopup(escapeHtml(t().yourLocation));
  state.mosques.slice(0,30).forEach(m => {
    const isFav = isFavoriteMosque(m);
    const icon = L.divIcon({
      className: 'mosque-pin' + (isFav ? ' mosque-pin-fav' : ''),
      html: isFav ? '⭐' : '🕌',
      iconSize: [26, 26],
      iconAnchor: [13, 24],
    });
    L.marker([m.lat, m.lng], { icon })
      .addTo(state.mapMarkersLayer)
      .bindTooltip(escapeHtml(m.name), { permanent: true, direction: 'top', offset: [0, -20], className: 'mosque-tooltip' })
      .on('click', () => openMosqueDetail(m));
  });
}
document.getElementById('findMosquesBtn').addEventListener('click', () => {
  if(!state.coords){ requestLocation(); return; }
  fetchMosques();
});

/* ================= القبلة ================= */
// ملاحظة: الإبرة تُدار بزاوية "مستمرة" (غير مُلفوفة 0-360) كي لا تقفز دورة كاملة عند المرور بالشمال.
let needleAngle = 0;      // الزاوية المعروضة حاليًا (مستمرة)
let headingSin = 0, headingCos = 0, headingInit = false; // مرشّح تنعيم دائري
let compassRaf = 0;
let lastOrientationTs = 0;
let orientationEventName = null;

function setNeedle(deg){
  document.getElementById('needle').style.transform = `translate(-50%,-100%) rotate(${deg}deg)`;
}
function updateQibla(){
  if(!state.coords) return;
  const bearing = qiblaBearing(state.coords.lat, state.coords.lng);
  state.qiblaBearing = bearing;
  document.getElementById('qiblaDeg').textContent = t().qiblaFromNorth(Math.round(bearing));
  if(!state.compassActive){
    needleAngle = bearing;
    setNeedle(bearing);
  }
}
// اتجاه الجهاز (درجات من الشمال) مع تعويض الميل — يعمل والهاتف مسطّحًا أو مرفوعًا أمامك
function headingFromEuler(alpha, beta, gamma){
  const r = Math.PI/180;
  const cA=Math.cos(alpha*r), sA=Math.sin(alpha*r);
  const cB=Math.cos(beta*r),  sB=Math.sin(beta*r);
  const cG=Math.cos(gamma*r), sG=Math.sin(gamma*r);
  // متجه ظهر الجهاز (-Z) في إحداثيات الأرض
  const bx = -sG*cA - cG*sB*sA;
  const by = -sG*sA + cG*sB*cA;
  const bz = -cG*cB;
  // متجه أعلى الجهاز (+Y) في إحداثيات الأرض
  const tx = -sA*cB;
  const ty =  cA*cB;
  // مسطّح تقريبًا → نستخدم أعلى الهاتف؛ مرفوع → نستخدم ظهر الهاتف
  const useTop = Math.abs(bz) > 0.7;
  const h = useTop ? Math.atan2(tx, ty) : Math.atan2(bx, by);
  return (h*180/Math.PI + 360) % 360;
}
function screenAngle(){
  const a = (screen.orientation && typeof screen.orientation.angle === 'number') ? screen.orientation.angle : (window.orientation || 0);
  return a || 0;
}
function handleOrientation(e){
  if(state.qiblaBearing == null) return;
  // iOS: اتجاه جاهز ومعوَّض الميل
  let heading = null;
  if(typeof e.webkitCompassHeading === 'number' && !isNaN(e.webkitCompassHeading)){
    heading = e.webkitCompassHeading;
    if(typeof e.webkitCompassAccuracy === 'number' && e.webkitCompassAccuracy < 0){
      document.getElementById('qiblaStatus').textContent = t().qiblaCalibrate;
    }
  } else {
    // Android: نقبل فقط القراءة المطلقة (مرتبطة بالشمال المغناطيسي)، والنسبية تعطي اتجاهًا خاطئًا
    const isAbs = e.absolute === true || e.type === 'deviceorientationabsolute';
    if(!isAbs || e.alpha == null || e.beta == null || e.gamma == null) return;
    heading = headingFromEuler(e.alpha, e.beta, e.gamma);
  }
  heading = (heading + screenAngle() + 360) % 360;
  lastOrientationTs = Date.now();

  // تنعيم دائري (يتجنب مشكلة القفز بين 359° و0°)
  const r = Math.PI/180;
  if(!headingInit){ headingSin = Math.sin(heading*r); headingCos = Math.cos(heading*r); headingInit = true; }
  else {
    const k = 0.2;
    headingSin += (Math.sin(heading*r) - headingSin) * k;
    headingCos += (Math.cos(heading*r) - headingCos) * k;
  }
  if(!compassRaf) compassRaf = requestAnimationFrame(renderCompass);
}
function renderCompass(){
  compassRaf = 0;
  if(!headingInit || state.qiblaBearing == null) return;
  // لا نرسم إن كانت شاشة القبلة غير ظاهرة (توفير للبطارية)
  if(!document.getElementById('view-qibla').classList.contains('active')) return;
  const heading = (Math.atan2(headingSin, headingCos) * 180/Math.PI + 360) % 360;
  const rel = (state.qiblaBearing - heading + 360) % 360;      // 0..360
  // أقصر طريق للدوران
  let delta = ((rel - needleAngle) % 360 + 540) % 360 - 180;
  needleAngle += delta;
  setNeedle(needleAngle);
  const err = Math.min(rel, 360 - rel);
  const aligned = err <= 4;
  const compass = document.getElementById('compass');
  const statusEl = document.getElementById('qiblaStatus');
  const wasAligned = compass.classList.contains('aligned');
  compass.classList.toggle('aligned', aligned);
  if(aligned){
    statusEl.textContent = t().qiblaAligned;
    if(!wasAligned && navigator.vibrate) navigator.vibrate(40);
  } else if(wasAligned){
    statusEl.textContent = '';
  }
}
function stopCompass(){
  window.removeEventListener('deviceorientationabsolute', handleOrientation, true);
  window.removeEventListener('deviceorientation', handleOrientation, true);
}
document.getElementById('enableCompassBtn').addEventListener('click', async () => {
  const statusEl = document.getElementById('qiblaStatus');
  const btn = document.getElementById('enableCompassBtn');
  if(state.qiblaBearing == null){ statusEl.textContent = t().qiblaNeedLocation; return; }
  if(typeof DeviceOrientationEvent === 'undefined'){ statusEl.textContent = t().qiblaNoSensor; return; }
  try {
    if(typeof DeviceOrientationEvent.requestPermission === 'function'){
      const perm = await DeviceOrientationEvent.requestPermission();
      if(perm !== 'granted'){ statusEl.textContent = t().qiblaDenied; return; }
    }
  } catch(err){
    statusEl.textContent = t().qiblaDenied;
    return;
  }
  stopCompass();
  headingInit = false;
  state.compassActive = true;
  lastOrientationTs = 0;
  // أندرويد: القراءة المطلقة فقط. iOS: deviceorientation (يحمل webkitCompassHeading).
  if('ondeviceorientationabsolute' in window){
    orientationEventName = 'deviceorientationabsolute';
    window.addEventListener('deviceorientationabsolute', handleOrientation, true);
  } else {
    orientationEventName = 'deviceorientation';
    window.addEventListener('deviceorientation', handleOrientation, true);
  }
  btn.textContent = t().qiblaEnabled;
  statusEl.textContent = '';
  // إن لم تصل أي قراءة صالحة خلال ثانيتين فلا يوجد حساس مناسب
  setTimeout(() => {
    if(state.compassActive && !lastOrientationTs){
      state.compassActive = false;
      stopCompass();
      btn.textContent = t().qiblaEnable;
      statusEl.textContent = t().qiblaNoSensor;
      updateQibla();
    }
  }, 2000);
});

/* ================= أصوات الأذان ================= */
function renderSounds(){
  const list = document.getElementById('soundList');
  const names = t().soundNames;
  list.innerHTML = ADHAN_SOUNDS.map(s => `
    <div class="sound-item">
      <div class="info">
        <input type="radio" name="adhanSound" value="${escapeHtml(s.id)}" ${s.id===state.selectedSound?'checked':''}>
        <span>${escapeHtml(names[s.id] || s.id)}</span>
      </div>
      <button class="play-btn" data-id="${escapeHtml(s.id)}" title="${escapeHtml(t().soundTry)}">▶</button>
    </div>
  `).join('');
  list.querySelectorAll('input[name=adhanSound]').forEach(r => {
    r.addEventListener('change', (e) => state.selectedSound = e.target.value);
  });
  list.querySelectorAll('.play-btn').forEach(b => {
    b.addEventListener('click', () => {
      const sound = ADHAN_SOUNDS.find(s => s.id === b.dataset.id);
      const audio = document.getElementById('adhanAudio');
      audio.src = sound.url;
      audio.play().catch(() => alert(t().soundPlayError));
    });
  });
}
function playSelectedSound(){
  const sound = ADHAN_SOUNDS.find(s => s.id === state.selectedSound);
  const audio = document.getElementById('adhanAudio');
  audio.src = sound.url;
  audio.play().catch(err => console.warn('تعذر تشغيل الأذان تلقائيًا (قد يتطلب المتصفح تفاعلًا أول من المستخدم):', err));
}

/* ================= صفحة الإعدادات: مواقيت الصلاة والأذان ================= */
function renderCalcMethodOptions(){
  const sel = document.getElementById('calcMethodSelect');
  const names = t().methodNames;
  sel.innerHTML = CALC_METHODS.map(m => `<option value="${m.id}">${escapeHtml(names[m.key] || m.key)}</option>`).join('');
  sel.value = String(state.settings.method);
}
document.getElementById('calcMethodSelect').addEventListener('change', (e) => {
  state.settings.method = Number(e.target.value);
  saveSettings();
  if(state.coords) fetchPrayerTimes();
});
document.getElementById('asrSelect').addEventListener('change', (e) => {
  state.settings.school = Number(e.target.value);
  saveSettings();
  if(state.coords) fetchPrayerTimes();
});
function initAsrSelect(){ document.getElementById('asrSelect').value = String(state.settings.school); }

function renderTuneRows(){
  const box = document.getElementById('tuneRows');
  const names = t().prayerNames;
  box.innerHTML = PRAYER_ORDER.map(k => `
    <div class="tune-row">
      <div class="tune-name">${escapeHtml(names[k])}</div>
      <div class="tune-controls">
        <button class="tune-btn" data-k="${k}" data-d="-1">−</button>
        <div class="tune-val" id="tuneVal-${k}">${state.settings.tune[k] > 0 ? '+' : ''}${state.settings.tune[k]}</div>
        <button class="tune-btn" data-k="${k}" data-d="1">+</button>
      </div>
    </div>
  `).join('');
  box.querySelectorAll('.tune-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const k = btn.dataset.k, d = Number(btn.dataset.d);
      state.settings.tune[k] = Math.max(-30, Math.min(30, (state.settings.tune[k]||0) + d));
      saveSettings();
      document.getElementById(`tuneVal-${k}`).textContent = (state.settings.tune[k] > 0 ? '+' : '') + state.settings.tune[k];
      if(state.coords) fetchPrayerTimes();
    });
  });
}
function renderPerPrayerNotifRows(){
  const box = document.getElementById('perPrayerNotifRows');
  const names = t().prayerNames, s = t();
  box.innerHTML = PRAYER_ORDER.map(k => {
    const cfg = state.settings.notifPerPrayer[k];
    return `
    <div class="notif-prayer-row">
      <div class="npr-name">${escapeHtml(names[k])}</div>
      <div class="npr-toggles">
        <label class="npr-toggle"><input type="checkbox" data-k="${k}" data-f="notify" ${cfg.notify?'checked':''}> 🔔 ${escapeHtml(s.notifyLabel)}</label>
        <label class="npr-toggle"><input type="checkbox" data-k="${k}" data-f="adhan" ${cfg.adhan?'checked':''}> 🔊 ${escapeHtml(s.adhanLabel)}</label>
        <label class="npr-toggle"><input type="checkbox" data-k="${k}" data-f="reminder" ${cfg.reminder?'checked':''}> ⏰ ${escapeHtml(s.reminderLabel)}</label>
      </div>
    </div>`;
  }).join('');
  box.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener('change', (e) => {
      state.settings.notifPerPrayer[e.target.dataset.k][e.target.dataset.f] = e.target.checked;
      saveSettings();
      scheduleNotifications();
    });
  });
}
function renderReminderSelect(){
  document.getElementById('reminderMinutesSelect').value = String(state.settings.reminderMinutes || 0);
}
document.getElementById('reminderMinutesSelect').addEventListener('change', (e) => {
  state.settings.reminderMinutes = Number(e.target.value);
  saveSettings();
  scheduleNotifications();
});

/* ================= يوم المسلم: مخزن البيانات المحلي ================= */
function loadMuslimDayStore(){
  try{
    const raw = localStorage.getItem('salati_muslimday');
    return raw ? JSON.parse(raw) : {};
  }catch(e){ console.error(e); return {}; }
}
function saveMuslimDayStore(store){
  localStorage.setItem('salati_muslimday', JSON.stringify(store));
  if(typeof scheduleCloudSave === 'function') scheduleCloudSave();
}
function emptyDayData(){
  return {
    prayers: Object.fromEntries(PRAYER_ORDER.map(k => [k, { prayed:false, jamaah:false, mosque:false }])),
    quran: { read:false, memorized:false, reviewed:false, pages:null, ayahs:null, minutes:null },
    azkar: { morning:false, evening:false, after:false },
    night: { qiyam:false, witr:false },
    nawafil: { fajr:false, dhuhrBefore:false, dhuhrAfter:false, maghrib:false, isha:false, duha:false },
    custom: [false, false, false],
    parents: false,
    learning: false,
    charity: { sadaqah:false, helped:false, silaRahim:false, other:false },
    fasting: { fasted:null },
    friday: { kahf:false, salawat:false, dua:false, early:false, ghusl:false },
  };
}
function getDayData(date){
  const store = loadMuslimDayStore();
  const key = dateKey(date);
  const existing = store[key];
  if(!existing) return emptyDayData();
  const def = emptyDayData();
  return {
    prayers: Object.fromEntries(PRAYER_ORDER.map(k => [k, { ...def.prayers[k], ...(existing.prayers?.[k]||{}) }])),
    quran: { ...def.quran, ...(existing.quran||{}) },
    azkar: { ...def.azkar, ...(existing.azkar||{}) },
    night: { ...def.night, ...(existing.night||{}) },
    nawafil: { ...def.nawafil, ...(existing.nawafil||{}) },
    custom: [0,1,2].map(i => !!(existing.custom && existing.custom[i])),
    parents: existing.parents ?? false,
    learning: existing.learning ?? false,
    charity: { ...def.charity, ...(existing.charity||{}) },
    fasting: { ...def.fasting, ...(existing.fasting||{}) },
    friday: { ...def.friday, ...(existing.friday||{}) },
  };
}
function setDayData(date, data){
  const store = loadMuslimDayStore();
  store[dateKey(date)] = data;
  saveMuslimDayStore(store);
}
function updateDayField(date, mutator){
  const data = getDayData(date);
  mutator(data);
  setDayData(date, data);
  renderMuslimDay();
}

/* ================= يوم المسلم: منطق الصيام والجمعة ================= */
function isFastingRecommendedDay(date){
  const wd = date.getDay(); // 1=Mon, 4=Thu
  if(wd === 1) return 'monday';
  if(wd === 4) return 'thursday';
  const hijriDay = getHijriInfo(date).day;
  if(hijriDay && hijriDay >= 13 && hijriDay <= 15) return 'white';
  return null;
}
function isFriday(date){ return date.getDay() === 5; }

/* ================= يوم المسلم: حساب التقدم اليومي ================= */
function computeApplicableTasks(date, data){
  const tr = state.settings.trackedItems;
  const tasks = []; // {done:boolean}
  if(tr.trackPrayers){
    PRAYER_ORDER.forEach(k => tasks.push(data.prayers[k].prayed));
  }
  if(tr.rawatib) tasks.push(data.nawafil.fajr, data.nawafil.dhuhrBefore, data.nawafil.dhuhrAfter, data.nawafil.maghrib, data.nawafil.isha);
  if(tr.duha) tasks.push(data.nawafil.duha);
  if(tr.quran) tasks.push(data.quran.read);
  if(tr.quranMemorize) tasks.push(data.quran.memorized);
  if(tr.quranReview) tasks.push(data.quran.reviewed);
  if(tr.azkarMorning) tasks.push(data.azkar.morning);
  if(tr.azkarEvening) tasks.push(data.azkar.evening);
  if(tr.azkarAfter) tasks.push(data.azkar.after);
  if(tr.qiyam) tasks.push(data.night.qiyam);
  if(tr.witr) tasks.push(data.night.witr);
  if(tr.parents) tasks.push(data.parents);
  if(tr.learning) tasks.push(data.learning);
  if(tr.sadaqah) tasks.push(data.charity.sadaqah);
  if(tr.goodDeeds) tasks.push(data.charity.helped || data.charity.silaRahim || data.charity.other);
  if(tr.fasting && isFastingRecommendedDay(date)) tasks.push(data.fasting.fasted === true);
  state.settings.customTasks.forEach((name, i) => { if(name) tasks.push(data.custom[i]); });
  if(isFriday(date)) tasks.push(data.friday.kahf, data.friday.salawat, data.friday.dua, data.friday.early, data.friday.ghusl);
  const total = tasks.length;
  const done = tasks.filter(Boolean).length;
  return { total, done };
}

/* ================= يوم المسلم: الرسم الرئيسي للوحة اليوم ================= */
function taskRow(label, checked, onToggle){
  return { label, checked, onToggle };
}
function renderTaskList(containerId, rows){
  const box = document.getElementById(containerId);
  box.innerHTML = rows.map((r,i) => `
    <div class="task-row">
      <div class="task-label">${escapeHtml(r.label)}</div>
      <button class="task-check ${r.checked?'checked':''}" data-i="${i}">✓</button>
    </div>
  `).join('');
  box.querySelectorAll('.task-check').forEach(btn => {
    btn.addEventListener('click', () => rows[Number(btn.dataset.i)].onToggle());
  });
}
function renderMuslimDay(){
  const s = t();
  const date = state.mdViewDate;
  const data = getDayData(date);
  const tr = state.settings.trackedItems;

  // الترويسة: التاريخ
  document.getElementById('mdWeekday').textContent = new Intl.DateTimeFormat(localeForLang(), { weekday:'long' }).format(date);
  document.getElementById('mdGregorian').textContent = new Intl.DateTimeFormat(localeForLang(), { day:'numeric', month:'long', year:'numeric' }).format(date);
  document.getElementById('mdHijri').textContent = getHijriInfo(date).text;

  // التقدم
  const { total, done } = computeApplicableTasks(date, data);
  document.getElementById('mdProgressText').textContent = s.mdProgressText(done, total);
  document.getElementById('mdProgressFill').style.width = total ? `${Math.round(done/total*100)}%` : '0%';

  // بطاقة الصفحة الرئيسية
  document.getElementById('mdHomeProgress').textContent = s.mdHomeProgress(done, total);
  document.getElementById('mdHomeProgressFill').style.width = total ? `${Math.round(done/total*100)}%` : '0%';

  // الصلوات
  document.getElementById('secPrayers').style.display = tr.trackPrayers ? '' : 'none';
  if(tr.trackPrayers){
    const namesP = s.prayerNames;
    const box = document.getElementById('prayerRows');
    box.innerHTML = PRAYER_ORDER.map(k => {
      const p = data.prayers[k];
      const timeStr = (isSameDay(date, new Date()) && state.timings) ? state.timings[k] : '';
      return `
      <div class="prayer-row" data-k="${k}">
        <div class="prayer-row-top">
          <div class="pname">${escapeHtml(namesP[k])}</div>
          <div class="ptime">${escapeHtml(timeStr)}</div>
        </div>
        <div class="prayer-pill-row">
          <button class="prayer-pill ${p.prayed?'active':''}" data-f="prayed">${escapeHtml(s.prayed)}</button>
          ${tr.jamaah ? `<button class="prayer-pill ${p.jamaah?'active':''}" data-f="jamaah">${escapeHtml(s.jamaah)}</button>` : ''}
          ${tr.mosque ? `<button class="prayer-pill ${p.mosque?'active':''}" data-f="mosque">${escapeHtml(s.atMosque)}</button>` : ''}
        </div>
        ${p.mosque ? `<div class="prayer-mash">${escapeHtml(s.mashallah)}</div>` : ''}
      </div>`;
    }).join('');
    box.querySelectorAll('.prayer-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const row = btn.closest('.prayer-row');
        const k = row.dataset.k, f = btn.dataset.f;
        updateDayField(date, (d) => {
          d.prayers[k][f] = !d.prayers[k][f];
          if(f === 'mosque' && d.prayers[k].mosque) d.prayers[k].jamaah = true; // منطقي: من صلى بالمسجد فهو جماعة
          if(f === 'mosque' && !d.prayers[k].mosque){ /* لا نلغي جماعة تلقائيًا لأنها قد تكون جماعة بالمنزل */ }
          if((f === 'jamaah' || f === 'mosque') && (d.prayers[k].jamaah || d.prayers[k].mosque)) d.prayers[k].prayed = true;
        });
      });
    });
  }

  // السنن والنوافل
  document.getElementById('secNawafil').style.display = (tr.rawatib||tr.duha) ? '' : 'none';
  {
    const rows = [];
    const nf = (key, label) => rows.push(taskRow(label, data.nawafil[key], () => updateDayField(date, d => d.nawafil[key] = !d.nawafil[key])));
    if(tr.rawatib){
      nf('fajr', s.nawafilFajr); nf('dhuhrBefore', s.nawafilDhuhrBefore); nf('dhuhrAfter', s.nawafilDhuhrAfter);
      nf('maghrib', s.nawafilMaghrib); nf('isha', s.nawafilIsha);
    }
    if(tr.duha) nf('duha', s.nawafilDuha);
    renderTaskList('nawafilRows', rows);
  }

  // القرآن
  document.getElementById('secQuran').style.display = (tr.quran||tr.quranMemorize||tr.quranReview) ? '' : 'none';
  {
    const rows = [];
    if(tr.quran) rows.push(taskRow(s.quranRead, data.quran.read, () => updateDayField(date, d => d.quran.read = !d.quran.read)));
    if(tr.quranMemorize) rows.push(taskRow(s.quranMemorized, data.quran.memorized, () => updateDayField(date, d => d.quran.memorized = !d.quran.memorized)));
    if(tr.quranReview) rows.push(taskRow(s.quranReviewed, data.quran.reviewed, () => updateDayField(date, d => d.quran.reviewed = !d.quran.reviewed)));
    renderTaskList('quranRows', rows);
  }

  // الأذكار
  document.getElementById('secAzkar').style.display = (tr.azkarMorning||tr.azkarEvening||tr.azkarAfter) ? '' : 'none';
  {
    const rows = [];
    if(tr.azkarMorning) rows.push(taskRow(s.azkarMorning, data.azkar.morning, () => updateDayField(date, d => d.azkar.morning = !d.azkar.morning)));
    if(tr.azkarEvening) rows.push(taskRow(s.azkarEvening, data.azkar.evening, () => updateDayField(date, d => d.azkar.evening = !d.azkar.evening)));
    if(tr.azkarAfter) rows.push(taskRow(s.azkarAfter, data.azkar.after, () => updateDayField(date, d => d.azkar.after = !d.azkar.after)));
    renderTaskList('azkarRows', rows);
  }

  // قيام الليل
  document.getElementById('secNight').style.display = (tr.qiyam||tr.witr) ? '' : 'none';
  {
    const rows = [];
    if(tr.qiyam) rows.push(taskRow(s.qiyam, data.night.qiyam, () => updateDayField(date, d => d.night.qiyam = !d.night.qiyam)));
    if(tr.witr) rows.push(taskRow(s.witr, data.night.witr, () => updateDayField(date, d => d.night.witr = !d.night.witr)));
    renderTaskList('nightRows', rows);
  }

  // بر الوالدين
  document.getElementById('secParents').style.display = tr.parents ? '' : 'none';
  if(tr.parents) renderTaskList('parentsRows', [taskRow(s.parentsDone, data.parents, () => updateDayField(date, d => d.parents = !d.parents))]);

  // طلب العلم
  document.getElementById('secLearning').style.display = tr.learning ? '' : 'none';
  if(tr.learning) renderTaskList('learningRows', [taskRow(s.learningDone, data.learning, () => updateDayField(date, d => d.learning = !d.learning))]);

  // أعمال الخير
  document.getElementById('secCharity').style.display = (tr.sadaqah||tr.goodDeeds) ? '' : 'none';
  {
    const rows = [];
    if(tr.sadaqah) rows.push(taskRow(s.charitySadaqah, data.charity.sadaqah, () => updateDayField(date, d => d.charity.sadaqah = !d.charity.sadaqah)));
    if(tr.goodDeeds){
      rows.push(taskRow(s.charityHelped, data.charity.helped, () => updateDayField(date, d => d.charity.helped = !d.charity.helped)));
      rows.push(taskRow(s.charitySilaRahim, data.charity.silaRahim, () => updateDayField(date, d => d.charity.silaRahim = !d.charity.silaRahim)));
      rows.push(taskRow(s.charityOther, data.charity.other, () => updateDayField(date, d => d.charity.other = !d.charity.other)));
    }
    renderTaskList('charityRows', rows);
  }

  // أعمالي الخاصة
  {
    const rows = [];
    state.settings.customTasks.forEach((name, i) => {
      if(name) rows.push(taskRow(name, data.custom[i], () => updateDayField(date, d => d.custom[i] = !d.custom[i])));
    });
    document.getElementById('secCustom').style.display = rows.length ? '' : 'none';
    renderTaskList('customRows', rows);
  }

  // الصيام (يظهر فقط في الأيام المناسبة)
  const fastReason = tr.fasting ? isFastingRecommendedDay(date) : null;
  document.getElementById('secFasting').style.display = fastReason ? '' : 'none';
  if(fastReason){
    const reasonText = { monday: s.fastingReasonMonday, thursday: s.fastingReasonThursday, white: s.fastingReasonWhite }[fastReason];
    document.getElementById('fastingReason').textContent = reasonText;
    const box = document.getElementById('fastingRows');
    box.innerHTML = `
      <div class="task-row">
        <div class="task-label">${escapeHtml(s.fastingQuestion)}</div>
        <div class="prayer-pill-row" style="max-width:160px;">
          <button class="prayer-pill ${data.fasting.fasted===true?'active':''}" id="fastYesBtn">${escapeHtml(s.fastingYes)}</button>
          <button class="prayer-pill ${data.fasting.fasted===false?'active':''}" id="fastNoBtn">${escapeHtml(s.fastingNo)}</button>
        </div>
      </div>`;
    document.getElementById('fastYesBtn').addEventListener('click', () => updateDayField(date, d => d.fasting.fasted = d.fasting.fasted===true ? null : true));
    document.getElementById('fastNoBtn').addEventListener('click', () => updateDayField(date, d => d.fasting.fasted = d.fasting.fasted===false ? null : false));
  }

  // أعمال يوم الجمعة (تظهر فقط يوم الجمعة)
  document.getElementById('secFriday').style.display = isFriday(date) ? '' : 'none';
  if(isFriday(date)){
    const rows = [
      taskRow(s.fridayGhusl, data.friday.ghusl, () => updateDayField(date, d => d.friday.ghusl = !d.friday.ghusl)),
      taskRow(s.fridayEarly, data.friday.early, () => updateDayField(date, d => d.friday.early = !d.friday.early)),
      taskRow(s.fridayKahf, data.friday.kahf, () => updateDayField(date, d => d.friday.kahf = !d.friday.kahf)),
      taskRow(s.fridaySalawat, data.friday.salawat, () => updateDayField(date, d => d.friday.salawat = !d.friday.salawat)),
      taskRow(s.fridayDua, data.friday.dua, () => updateDayField(date, d => d.friday.dua = !d.friday.dua)),
    ];
    renderTaskList('fridayRows', rows);
  }

  if(state.mdMonthOpen) renderMonthly();
}

/* ================= يوم المسلم: التنقل بين الأيام (السجل) ================= */
document.getElementById('mdPrevDay').addEventListener('click', () => {
  state.mdViewDate = new Date(state.mdViewDate.getTime() - 86400000);
  renderMuslimDay();
});
document.getElementById('mdNextDay').addEventListener('click', () => {
  const next = new Date(state.mdViewDate.getTime() + 86400000);
  if(next <= new Date()) { state.mdViewDate = next; renderMuslimDay(); }
});
document.getElementById('mdTodayBtn').addEventListener('click', () => {
  state.mdViewDate = new Date();
  renderMuslimDay();
});
document.getElementById('mdMonthToggleBtn').addEventListener('click', () => {
  state.mdMonthOpen = !state.mdMonthOpen;
  if(state.mdMonthOpen) state.mdMonthOffset = 0;
  document.getElementById('mdMonthlyBox').style.display = state.mdMonthOpen ? '' : 'none';
  document.getElementById('txtMdMonthBtn').textContent = state.mdMonthOpen ? t().mdMonthHide : t().mdMonthShow;
  if(state.mdMonthOpen) renderMonthly();
});
document.getElementById('openMuslimDayBtn').addEventListener('click', () => switchView('muslimday'));

/* ================= يوم المسلم: العرض الشهري ================= */
function renderMonthly(){
  const s = t();
  const today = new Date();
  today.setHours(0,0,0,0);
  const off = state.mdMonthOffset || 0;
  const first = new Date(today.getFullYear(), today.getMonth() + off, 1);
  const daysInMonth = new Date(first.getFullYear(), first.getMonth()+1, 0).getDate();

  // عنوان الشهر (باسم الشهر والسنة حسب لغة التطبيق)
  document.getElementById('txtMonthTitle').textContent =
    new Intl.DateTimeFormat(localeForLang(), { month:'long', year:'numeric' }).format(first);
  // لا نسمح بالتنقل إلى شهر مستقبلي
  const nextBtn = document.getElementById('mdNextMonth');
  if(nextBtn) nextBtn.disabled = off >= 0;

  // الأسبوع يبدأ السبت (كما كان) — Sat=0
  const lead = (first.getDay() + 1) % 7;
  const wdFmt = new Intl.DateTimeFormat(localeForLang(), { weekday:'narrow' });
  const headCells = [];
  for(let i=0;i<7;i++){
    // 2023-01-07 كان يوم سبت
    headCells.push(`<div class="month-head">${escapeHtml(wdFmt.format(new Date(2023,0,7+i)))}</div>`);
  }
  const cells = [];
  for(let i=0;i<lead;i++) cells.push('<div class="month-day is-empty"></div>');

  let elapsed = 0;
  let statPrayed=0, statJamaah=0, statMosque=0, statQuran=0, statMorning=0, statEvening=0, statQiyam=0, statWitr=0, statFasting=0;
  for(let n=1; n<=daysInMonth; n++){
    const d = new Date(first.getFullYear(), first.getMonth(), n);
    const isToday = d.getTime() === today.getTime();
    const isFuture = d > today;
    let mark = '';
    if(!isFuture){
      elapsed++;
      const data = getDayData(d);
      const { total, done } = computeApplicableTasks(d, data);
      mark = total>0 ? (done===total ? '✅' : (done>0 ? '⚠️' : '▫️')) : '';
      PRAYER_ORDER.forEach(k => {
        if(data.prayers[k].prayed) statPrayed++;
        if(data.prayers[k].jamaah) statJamaah++;
        if(data.prayers[k].mosque) statMosque++;
      });
      if(data.quran.read) statQuran++;
      if(data.azkar.morning) statMorning++;
      if(data.azkar.evening) statEvening++;
      if(data.night.qiyam) statQiyam++;
      if(data.night.witr) statWitr++;
      if(data.fasting.fasted === true) statFasting++;
    }
    cells.push(`<div class="month-day ${isToday?'is-today':''} ${isFuture?'is-future':''}" data-date="${dateKey(d)}">
      <div class="md-dn">${n}</div>
      <div class="md-mk">${mark}</div>
    </div>`);
  }
  document.getElementById('monthGrid').innerHTML = headCells.join('') + cells.join('');

  // النقر على يوم ينقلك لعرضه
  document.querySelectorAll('#monthGrid .month-day[data-date]').forEach(el => {
    if(el.classList.contains('is-future')) return;
    el.addEventListener('click', () => {
      const [y,m,dd] = el.dataset.date.split('-').map(Number);
      state.mdViewDate = new Date(y, m-1, dd);
      renderMuslimDay();
      document.querySelector('main').scrollTop = 0;
    });
  });

  const stats = document.getElementById('monthStats');
  stats.innerHTML = `
    <div class="month-stat"><span>${escapeHtml(s.monthStatPrayed)}</span><b>${statPrayed}/${elapsed*5}</b></div>
    <div class="month-stat"><span>${escapeHtml(s.monthStatJamaah)}</span><b>${statJamaah}</b></div>
    <div class="month-stat"><span>${escapeHtml(s.monthStatMosque)}</span><b>${statMosque}</b></div>
    <div class="month-stat"><span>${escapeHtml(s.monthStatQuran)}</span><b>${statQuran}/${elapsed}</b></div>
    <div class="month-stat"><span>${escapeHtml(s.monthStatMorningAzkar)}</span><b>${statMorning}/${elapsed}</b></div>
    <div class="month-stat"><span>${escapeHtml(s.monthStatEveningAzkar)}</span><b>${statEvening}/${elapsed}</b></div>
    <div class="month-stat"><span>${escapeHtml(s.monthStatQiyam)}</span><b>${statQiyam}/${elapsed}</b></div>
    <div class="month-stat"><span>${escapeHtml(s.monthStatWitr)}</span><b>${statWitr}/${elapsed}</b></div>
    <div class="month-stat"><span>${escapeHtml(s.monthStatFasting)}</span><b>${statFasting}</b></div>
  `;
}
document.getElementById('mdPrevMonth').addEventListener('click', () => { state.mdMonthOffset = (state.mdMonthOffset||0) - 1; renderMonthly(); });
document.getElementById('mdNextMonth').addEventListener('click', () => {
  if((state.mdMonthOffset||0) < 0){ state.mdMonthOffset++; renderMonthly(); }
});

/* ================= يوم المسلم: تخصيص الأعمال المتابَعة ================= */
function renderCustomizeList(){
  const s = t();
  const box = document.getElementById('customizeList');
  box.innerHTML = TRACK_TOGGLES.map(item => `
    <label class="customize-item">
      <span>${escapeHtml(s[item.label])}</span>
      <input type="checkbox" data-key="${item.key}" ${state.settings.trackedItems[item.key] ? 'checked' : ''}>
    </label>
  `).join('') + `
    <div class="custom-tasks-box">
      <div class="custom-tasks-title">${escapeHtml(s.customHeading)}</div>
      <div class="custom-tasks-hint">${escapeHtml(s.customHint)}</div>
      ${[0,1,2].map(i => `<input type="text" class="custom-task-input" data-custom="${i}" maxlength="60" placeholder="${escapeHtml(s.customPlaceholder(i+1))}">`).join('')}
    </div>`;
  box.querySelectorAll('.custom-task-input').forEach(inp => {
    inp.value = state.settings.customTasks[Number(inp.dataset.custom)] || '';
  });
}
function openCustomize(){
  renderCustomizeList();
  document.getElementById('customizeOverlay').classList.add('active');
}
document.getElementById('mdCustomizeBtn').addEventListener('click', openCustomize);
document.getElementById('editTrackedBtn').addEventListener('click', openCustomize);
document.getElementById('customizeOverlay').addEventListener('click', (e) => {
  if(e.target.id === 'customizeOverlay') e.target.classList.remove('active');
});
document.getElementById('customizeSaveBtn').addEventListener('click', () => {
  document.querySelectorAll('#customizeList input[type=checkbox]').forEach(cb => {
    state.settings.trackedItems[cb.dataset.key] = cb.checked;
  });
  state.settings.customTasks = normalizeCustomTasks(
    [...document.querySelectorAll('#customizeList .custom-task-input')].map(inp => inp.value)
  );
  saveSettings();
  document.getElementById('customizeOverlay').classList.remove('active');
  renderMuslimDay();
});

/* ================= يوم المسلم: إعدادات إعادة الضبط والمسح ================= */
document.getElementById('resetTodayBtn').addEventListener('click', () => {
  if(!confirm(t().confirmResetToday)) return;
  const store = loadMuslimDayStore();
  delete store[dateKey(new Date())];
  saveMuslimDayStore(store);
  renderMuslimDay();
});
document.getElementById('clearHistoryBtn').addEventListener('click', () => {
  if(!confirm(t().confirmClearHistory)) return;
  localStorage.removeItem('salati_muslimday');
  renderMuslimDay();
});

/* ================= التنقل بين الشاشات (الرئيسية + الإعدادات) ================= */
function switchView(viewName){
  document.querySelectorAll('nav.tabbar button').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const navBtn = document.querySelector(`nav.tabbar button[data-view="${viewName}"]`);
  if(navBtn) navBtn.classList.add('active');
  const view = document.getElementById('view-' + viewName);
  if(view) view.classList.add('active');
  document.querySelector('main').scrollTop = 0;
  if(viewName === 'map' && state.map){
    setTimeout(() => state.map.invalidateSize(), 150);
  }
  if(viewName === 'muslimday') renderMuslimDay();
}
document.querySelectorAll('nav.tabbar button').forEach(btn => {
  btn.addEventListener('click', () => switchView(btn.dataset.view));
});
document.getElementById('settingsBtn').addEventListener('click', () => {
  document.querySelectorAll('nav.tabbar button').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-settings').classList.add('active');
  document.querySelector('main').scrollTop = 0;
});

/* ================= بدء التشغيل ================= */
initAsrSelect();
applyTheme(state.theme);
applyLanguage();
if(!restoreLastLocationIfAny()){
  requestLocation();
}
// أول استخدام لـ"يوم المسلم": نعرض شاشة التخصيص تلقائيًا مرة واحدة فقط
if(!localStorage.getItem('salati_md_onboarded')){
  localStorage.setItem('salati_md_onboarded', '1');
  setTimeout(openCustomize, 600);
}
