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

    // SPLASH ANIMATION AND ENTRY 

    $("#twitButton")
        .hide()
        .delay(500);
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

    // PASSWORD STUFF

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

    // LIGHTBOX STUFF

    $('.lightbox_trigger').click(function(e) {
    
        // Code that makes the lightbox appear
        e.preventDefault();
        var image_href = $(this).attr("href");

        if ($('#lightbox').length > 0) { // #lightbox exists
    
            //insert img tag with clicked link's href as src value
            $('#content').html('<img src="' + image_href + '" />');
            
            //show lightbox window - you can use a transition here if you want, i.e. .show('fast')
            $('#lightbox').show();
        } else { //#lightbox does not exist 
    
            //create HTML markup for lightbox window
            var lightbox = 
            '<div id="lightbox">' +
                '<p>Click to close</p>' +
                '<div id="content">' + //insert clicked link's href into img src
                    '<img src="' + image_href +'" />' +
                '</div>' +  
            '</div>';
                
            //insert lightbox HTML into page
            $('body').append(lightbox);
        }
        $("html")
            .css("position", "fixed")
            .css("width", "100%");

        $('img').bind('contextmenu', function(e) {
            return false;
        }); 
    });

    $('#lightbox').live('click', function() {
        $('#lightbox').hide();
        $("html").css("position", "static");
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

// PASSWORD SCREEN

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
            // removeElement("#submitButton");
            // removeElement("#approveButton");
            // var elem = document.getElementById('submitButton');
            // elem.parentNode.removeChild(elem);
            // var elem = document.getElementById('approveButton');
            // elem.parentNode.removeChild(elem);
            $("#myForm").hide();
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
    $("#approveButton").show();
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

function removeElement(id) {
    var elem = document.getElementById('id');
    elem.parentNode.removeChild(elem);
}


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
    setHours(h, m);

    if(s % 2 === 0) {
        $("body").css('background-color', 'rgb(85,85,85)');
    } else {
        $("body").css('background-color', 'rgb(92,130,156)');
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
function setHours(h, m) {
    var rotateBy = (h * 30) + (m * 0.5);
    $("#hours").css({ WebkitTransform: 'rotate(' + rotateBy + 'deg)'});
    // For Mozilla browser: e.g. Firefox
    $("#hours").css({ '-moz-transform': 'rotate(' + rotateBy + 'deg)'});
}

// SYSTEM ANALIZER

// This script sets OSName variable as follows:
// "Windows"    for all versions of Windows
// "MacOS"      for all versions of Macintosh OS
// "Linux"      for all versions of Linux
// "UNIX"       for all other UNIX flavors 
// "Unknown OS" indicates failure to detect the OS

var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

function osTest() {
    $("#OSspan").html(OSName);
}

function platTest() {
    var x = navigator.platform;
    $("#platSpan").html(x);
}

function agentHead() {
    var x = navigator.userAgent;
    $("#agentSpan").html(x);
}

function cookieTest() {
    var x = navigator.cookieEnabled;
    var txt = x === true ? "Enabled" : "Disabled";
    $("#cookieSpan").html(txt);
}

var sizeShown = false;

function sizeTest() {
    var w = $(window).height() + " w"
    var h = $(window).width() + " h";
    $("#sizeSpan").html(w + " " + h);
    sizeShown = true;
}


$(window).resize(function() {
    //alert("test");
    if (sizeShown === true) {
        sizeTest();
    };

});




