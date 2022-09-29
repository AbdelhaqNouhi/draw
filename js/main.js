
let box_users = [];
let box_sujet = [];
let random_users_list = [];
let random_sujet_list = [];

let d = new Date();
let nextDay = d.getDate()
let nexMonth = d.getMonth() + 1
let nextYear = d.getFullYear()
let date
let dayoff
let dayPosition = d.getDay();


// this function for add learners
function add_users () {
    
    const topic = document.getElementById('addtopic');
    const taketopic = topic.value;
    
    if (taketopic) {
        fetch('http://localhost:7000', {
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
function read_users () {
    fetch('http://localhost:7000/users')
    .then(res=> res.json())
    .then(data => {
        if (data) {
            data.forEach(ele => {
                box_users.push(ele);
                let users = document.createElement("p")
                const node_users = document.createTextNode(ele.name)
                users.appendChild(node_users)
                document.getElementById('userList').append(users)
            })
        }
    })
    // console.log('users',box_users);
}
read_users();




function add_sujet () {

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


function read_sujet () {
    fetch('http://localhost:7000/sujet')

        .then(res => res.json())
        .then(data => {
            if (data) {
                console.log(data);
                data.forEach(ele => {
                    box_sujet.push(ele);

                    let sujet = document.createElement("p")
                    const node_sujet = document.createTextNode(ele.name)
                    sujet.appendChild(node_sujet)
                    document.getElementById('sujetlist').append(sujet)
                })
            }
        })
        // console.log('sujet', box_sujet);
} 
read_sujet();



// this function for draw learners
function Randem() {
    const random_users = box_users[Math.floor(Math.random() * box_users.length)];
    const random_sujet = box_sujet[Math.floor(Math.random() * box_sujet.length)];
    
    random_users_list.push(random_users.name);
    random_sujet_list.push(random_sujet.name);

    
    deleteuser(random_users.id);
    deletesujet(random_sujet.id);

    read_random_users();
    read_random_sujet();
    Get_Date();
}

function read_random_users () {
    
    if(random_users_list) {
        random_users_list.forEach(ele => {
            
            let users = document.createElement("p")
            const node_users = document.createTextNode(ele)
            users.appendChild(node_users)
            document.getElementById('user_random').append(users)
            // document.getElementById("userrandom").innerHTML += ele;
        })
    }
}


function read_random_sujet () {

    if(random_sujet_list) {
        random_sujet_list.forEach(ele => {
            
            let sujet = document.createElement("p")
            const node_sujet = document.createTextNode(ele)
            sujet.appendChild(node_sujet)
            document.getElementById('sujet_random').append(sujet)
        })
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

function deletesujet (id_sujet) {
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

//  this function was be get date
function Get_Date () {
    nextDay++

    // skip weekend
    if (dayPosition < 7) {
        dayPosition++
        if (dayPosition == 7) {
            dayPosition = 0
        }
    }

    // 
    if (box_users.length - 1 >= 0) {
        if (dayPosition == 6) {
            dayoff = "dayoff"
            nextDay = nextDay + 2
            dayPosition = 1
        }
        
        if (nextDay > 31) {
            if (dayoff) {
                nextDay = 3
            }
            else {
                nextDay = 1
            }
            nexMonth++
        }
        if (nexMonth > 12) {
            nexMonth = 1
            nextYear++
        }
        // skip Public holidays
        if (((nextDay == 1 || nextDay == 11) && nexMonth == 1) ||
            (nextDay == 1 && nexMonth == 5) ||
            (nextDay == 30 && nexMonth == 7) ||
            ((nextDay == 14 || nextDay == 20 || nextDay == 21) && nexMonth == 8) ||
            ((nextDay == 6 || nextDay == 18) && nexMonth == 11)) {
            nextDay++
            dayPosition++
        }


        dayoff = false
    }
    date = nextDay + '/' + nexMonth + '/' + nextYear

    let date_create = document.createElement("p")
    const node_date = document.createTextNode(date)
    date_create.appendChild(node_date)
    document.getElementById('date').append(date_create)
}
