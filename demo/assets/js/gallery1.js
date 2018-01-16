$('.imgWrap').hover(function () {
 // $(this).css('width', '36%');
   $(this).addClass('current');
  //$(this).siblings().css('width', '16%');  
   $(this).siblings().addClass('notCurrent');
}, function () {
  //$('.imgWrap').css('width', '20%');  
  $('.imgWrap').siblings().removeClass('notCurrent');
  $('.imgWrap').removeClass('current');
 });