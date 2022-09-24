
let boxlearners = [];
let boxdraw = [];
let res = [];
let randomItem;

// require lybrary
// const fs = require('fs');

// // create a json object
// const user = {
//     "id": 1,
//     "name": "abdelhaq",
//     "sujet": "xp"
// };

// // convert json object to string
// const data = JSON.stringify(user, null, 2);

// // write json object to string
// fs.writeFile('http://localhost:7000/data', data, (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log("json data is saved");
// });

// // reade json on=bject from file
// fs.readFile('../data.json', 'utf-8', (err, data) =>  {
//     if(err) {
//         throw err;
//     }

//     // parse Json object
//     const user = JSON.parse(data.toString());

//     // print sjon object
//     console.log(user);
// });




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

    const res = await axios.get('http://localhost:7000/data'); {
        const data = await res.data;

        if (data) {
            boxlearners = data;
                
        }
    }
    boxlearners.forEach(ele=>{
       document.getElementById("draw").innerHTML = ele.name;
    })
}



// function addlearners() {
    
//     let i;
//     let res = "";

//     if (learners) {
//         boxlearners.push(learners)
//         console.log(boxlearners);

//         for (i = 0; i < boxlearners.length; i++) {
//             res += boxlearners[i] + "</br>";
//         }
//     }
//     else {
//         console.log("???????????");
//     }
//     document.getElementById("userList").innerHTML = res;
// }


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