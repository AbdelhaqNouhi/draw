
let boxlearners = [];
let boxdraw = [];

// this function for add learners

function addlearners() {
    
    let i;
    let res = "";

    let learners = document.getElementById('add').value;
    if (learners) {
        boxlearners.push(learners)
        console.log(boxlearners);

        for (i = 0; i < boxlearners.length; i++) {
            res += boxlearners[i] + "</br>";
        }
    }
    else {
        console.log("???????????");
    }
    document.getElementById("userList").innerHTML = res;
}

// this function for draw learners

function drawlearners () {
    var randomItem = boxlearners[Math.floor(Math.random() * boxlearners.length)];
    console.log(randomItem);

}


// this function for read learners

function readelearners () {
    let j;
    let res = "";

    let tirage = document.getElementById('draw').value;
    if (tirage) {
        boxdraw.puch(tirage)
        console.log(boxdraw);

        for (j = 0; j<boxdraw.length; j++) {
            res += boxdraw[i] + "</br>";
        }
    }
    else {
        console.log("???????????");
    }

    document.getElementById("draw").innerHTML = res;
}