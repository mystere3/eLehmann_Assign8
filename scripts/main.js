function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ms=today.getMilliseconds();
    m = checkTime(m);
    s = checkTime(s);
    //ms = checkTime(ms);
    document.getElementById('txt').innerHTML = h+":"+m+":"+s + ":" + ms;
    var t = setTimeout(function(){startTime()},500);
    setSeconds(s);
    setMinutes(m);
    setHours(h);

    if(s % 2 === 0) {
        $("body").css('background-color', 'yellow');
    } else {
        $("body").css('background-color', 'orange');
    }

}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function setSeconds(n) {
    var rotateBy = n * 6;
    $("#seconds").css({ WebkitTransform: 'rotate(' + rotateBy + 'deg)'});
    // For Mozilla browser: e.g. Firefox
    $("#seconds").css({ '-moz-transform': 'rotate(' + rotateBy + 'deg)'});


}
function setMinutes(n) {
    var rotateBy = n * 6;
    $("#minutes").css({ WebkitTransform: 'rotate(' + rotateBy + 'deg)'});
      // For Mozilla browser: e.g. Firefox
    $("#minutes").css({ '-moz-transform': 'rotate(' + rotateBy + 'deg)'});
}
function setHours(n) {
    var rotateBy = n * 30;
    $("#hours").css({ WebkitTransform: 'rotate(' + rotateBy + 'deg)'});
    // For Mozilla browser: e.g. Firefox
    $("#hours").css({ '-moz-transform': 'rotate(' + rotateBy + 'deg)'});

}
