
let boxlearners = [];
let boxsujet = [];
let res = [];
let randomItem;



// this function for add learners
const addtopic = async () => {

    const topic = document.getElementById('addtopic');
    const taketopic = topic.value;

    if (taketopic) {
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
    else {
        console.log("error");
    }

}

// this function for read learners
const readtopic = async () => {
    const res = await axios.get('http://localhost:7000/data'); {
        const data = await res.data;

        if (data) {
            data.forEach(ele=>{
                boxlearners.push(ele.name);
                document.getElementById("userList").innerHTML = boxlearners;
            })
        }
    }
}



const addsujet = async () => {

    const sujet = document.getElementById('sujet');
    const takesujet = sujet.value
    console.log(takesujet);

    const res = await axios.post('http://localhost:7000/sujet', {
            name: takesujet,
    });
    const data = await res.json();
    if (data) {
        console.log('data', data);
    }
    else {
        console.log('error');
    }
}

const readsujet = async () => {
    const res = await axios.get('http://localhost:7000/sujet'); {
        const data = await res.data;
        
        if (data) {
            data.forEach(ele => {
                boxsujet.push(ele.name);
                document.getElementById("sujetlist").innerHTML = boxsujet;
            })
        }
    }
} 



// this function for draw learners
function Randem() {
    const randomuser = boxlearners[Math.floor(Math.random() * boxlearners.length)];
    const randomsujet = boxsujet[Math.floor(Math.random() * boxlearners.length)];
    console.log('users', randomuser);
    console.log('sujet', randomsujet);

    
}


// delete learners
// function showdrawtopic (rand) {

//     let i;
    
//     let index = (boxlearners.indexOf(rand));
    
//     for (i=0; i<boxlearners.length; i++) {
//         if (boxlearners[index] == boxlearners[i]) {
//             // console.log('index', boxlearners[index]);
//             // console.log('box', boxlearners[i]);
//             boxlearners.splice(index, 1);
//             res.push(boxlearners[index]) ;
//             console.log("t", res);
//             // console.log(boxlearners);
//         }
//     }
    
//     let student_create_p = document.createElement("p")
//     const node = document.createTextNode(rand)
//     student_create_p.appendChild(node)
    
//     document.getElementById("draw").append(student_create_p);
// }