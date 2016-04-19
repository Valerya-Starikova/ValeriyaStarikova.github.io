$(function() {
    $("#carousel").click(function() { 
             $(".wrapper__template").hide();
             $(".wrapper-carousel").show();
             $(function() {
                $('span.bt-click').carusel();
             });
         });
});
$(function() {
    $("#templ").click(function() { 
             $(".wrapper-carousel").hide();
             $(".wrapper__template").show();
             $(function() {
    var tmplj = $('#blank').html();
    var data = [ 
    {
        title: 'Вопрос №1',
        question: 'вариант ответа№1'        
    },
    {
        title: 'Вопрос №2',
        question: 'вариант ответа№2'
    },
    {
        title: 'Вопрос №3',
        question: 'вариант ответа№3'
    }
    ];
    var cont = tmpl(tmplj, {
        data: data
    });
    $('.wrapper__template').append(cont);
});
         });
});


