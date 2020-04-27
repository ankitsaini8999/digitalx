$(document).ready(function{
   $(window).scroll(function{
     var sc = $(window).scrollTop();
     if (sc>100)
     {
       $('.nav').addClass('sticky');
     }
     else
     {
       $('.nav').removeClass('sticky');
     }
   });
  });
