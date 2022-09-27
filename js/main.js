
let boxlearners = [];
let boxsujet = [];
let random_users = [];
let random_sujet = [];

let d = new Date();
let nextDay = d.getDate()
let nexMonth = d.getMonth() + 1
let nextYear = d.getFullYear()
let date
let dayoff
let dayPositionInTheWeek = d.getDay();


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
    Get_Date();

    deleteuser(randomusers.id);
    deletsujet(randomsujet.id);
    // document.getElementById("sujetrandom").innerHTML = randomsujet.name;
    // document.getElementById("userrandom").innerHTML = randomusers.name;
}

function read_random_users () {
    // let i;

        random_users.forEach(ele => {
            document.getElementById("userrandom").innerHTML += ele;
        })

        // for(i=0; i<random_users.length; i++) {
        //     document.getElementById("sujetrandom").innerHTML = random_users;
        // }
}

function read_random_sujet () {
    // let i;
        random_sujet.forEach(ele => {
            document.getElementById("sujetrandom").innerHTML += ele;
        })

        // for(i=0; i<random_sujet.length; i++) {
        //     document.getElementById("userrandom").innerHTML = random_sujet;
        // }

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

function Get_Date () {
    nextDay++
    // skip weekend
    if (dayPositionInTheWeek < 7) {
        dayPositionInTheWeek++
        if (dayPositionInTheWeek == 7) {
            dayPositionInTheWeek = 0
        }
    }

    if (boxlearners.length - 1 >= 0) {
        if (dayPositionInTheWeek == 6) {
            dayoff = "dayoff"
            nextDay = nextDay + 2
            dayPositionInTheWeek = 1
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
        // skip Public holidays in Morocco
        if (((nextDay == 1 || nextDay == 11) && nexMonth == 1) ||
            (nextDay == 1 && nexMonth == 5) ||
            (nextDay == 30 && nexMonth == 7) ||
            ((nextDay == 14 || nextDay == 20 || nextDay == 21) && nexMonth == 8) ||
            ((nextDay == 6 || nextDay == 18) && nexMonth == 11)) {
            nextDay++
            dayPositionInTheWeek++
        }


        dayoff = false
    }
    date = nextDay + '/' + nexMonth + '/' + nextYear

    let date_create_p = document.createElement("p")
    const node_date = document.createTextNode(date)
    date_create_p.appendChild(node_date)
    document.getElementById('date').append(date_create_p)
}
