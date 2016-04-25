"use strict";
var test = localStorage.getItem('test');
    test = JSON.parse(test);
$(function() {
    var tmplj = $('#blank').html();
    var data = [ 
    {
        question: 'Зачем используется ключевое слово var?',
        answer: ['Для вывода результатов программы на экран', 'Для вывода сообщения в отдельном окне',' Для создания новой переменной' ],
        rideAnswer: [ 2 ]    
    },
    {
        question: 'Чем отличаются циклы while от do while?',
        answer: ['в javascript нет цикла do while', 'независимо от условия цикл while выполнится хотя бы раз','независимо от условия цикл do while выполнится хотя бы раз' ],
        rideAnswer: [ 2 ]
    },
    {
        question: 'Правильный вариант комментариев в javascript',
        answer: ['*закомментированный текст', '//закомментированный текст','/*закомментированный текст*/' ],
        rideAnswer: [ 1, 2 ]
    }
    ];
 
    localStorage.setItem('test',JSON.stringify(data));
    var cont = tmpl(tmplj, {
        data: test
    });
    $('.wrapper__template').append(cont);
});

$(function() { 
    $(".form__button").click(function() {              
    var $useAns = [];
    var $a_r = 0;
    var $e = 0; 
    var $otv;
    $(".modal_form__text").empty();
    for( var a = 0; a < 3; a++ )
    {       
        var $block_ = $("#bloc"+a+" input:checkbox:checked");
        console.log('block number',$block_ );
        $otv = test[a].rideAnswer;
        for( var i = 0; i < $block_.length; i++ )
        { 
           $useAns[i] = $($block_[i]).val();
           console.log('answer',$useAns[i]);
        }
        for( var zx=0; zx<$block_.length; zx++)
        {                            
            for( var x=0; x<$($(test[a].rideAnswer)).length; x++)
            {  
                console.log('use answer',$useAns);
                console.log('correct answer',$otv[x]);
                    if( $useAns[zx] == $otv[x] )
                       //if($useAns.indexOf($otv) > -1)
                      // if($useAns.includes($otv[x]))
                       // if(find($useAns,$otv))
                      //if($.inArray($otv[x],$useAns))
                {
                    $a_r++;
                    console.log('in the if correct',$a_r++);
                    break;
                }
                else{
                    $e++;
                    console.log('error',$e++)
                    break;
                }
                    
               }
           }        
    } 
    if($e === 0)
    {
       show("congratulations! " + $a_r, $useAns, $otv);
    }
    else{
       show("Error: " + $e, $useAns, $otv);
    }         
  });
 });

$(function() {     
function initBlock(block_ans, count_ans) {
    var $block_ans = $(block_ans);
    $( block_ans + ' :checkbox').on('click', function() {
        if ($block_ans.find(':checked').length > count_ans) {
            this.checked = false;
        }
    });
}

initBlock("#bloc0",1);
initBlock("#bloc2",2);

});        

function show(res,arr,otv) { 
    $('.overlay').fadeIn(400,function(){ 
        $('.modal_form').css('display', 'block').animate({opacity: 1, top: '50%'}, 200);
        $('.modal_form .modal_form__text').append(res);
    });	
    $('.modal_close, .overlay, .modal__button').click( function(){ 
        $('.modal_form').animate({opacity: 0, top: '45%'}, 100,function(){ 
            $(this).css('display', 'none'); 
            $('.overlay').fadeOut(400); 
        });	
    });
    $(".modal__button").click(function() { 
        $(':input').removeAttr('checked'); 
        return res = null; 
        return otv = null;
        return arr.length=0;
        console.log(arr);
    });
    
}
