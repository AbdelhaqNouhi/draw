
let boxlearners = [];
let boxsujet = [];
let random_users = [];
let random_sujet = [];


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
    const randomusers = boxlearners[Math.floor(Math.random() * boxlearners.length)];
    const randomsujet = boxsujet[Math.floor(Math.random() * boxsujet.length)];
    
    random_users.push(randomusers.name);
    random_sujet.push(randomsujet.name);

    read_random_users();
    read_random_sujet();

    deleteuser(randomusers.id);
    deletsujet(randomsujet.id);
    // document.getElementById("sujetrandom").innerHTML = randomsujet.name;
    // document.getElementById("userrandom").innerHTML = randomusers.name;

}

function read_random_users () {
    let i;

        // random_users.forEach(ele => {
        //     document.getElementById("userrandom").innerHTML = ele;
        // })

        for(i=0; i<random_users.length; i++) {
            document.getElementById("sujetrandom").innerHTML = random_users;
        }
    
    
}

function read_random_sujet () {
    let i;
        // random_sujet.forEach(ele => {
        //     document.getElementById("sujetrandom").innerHTML = ele;
        // })

        for(i=0; i<random_sujet.length; i++) {
            document.getElementById("userrandom").innerHTML = random_sujet;
        }

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

function deletsujet (id_sujet) {
    fetch ('http://localhost:7000/sujet/' + id_sujet,{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: id_sujet
        })
    })
    .then(res => console.log(res))
}