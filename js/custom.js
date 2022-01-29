function openNav() {
   document.getElementById("nav-menu").style.right = "0";
   $('html').css('overflow', 'hidden');
 }
 function closeNav() {
   document.getElementById("nav-menu").style.right = "100%";
   $('html').css('overflow', 'auto')
 }
 //Slick slider initialize
$('.slider').slick({
  arrows:true, dots: false, infinite:true, speed:500,
  autoplay:true, autoplaySpeed: 3000, slidesToShow:1, slidesToScroll:1
});
//On click of slider-nav childern,
//Slick slider navigate to the respective index.
$('.slider-nav > div').click(function() {
	$('.slider').slick('slickGoTo',$(this).index());
})