// يُحمَّل هذا الملف مبكرًا في <head> لتفعيل الثيم المحفوظ فورًا قبل رسم الصفحة (يمنع "ومضة" الثيم الافتراضي)
(function(){
  try{
    var t = localStorage.getItem('salati_theme') || 'brand';
    document.documentElement.setAttribute('data-theme', t);
  }catch(e){}
})();
