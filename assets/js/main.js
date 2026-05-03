document.addEventListener('DOMContentLoaded',function(){
  var t=document.querySelector('.menu-toggle'),n=document.querySelector('.site-nav');
  t&&n&&t.addEventListener('click',function(){n.classList.toggle('active')});
  document.querySelectorAll('.toc a').forEach(function(l){
    l.addEventListener('click',function(e){
      e.preventDefault();var s=document.querySelector(this.getAttribute('href'));
      s&&s.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });
});
