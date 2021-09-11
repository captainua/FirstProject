$(document).ready(function(){
  
  $(".fa-search").click(function(){
    $(".form, .input").toggleClass("active");
    $("input[type='text']").focus();
  });
  
});

