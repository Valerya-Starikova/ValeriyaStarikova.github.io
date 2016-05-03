"use strict";
//реализация с помощью шаблонизатора
//var searchResults = [];    
//$(function(){        
//    $('.form_search').submit(function(){ 
//        var urlFull = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ encodeURIComponent(jQuery('.qwery').val()) + '&callback=GoogleCallback&context=?';
//            $.ajax({
//               url: urlFull,
//               dataType : "jsonp",
//               success: function (data, textStatus) {
//                   var tmplj = $('#blank').html();
//                   $.each(data.results,function(i, val) {   		
//        		searchResults[i] =   
//                        {
//                            result: '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content  						
//                        } ;                        
//                    });
//                   var cont = tmpl(tmplj, {
//                        data: searchResults
//                   });
//                   $('.wrapper').append(cont);
//    		}				
//            });
//        return false;
//    });        
//});    
//    function GoogleCallback (func, data) {
//      window[func](data);
//    }
//    
//  
 
$(function(){        
    $('.form_search').submit(function(){ 
        var urlFull = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ encodeURIComponent(jQuery('.qwery').val()) + '&callback=GoogleCallback&context=?';         
            $.ajax({
                url: urlFull,
                dataType : "jsonp",
                success: function (data, textStatus) {
                     var ol = document.createElement("ol");
                     $.each(data.results,function(i, val) {
                         var li = document.createElement("li");
                         li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;        						
                         ol.appendChild(li);
                     });
                     $('.wrapper__result').css({display: 'block'});
                     $('.results').html(ol);
                 }				
    		});
        return false;
    });        
});    
function GoogleCallback (func, data) {
  window[func](data);
}
    

function Human(name) {
  this.name = name;
  this.age = '30';
  this.gender = 'male';
  this.weight = '80';
  this.info = function() {
      console.log('  Name - ' + this.name + '  age - ' + this.age + '  gender - ' + this.gender + '  weight - ' + this.weight );
  };
}
var Person = new Human('Sasha');

function Worker(name) {
  this.name = name;
  this.age = '25';
  this.gender = 'female';
  this.weight = '50';
  this.placeOfWork = 'google';
  this.salary = '50000';
  this.works = function() {  
    console.log( this.name + ' works in ' + this.placeOfWork + ' salary - ' + this.salary );
  };
}
Worker.prototype = Person;

function Student(name) {
  this.name = name;
  this.age = '18';
  this.placeOfStudy = 'University';
  this.scholarship = '1000';
  this.watchSerial = function() {  
    console.log( this.name + ' watch serial Friends' );
  };
}
Student.prototype = Person;

var QA = new Worker('Inna');
QA.works();
QA.info();

var softwareEngineer = new Student('Ihor');
softwareEngineer.watchSerial();
softwareEngineer.info();

Person.info();
