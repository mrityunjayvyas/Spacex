(function (){
 let socials = document.querySelectorAll('.social div')

 socials.forEach(function(social,index){
    social.style.animation = `moveIn 0.6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/5 + 0.2}s`;
 })

let rocketpieces = document.querySelectorAll('.rocket-body span')


let rocket = document.querySelector('.rocket')

let triggerStart = window.innerHeight /5;

let rocketOffsetTop = rocket.offsetTop;

let thirdoffsetTopn = rocketpieces[2].offsetTop

document.addEventListener('scroll',(e) =>{
   if(window.scrollY > (rocketOffsetTop - triggerStart)){
      rocketpieces[0].classList.add('active');
      rocketpieces[1].classList.add('active');
   } else {
      rocketpieces[0].classList.remove('active');
      rocketpieces[1].classList.remove('active')
   }
   if(window.scrollY > (thirdoffsetTopn - triggerStart)){
      rocketpieces[2].classList.add('active');

   }else{
      rocketpieces[2].classList.remove('active');
   }
}) 



}())