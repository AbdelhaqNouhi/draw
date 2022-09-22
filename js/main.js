
let boxlearners = [];
let boxdraw = [];
let res = [];
let randomItem;

// this function for add learners
function addlearners() {
    
    let i;
    let res = "";

    let learners = document.getElementById('add').value;
    if (learners) {
        boxlearners.push(learners)
        // console.log(boxlearners);

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
function drawlearners() {
    randomItem = boxlearners[Math.floor(Math.random() * boxlearners.length)];
    draw(randomItem);
}


// delete learners
function draw (rand) {
    let i;
    
    let index = (boxlearners.indexOf(rand));

    for (i=0; i<boxlearners.length; i++) {
        if (boxlearners[index] == boxlearners[i]) {
            res.push(boxlearners[index]) ;
            boxlearners.splice(index, 1);
            console.log("t", res);
        }
    }
    let student_create_p = document.createElement("p")
    const node = document.createTextNode(rand)
    student_create_p.appendChild(node)

    document.getElementById("draw").append(student_create_p);
    document.getElementById("userList").innerHTML = boxlearners;
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