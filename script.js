document.getElementById("arrow").onclick=function(){
    document.getElementById("first").scrollIntoView({behavior:"smooth"})
}
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
});
$('.flipbook').turn({
  // Width

  width:1684,
  
  // Height

  height:600,

  // Elevation

  elevation: 50,
  
  // Enable gradients

  gradients: true,
  
  // Auto center this flipbook

  autoCenter: true

});
document.addEventListener("DOMContentLoaded",function(){
  let flag = false
  document.getElementById("menu_id").onclick = function(){
 flag = !flag
 if(flag==true){
 document.getElementById("modal_window").style.display="flex"
 }
 else{
  document.getElementById("modal_window").style.display="none"
 }
  }
  window.onscroll = function() {
    var scrolled_1 = document.getElementById("first").getBoundingClientRect().top;
    var scrolled_2 = document.getElementById("second").getBoundingClientRect().top;
    var scrolled_3= document.getElementById("third").getBoundingClientRect().top;
    let menu = document.getElementById("menu")
    console.log(scrolled_1)
     if(scrolled_3<0){
     menu.style.background = "rgba(0, 0, 0, 1)"
     menu.style.color = "rgba(255, 255, 255, 1)"
    }
     else if(scrolled_2<0){
      menu.style.background = "rgba(50, 50, 50, 1)"
      menu.style.color = "rgba(255, 255, 255, 1)"
    }
     else if(scrolled_1<-10){
      menu.style.background = "rgba(255, 255, 255, 1)"
      menu.style.color = "rgba(0, 0, 0, 1)"
     }
     else if(scrolled_1<=0){
      menu.style.background = "rgba(0, 0, 0, 0)"
      menu.style.color = "rgba(255, 255, 255, 1)"
     }
     
    
  };
})
