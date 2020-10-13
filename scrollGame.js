let test = [];
let sm = "<small>";
let size = 80;
size = Math.floor((Math.random() * size) + 1);


firstLoop();
setInterval(firstLoop, 500);

secondLoop()
setInterval(secondLoop, 500);


pageScroll();


function pageScroll() {
    window.scrollBy(0,1);
    setTimeout(pageScroll, size);
}

setTimeout(function () {
    window.location.reload(1);
}, 15000);  // After 15 secs



function makeArr(length) {
    let result;
     let characters ='⏩\t⏭\t⏯\t';

    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function firstLoop() {
    document.body.style.backgroundColor = "#000000";

    for (let i = 0; i < size; i++) {
        document.write(sm + test + "<br>");
        test[i] = makeArr(1);
        document.write("</small>")
    }
}

    function secondLoop() {
        document.body.style.backgroundColor = "#000055";

        for (let x = test.length; x > 0; x--) {
            document.write(sm + test + "<br>");
            test.pop();
            document.write("</small>")
        }
    }










