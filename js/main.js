
let boxlearners = [];
let boxdraw = [];
let res = [];
let randomItem;


// this function for add learners
const addtopic = async () => {
    console.log('add');

    const topic = document.getElementById('add');
    const taketopic = topic.value;

    await axios.post('http://localhost:7000/data', {
            name: taketopic,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

// this function for read learners
const readtopic = async () => {

    let t = "";
    let j;

    const res = await axios.get('http://localhost:7000/data'); {
        const data = await res.data;

        if (data) {
            console.log(data);
            data.forEach(ele=>{
                boxlearners.push(ele.name);
                // console.log("box", boxlearners);
            })
        }
        for (j = 0; j < boxlearners.length; j++) {
            t += boxlearners[j] + "</br>";
        }
        document.getElementById("userList").innerHTML = t;
    }
}


// this function for draw learners
// function drawlearners() {
//     randomItem = boxlearners[Math.floor(Math.random() * boxlearners.length)];
//     draw(randomItem);
// }


// delete learners
// function draw (rand) {
//     let i;
    
//     let index = (boxlearners.indexOf(rand));

//     for (i=0; i<boxlearners.length; i++) {
//         if (boxlearners[index] == boxlearners[i]) {
//             res.push(boxlearners[index]) ;
//             boxlearners.splice(index, 1);
//             console.log("t", res);
//         }
//     }
//     let student_create_p = document.createElement("p")
//     const node = document.createTextNode(rand)
//     student_create_p.appendChild(node)

//     document.getElementById("draw").append(student_create_p);
//     document.getElementById("userList").innerHTML = boxlearners;
// }


// this function for read learners
// function readelearners () {
//     let j;
//     let res = "";

//     let tirage = document.getElementById('draw').value;
//     if (tirage) {
//         boxdraw.puch(tirage)
//         console.log(boxdraw);

//         for (j = 0; j<boxdraw.length; j++) {
//             res += boxdraw[i] + "</br>";
//         }
//     }
//     else {
//         console.log("???????????");
//     }

//     document.getElementById("draw").innerHTML = res;
// }