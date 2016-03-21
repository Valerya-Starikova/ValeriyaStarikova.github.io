 function pow(x, n) {
      var result = 1;
      var m = 0;

      if (n == 0) {      
        return 1;
      }  
      if (n > 0) {      
        for (var i = 0; i < n; i++) {
          result *= x;    
        }  
        return result;
      }  
      if (n < 0) {
        var m = Math.abs(n);    
        for (var i = 0; i < m; i++) {
          result *= x;
        }    
          result = 1 / result;
          return result;
      }
    }

    function add(arr) {  
      for ( var i = 0; i < 5; i++ ) {
        arr[i] = prompt( "Введите имя" );
      }
      return arr;
    }

    function search(array,name){
      for ( var i = 0; i < array.length; i++ ) {
        if ( array[i] == name ) {
          return alert( name + ', вы успешно вошли!' );         
        }
        else {
          return alert( "ERROR! Пользователя с таким именем не существует!" );
        }
      }
    }
    
    var number = prompt( "JS/дз№1 Введите номер задания(1,2): ", "" );
    if( number == 1 ){
      var x = prompt("Введите x:", "");
      var n = prompt("Введите степень:", "");
      alert( 'Результат = ' + pow(x, n) );
    }
    else{
      var arr = new Array();
      add(arr);
      var name = prompt( "Введите имя пользователя", "" );
      search(arr,name);
    }
