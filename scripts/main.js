// TEACHERS STUFF

// function showAlert(msg) {
//     $("#message").html(msg);
//     $("#messageContainer").show();
// }

var user = "user";
var pass = "1234";
var attempts = 0;
var maxAttempts = 3;

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
    window.open("twitApprove.html", "_self");
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
    //alert("wrong");       // TEST
    
    attempts++;
    switch(attempts) {
        case 1:
            $("#angFace")
                .css('opacity', 0.33)
                .rotate(-45);
            $("#line1").html("WRONG!")
            $("#line2").html("You have 2 attempts remaining.");
            $(".myRow").css("background-color", "yellow");
            break;
        case 2:
            $("#angFace")
                .css('opacity', 0.66)
                .rotate(45);
            $("#line1").html("STILL WRONG!")
            $("#line2").html("You have 1 attempt remaining.");
            $(".myRow").css("background-color", "orange");
            break;
        case 3:
            $("#angFace")
                .css('opacity', 1.0)
                .rotate(0);
            $("#line1").html("Oh my, you don't belong here.");
            $("#line2").html("No attempts remain.");
            $("#myForm").css('opacity', 0.0);
            $("#denial").html("DENIED");
            $(".myRow").css("background-color", "red");
            break;
        default:
            alert("attempts variable out of scope - " + attempts);
    }
    play_single_sound();

}

function rightPass() {
    //alert("right");       // TEST
    $("#myForm").css('opacity', 0.0);
    $("#approveButton").css('opacity', 1.0);
    $("#hapFace").css('opacity', 1.0);
    $("#line1").html("CORRECT!");
    $("#line2").html("You have the key to our everlasting soul.");
    $(".myRow").css("background-color", "rgb(131,183,220)");
}

function play_single_sound() {
    console.log("should play a sound next");
    document.getElementById('wrongTune').play();
}

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};


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

