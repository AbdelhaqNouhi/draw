
let boxlearners = [];
let boxsujet = [];
let res = [];
let randomItem;



// this function for add learners
function addtopic () {
    
    const topic = document.getElementById('addtopic');
    const taketopic = topic.value;
    
    if (taketopic) {
        fetch('http://localhost:7000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: taketopic,
            })
        })
        .then(res => res.json())
        .then(out => console.log(out))
            // .then(appel => this.readtopic())
    }
    else {
        console.log("error");
    }
}

// this function for read learners
function readtopic () {
    fetch('http://localhost:7000/users')
    .then(res=> res.json())
    .then(data => {
        if (data) {
            data.forEach(ele => {
                boxlearners.push(ele);
                document.getElementById("userList").innerHTML += ele.name;
            })
        }
    })
}
readtopic()




function addsujet () {

    const sujet = document.getElementById('sujet');
    const takesujet = sujet.value

    if (takesujet) {
        fetch('http://localhost:7000/sujet', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: takesujet,
            })
        })
        .then(res => res.json())
        .then(out => console.log(out))
    }
    else {
        console.log('error');
    }
}

function readsujet () {
    fetch('http://localhost:7000/sujet')

        .then(res => res.json())
        .then(data => {
            if (data) {
                // console.log(data);
                data.forEach(ele => {
                    boxsujet.push(ele);
                    document.getElementById("sujetlist").innerHTML += ele.name;
                })
            }
        })
} 
readsujet();



// this function for draw learners
function Randem() {
    const randomuser = boxlearners[Math.floor(Math.random() * boxlearners.length)];
    const randomsujet = boxsujet[Math.floor(Math.random() * boxsujet.length)];
    console.log('users', randomuser);
    console.log('sujet', randomsujet);
    deleteuser(randomuser.id)
    deletsujet(randomsujet.id)
}


// delete users

function deleteuser  (id_user) {
    fetch('http://localhost:7000/users/' +id_user, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id_user
        })
    })
    .then(res => console.log(res))
}

//  delete sujet
function deletsujet (id) {
    fetch ('http://localhost:7000/sujet/' + id,{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id
        })
    })
    .then(res => console.log(res))
}

// function deleteuser(rand) {

//     let i;

//     let index = (boxlearners.indexOf(rand));

//     for (i = 0; i < boxlearners.length; i++) {
//         if (boxlearners[index] == boxlearners[i]) {
//             // console.log('index', boxlearners[index]);
//             // console.log('box', boxlearners[i]);
//             boxlearners.splice(index, 1);
//             res.push(boxlearners[index]);
//             console.log("t", res);
//             // console.log(boxlearners);
//         }
//     }
//     let student_create_p = document.createElement("p")
//     const node = document.createTextNode(rand)
//     student_create_p.appendChild(node)

//     document.getElementById("draw").append(student_create_p);
// }