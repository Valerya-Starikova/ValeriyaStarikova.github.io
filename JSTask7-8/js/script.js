$(function () {   
    $(".wrapper").click(function(){ 
             $(".wrapper").addClass("scrol").animate({transition: '4s'});
    });
//       $(".wrapper").click(function(){ 
//           $(this).toggleClass("scrol").animate({transition: '4s'});   
//      });
    $(document).mouseup(function (e){
            var $div = $(".wrapper"); 
            if ( !$div.is( e.target )&& $div.has( e.target ).length === 0) { 
                $div.removeClass("scrol").animate({transition: '4s'});   
            }
	});
   });
$(function () {
       var $links = $(".tabs li"),
           $divs = $(".tabs div");           
       $(".tabs").on("click", "li", function (event) {
           event.preventDefault();           
           $links.not(this).removeClass("active");
           $(this).addClass("active");       
           var i = $links.index(this),
               div = $divs.eq(i);
           div.show();
           $divs.not(div).css('display', 'none');           
       });       
   });
$(function() {
  $('.form').each(function(){
	var form = $(this),
        btn = form.find('#btn-submit');
	form.find('.hhovertip').addClass('empty-field');
    function checkInput(){
      form.find('.hhovertip').each(function(){
        if($(this).val() !== ''){
		$(this).removeClass('empty-field');
        }
        else {
		$(this).addClass('empty-field');
        }
      });
    }
    $(".form input").hover(function() {
        $(this).next("em").animate({opacity: "show", top: "28"}, "slow");
    }, function() {
        $(this).next("em").animate({opacity: "hide", top: "38"}, "fast");
    });
    function lightEmpty(){
        form.find('.empty-field').css({'border-color':'#d8512d'});
        form.find('.empty-field').click(function(){            
          setTimeout(function(){
          form.find('.empty-field').removeAttr('style');
        },500);
      });
    }
    setInterval(function(){
      checkInput();
      var sizeEmpty = form.find('.empty-field').size();
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false;
        } else {
          btn.addClass('disabled');
        }
      } 
      else {
        btn.removeClass('disabled');
      }
    },500);

    btn.click(function(){
      if($(this).hasClass('disabled')){
          form.find('.empty-field').next("em").animate({opacity: "show", top: "28"}, "slow");
          lightEmpty();                
        return false;
      }
      else {
        form.submit();
      }
    });
  });
});

           
       
        