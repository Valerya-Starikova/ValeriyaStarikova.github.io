$(function() {
    $('select').selectric();
});
    $('select').selectric({
    maxHeight: 200
});
$(document).ready(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );
});


window.onload = function() {
		showSubMenu('.dropdown__bottomMenu','.sub-menu__bottomMenu');
                showSubMenu('#first-level','#sub-first-level');
                showSubMenu('#second-level','#sub-second-level');
};
function showSubMenu(menuItem,subMenu) {
            document.querySelector(menuItem).onmouseenter = function() {
            document.querySelector(subMenu).style.display = 'block';		
	};
            document.querySelector(menuItem).onmouseleave = function() {
            document.querySelector(subMenu).style.display = 'none';            
        };	
}


$(function() {   
    $(".btn-search").click(function() { 
             $(".btn-search").hide();
             $(".menu2").css('border-radius','0');
             $(".selection-menu-wrapper").animate({width: 'toggle'},300).css('display','inline-block');
         });
    });
    $(document).mouseup(function(e){
            var $div = $(".selection-menu-wrapper"); 
            if ( !$div.is( e.target )&& $div.has( e.target ).length === 0) {                 
                $(".menu2").css('border-radius','0 20px 20px 0');
                $(".btn-search").show();
                $div.hide();
            }
	});
  