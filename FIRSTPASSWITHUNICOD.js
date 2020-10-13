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



function makeArr(length) {
    let result = '';
    // var characters = '⛰\t⛱\t⛲\t⛳\t⛴\t⛵\t⛷ \t⛸\t⛹\t'+
    //     ' ⏩\t⏪\t⏫\t⏬\t⏭\t⏮\t⏯\t';
     let characters ='⏩\t⏭\t⏯\t';

    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


function firstLoop() {
    document.body.style.backgroundColor = "#A9A9A9";

    for (let i = 0; i < size; i++) {
        document.write(sm + test + "<br>");
        test[i] = makeArr(1);
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








