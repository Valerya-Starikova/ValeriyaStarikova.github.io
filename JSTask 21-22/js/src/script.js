$(function() {

    let data = [
    {
        question: 'Зачем используется ключевое слово var?',
        answer: ['Для вывода результатов программы на экран', 'Для вывода сообщения в отдельном окне',' Для создания новой переменной' ],
        rightAnswer: [ 2 ]
    },
    {
        question: 'Чем отличаются циклы while от do while?',
        answer: ['в javascript нет цикла do while', 'независимо от условия цикл while выполнится хотя бы раз','независимо от условия цикл do while выполнится хотя бы раз' ],
        rightAnswer: [ 2 ]
    },
    {
        question: 'Правильный вариант комментариев в javascript',
        answer: ['*закомментированный текст', '//закомментированный текст','/*закомментированный текст*/' ],
        rightAnswer: [ 1, 2 ]
    }
    ];

    localStorage.setItem('test',JSON.stringify(data));

});



$(function() {
  
    let tmplj = $('#blank').html();

    let test = localStorage.getItem('test');
        test = JSON.parse(test);

    let cont = tmpl(tmplj, {
        data: test
    });
    $('.wrapper__template').append(cont);

    $(".form__button").click(function(e) {
    let $useAns =[];
    let $a_r = 0;
    let $e = 0;
    e.preventDefault();
    $(".modal_form__text").empty();

   for( var a = 0; a < 3; a++ )
    {
      $useAns[a] = $("#bloc"+a+" input:checkbox:checked").serializeArray();
    }
    $useAns.forEach(function (item, i) {

        item.forEach(function (item_arr, a) {

            if (item_arr.value == test[i].rightAnswer[a])
            {
               $a_r++;
            }
            else{
                $e++;
            }

        });
    });

    if($e === 0)
    {
       show("congratulations! " + $a_r, $useAns);
    }
    else{
       show("Error: " + $e, $useAns);
    }
  });
 });

$(function() {
function initBlock(block_ans, count_ans) {
    let $block_ans = $(block_ans);
    $( block_ans + ' :checkbox').on('click', function() {
        if ($block_ans.find(':checked').length > count_ans) {
            this.checked = false;
        }
    });
}

initBlock("#bloc0",1);
initBlock("#bloc2",2);

});

function show(res,arr) {
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
        return arr.length=0;
    });

}
