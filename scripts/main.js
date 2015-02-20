// TEACHERS STUFF

// function showAlert(msg) {
//     $("#message").html(msg);
//     $("#messageContainer").show();
// }

var user = "user";
var pass = "1234";
var attempts = 0;

$(function() {
    $("#twitButton").hide();
    $("#twitButton")
        .css('opacity', 0)
        .slideDown('slow')
        .animate(
            { opacity: 1 },
            { queue: false, duration: 'slow' }

        );

    $("#twitButton").click(function() {
    window.open("twitMain.html", "_self");
    })

    $("#myForm").submit(function(e) {
        e.preventDefault();
        var entName = document.forms["myForm"]["userName"].value;
        var entPass = document.forms["myForm"]["password"].value;
        if (entName === user && entPass === pass) {
            //alert("yes" + " " + entName + " " + entPass); // TEST
            rightPass();
        } else {
            //alert("no" + " " + entName + " " + entPass);  // TEST
            wrongPass();
        };
    });

    // TEACHERS STUFF

    // $("#myForm").submit(function(e) {
    //     e.preventDefault();
    //     var password = $("#pw").val();
    //     if (password.length <= 6) {
    //         showAlert("password must be > 6 characters");
    //     }
    // }
    
})

function wrongPass() {
    alert("wrong");       // TEST
    play_single_sound();
}

function rightPass() {
    alert("right");       // TEST
}

function play_single_sound() {
    console.log("should play a sound next");
    document.getElementById('wrongTune').play();
}

$("#twitButton").click(function() {
    window.open("twitMain.html");
})

// CLOCK STUFF

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

