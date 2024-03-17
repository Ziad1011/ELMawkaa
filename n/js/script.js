$(document).ready(function(){
    $(".start").click(function(){
      $(".sub-menu1").toggle();
      $(".sub-menu2").hide();
      $(".sub-menu3").hide();
      $(".sub-menu4").hide();
     
    });
    $(".sell").click(function(){
        $(".sub-menu2").toggle();
        
      $(".sub-menu1").hide();
      $(".sub-menu3").hide();
      $(".sub-menu4").hide();
       
      });
      $(".market").click(function(){
        $(".sub-menu3").toggle();
        
      $(".sub-menu2").hide();
      $(".sub-menu1").hide();
      $(".sub-menu4").hide();
       
      });
      $(".manage").click(function(){
        $(".sub-menu4").toggle();
        
      $(".sub-menu2").hide();
      $(".sub-menu3").hide();
      $(".sub-menu1").hide();
       
      });
    
  });
  
    