var mainInt = 60;
var clocktimer, dateObj, dh, dm, ds, ms;
var reset = '';
var h = 1;
var m = 1;
var tm = 1;
var s = 0;
var ts = 0;
var ms = 0;
var flag = true;
var init = 0;
var pause = 0;
var startButton = document.getElementById('start');
var stopButton = document.getElementById('clear'); 
var splitButton = document.getElementById('split'); 
var newLi;
var newBox;
 function clearALL() {
  clearTimeout(clocktimer);
  h = 1;
  m = 1;
  tm = 1;
  s = 0;
  ts = 0;
  ms = 0;
  init = 0;
  flag = true;
  document.getElementById('clockH').innerHTML = '00';
  document.getElementById('clockM').innerHTML = '00';
  document.getElementById('clockS').innerHTML = '00';
  document.getElementById('clockMs').innerHTML = '00';
 }
 function startTimer() {      
   var cdateObj = new Date();
   var t = (cdateObj.getTime() - dateObj.getTime()) - (s * 1000);
    if (t > 999) {
        s++;
    }
    if (s >= (m * mainInt)) {
        ts = 0;
        m++;
    } 
    else {
        ts = parseInt((ms / 100) + s);
        if (ts >= mainInt) {
            ts = ts - ((m - 1) * mainInt);
        }
    }
    if (m > (h * mainInt)) {
        tm = 1;
        h++;
    } 
    else {
        tm = parseInt((ms / 100) + m);
        if (tm >= mainInt) {
            tm = tm - ((h - 1) * mainInt);
        }
    }
    ms = Math.round(t / 10);
    if(ms > 99) {
        ms = 0;
    }
    if (ms === 0) {
        ms = '00';
    }
    if (ms > 0 && ms <= 9) {
        ms = '0' + ms;
    }
    if (ts > 0) {
        ds = ts;
        if (ts < 10) {
            ds = '0' + ts;
        }
    } 
    else {
        ds = '00';
    }
    dm = tm - 1;
    if (dm > 0) {
        if (dm < 10) {
            dm = '0' + dm;
        }
    } 
    else {
        dm = '00';
    }
    dh = h - 1;
    if (dh > 0) {
        if (dh < 10) {
            dh = '0' + dh;
        }
    } 
    else {
        dh = '00';
    }
    document.getElementById('clockH').innerHTML = dh;
    document.getElementById('clockM').innerHTML = dm;
    document.getElementById('clockS').innerHTML = ds;
    document.getElementById('clockMs').innerHTML = ms;
    if (flag === true) {
      clocktimer = setTimeout("startTimer()", 10);
    }
 }; 
 
  stopButton.onclick = function() {
      clearALL();
      startButton.value = "START";
      startButton.className = "btn btn-primary btn-lg";
      newBox.remove(newLi);    
  };
  startButton.onclick = function() { 
       this.value = "PAUSE";
       this.className = "btn btn-info btn-lg";     
       if (init === 0) {
        dateObj = new Date();
        startTimer();
        init = 1;     
        var cl = document.getElementById('clock-box');
        newBox = document.createElement('ol');
        newBox.id = "list";
        cl.appendChild(newBox);
    } 
    else {
        if (flag === true) {
            flag = false;
            pause = new Date();
            this.className = "btn btn-success btn-lg";
            this.value = "CONTINUE";
            var str = ( dh + ':' + dm + ':' + ds + '.' + ms);
            newLi = document.createElement('li');
            newLi.innerHTML = 'Stop:' + str;
            newBox.appendChild(newLi);
        } 
        else {
            flag = true;
            dateObj = new Date(dateObj.getTime() + (new Date()).getTime() - pause.getTime());
            startTimer();
        }
   
    }
      
 };
 splitButton.onclick = function() { 
     var str = ( dh + ':' + dm + ':' + ds + '.' + ms);
     newLi = document.createElement('li');
     newLi.innerHTML = 'Split:' + str;
     newBox.appendChild(newLi);
 };
  
 