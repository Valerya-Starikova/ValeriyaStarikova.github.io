var powTest = {
    pow: function (x, n) {
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
        for (var i = 0; i < Math.abs(n); i++) {
          result *= x;
        }    
          result = 1 / result;
          return result;
      }
    }
};
module.exports = powTest;