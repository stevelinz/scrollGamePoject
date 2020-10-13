let test = [];
let buildArr = ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"];
let sm = "<small>";
let t = "&nbsp";
let size = 60;
size = Math.floor((Math.random() * size) + 1);


firstLoop();
setInterval(firstLoop, 1000);

secondLoop()
setInterval(secondLoop, 500);

// firstLoopRight();
// setInterval(firstLoopRight, 1050);
//
// secondLoopRight();
// setInterval(secondLoopRight, 750);

pageScroll();


function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}



function makeid(length) {
    var result = '';
    var characters = '!@#$%^&*()_+<,>.?/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijk' +
        'lmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function firstLoop() {
    document.body.style.backgroundColor = "#A9A9A9";

    for (let i = 0; i < size; i++) {
        document.write(sm + test + "<br>");
        test[i] = makeid(1);
        document.write("</small>")
    }
}

function firstLoopRight() {
    document.body.style.backgroundColor = "#A9A9A5";

    for (let i = 0; i < size; i++) {
        document.write(sm + buildArr.align.trimLeft() + "<br>");
        document.write("</small>")
    }
}

    function secondLoop() {
        document.body.style.backgroundColor = "#A9A9A0";

        for (let x = test.length; x > 0; x--) {
            document.write(sm + test + "<br>");
            test.pop();
            document.write("</small>")
        }
    }

function secondLoopRight() {
    document.body.style.backgroundColor = "#A9A9A9";

    for (let x = buildArr.length; x > 0; x--) {
        document.write( sm + buildArr + "<br>");
        buildArr.pop();
        document.write("</small>")
    }
}






