(function(){
  const root=document.documentElement;
  const toggle=document.querySelector('.theme-toggle');
  if(!toggle)return;
  function update(){
    const dark=root.dataset.theme==='dark';
    toggle.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');
    toggle.setAttribute('title',dark?'Switch to light theme':'Switch to dark theme');
    toggle.setAttribute('aria-pressed',String(dark));
    toggle.querySelector('.theme-icon').textContent=dark?'☀':'☾';
  }
  toggle.addEventListener('click',function(){
    const next=root.dataset.theme==='dark'?'light':'dark';
    root.dataset.theme=next;
    try{localStorage.setItem('tpm-theme',next)}catch(e){}
    update();
  });
  update();
})();
