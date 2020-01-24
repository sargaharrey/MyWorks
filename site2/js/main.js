
var x = document.querySelector('.header');
      x.style.height = window.innerHeight + 'px';
      x.style.display = 'inline-block';


var y = document.querySelector('.nav-custom');

    window.onscroll = function ns(){
      if (document.documentElement.scrollTop >  80){
        y.style.backgroundColor = '#222831';
      }
      else if (document.documentElement.scrollTop < 80){
        y.style.backgroundColor = null;
      }
    }
      // y = document.querySelector('.services');
      // y.style.display = 'inline-block';
     // x.style.width = window.innerWidth +'px';
 //
  // var y = document.querySelector('.featured-section')
  //   y.style.width = 1378 + 'px';


 $(function(){


    $("html").niceScroll({cursorwidth: '15px', autohidemode: false, zindex: 2000, cursorcolor:'#222831' });
     $('html').getNiceScroll().resize();

     $('.button').click(function(){
       var value = $(this).attr('data-filter');
       if(value == 'all'){
         $('.filter').show(1000);
       }
       else{
         $('.filter').not('.'+ value).hide(1000);
         $('.filter').filter('.'+ value).show(1000)
       }

     })

     $(".Team-body").owlCarousel({
       autoplay: true,
       dots: true,
       loop: true,
       items: 3,
     });


     $('.nav-item  a').click(function(e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $('#' + $(this).data('scroll')).offset().top

        },300)
        // $('.nav-item a').addClass(acive)

     })
 });

 // document.getElementsByTagName('button').onclick = function(){
 //   var value = this.getAttribute('data-filter');
 //   if (value == 'all'){
 //    var  x = document.getElementsByClassName('filter') ;
 //     x.style.opacity = parseFloat(x.style.opacity) + 0.1
 //   }
 //
 // }

// var images = document.getElementsByTagName('img');
//  function sall(images){
//    var images = document.getElementsByTagName('img');
//    var op = 0.1;
//
//      var timer = setInterval(function(){
//
//
//    if(op >= 1){
//      clearInterval(timer);
//    }
//
// for(i = 0 ; i <= 6 ; i++ ){
//      images[i].style.opacity = op;
//       op += op * 0.1;
//       images[i].style.display = 'block'
// }
//
//
// },150)
// }
// function Fitness(imgF){
//   var images = document.getElementsByTagName('img');
//   var imgF = document.getElementsByClassName('Fitness');
//   var op = 0.1;
//   var timer = setInterval(function(){
//     if(op >= 1){
//       clearInterval(timer);
//     }
//     for(var i = 0; i <= imgF.length; i++ ){
//       imgF[0].style.opacity = op;
//       op += op * 0.1}
//       for( i = 0; i <= 6 ; i++) {
//       if (images[i].classList.contains('Fitness') == false){
//           images[i].style.display = 'none';
//
//
//     }
//
//   }
//
// },50)
// };
// function bulking(y){
//   var y = document.getElementsByTagName('figure');
//    x = document.getElementsByClassName('Bulking');
//
//   var op = 0.1;
//   var timer = setInterval(function(){
//     if(op >= 1){
//       clearInterval(timer);
//     }
//     Array.prototype.forEach.call(x, function(x) {
//       x.style.opacity = op;
//         op += op * 0.1;
//
//      })
//      y.style.display = 'none';
// },50)
// };
// function bulking(imbB) {
//   var images = document.getElementsByTagName('img');
//
//   var imgB = document.querySelectorAll('img .Bulking');
//
//   var op = 0.1;
//   var timer = setInterval(function(){
//
//     if(op >= 1){
//       clearInterval(timer);
//     }
//
// for (var i = imgB.length - 1; i >= 0; --i)
//     {
//
//
//       imgB[i].style.opacity = op;
//       op += op * 0.1;}
//       for (var i = images.length - 1; i >= 0; --i){
//         var hero = images[i]
//       if(hero.classList.contains('Fitness') == true && hero.classList.contains('Tonig') == true){
//       hero.classList.add('none-bulking')
//
//   }
//
//   // else (images[i].classList.contains('bulking') == true && images[i].classList.contains('Fitness') == false && images[i].classList.contains('Tonig') == false)
//   // {
//   //   images[i].classList.add('active-bulking')
//   // }
// }
  //     for( i = 0; i <= 6 ; i++) {
  //     if (images[i].classList.contains('Fitness') == false){
  //         images[i].style.display = 'none';
  //
  //
  //   }
  //
  // }





// function Bulking(imgB){
//   var images = document.getElementsByTagName('img');
//   var imgB =  document.querySelector(".Bulking");
//
//   var op = 0.1;
//   var timer = setInterval(function(){
//     if(op >= 1){
//       clearInterval(timer);
//     }
//     for(var i = 0; i <= imgB.length; i++ ){
//       imgB[i].style.opacity = op;
//       op += op * 0.1;
//       for( i = 0; i <= 5 ; i++) {
//       if (images[i].classList.contains('Bulking') == true){
//           images[i].style.display = 'none';
//
//     }
//
// }
//   }
//
// },50)
// }

 // var y = document.querySelector('#demo');
 //  function fy(y) {
 //  if (y.matches){
 //     y.style.height = window.innerHeight - 260 + 'px';
 //   }
 //   else{
 //      y.style.height = window.innerHeight - 280 + 'px';
 //   }
 // }
 //   const matches = window.matchMedia("(min-width:920px)");
 //    fy(y);
 //    y.addListener(fy);
// var widt h = 0;
// function load_bar(){
//   window.setInterval(function(){
//     width = +10;
//     if(width === 100){
//     clearinterval();}
//     else{
//       document.getElementById('progress-one').style.width= width + "%";
//     }
//   },50)
//
//
// }
//   var y = document.querySelector('nav');
//  window.onscroll = function scrollFunction() {
//    if(document.documentElement.scrollTop > 100){
//      document.querySelector(".navbar").style.backgroundColor = 'white';
//      document.querySelector(".nav-link").style.color = 'black';
//      document.querySelector(".nav-item").style.color = 'black';}
//    else {
//      document.querySelector(".navbar").style.backgroundColor = null;
//      document.querySelector(".nav-link").style.color = null;
//    }
//
// }
