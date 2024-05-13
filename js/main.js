const ham=document.querySelector('.ham-btn');
const menu=document.querySelector('.mobile-menu')
ham.addEventListener('click',()=>{
  ham.classList.toggle('menu-open')
  menu.classList.toggle('menu-open')
});

const about=document.querySelectorAll('.about__item');
const works=document.querySelectorAll('.works__item');

const cb=entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.observe;
    }
  })
}

const io=new IntersectionObserver(cb);

about.forEach(el=>{
  io.observe(el)
});
works.forEach(el=>{
  io.observe(el)
});



// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById('cursor'); 


// カーソル用のdivタグをマウスに追従させる
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll('a');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');    
    });
    
}