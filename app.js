(() => {
  const allowed = ['ar', 'en'];
  function setLanguage(language) {
    const selected = allowed.includes(language) ? language : 'en';
    document.documentElement.lang = selected;
    document.documentElement.dir = selected === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-lang]').forEach(element => { element.hidden = element.dataset.lang !== selected; });
    document.querySelectorAll('[data-set-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setLanguage === selected)));
    try { localStorage.setItem('midiforge.support.language', selected); } catch {}
  }
  let selected;
  try { selected = localStorage.getItem('midiforge.support.language'); } catch {}
  setLanguage(selected || (navigator.language.startsWith('ar') ? 'ar' : 'en'));
  document.querySelectorAll('[data-set-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.setLanguage)));
})();
