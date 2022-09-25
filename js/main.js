
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
            // console.log(data);
            data.forEach(ele=>{
                boxlearners.push(ele.name);
            })
        }
        for (j = 0; j < boxlearners.length; j++) {
            t += boxlearners[j] + "</br>";
        }
        document.getElementById("userList").innerHTML = t;
    }
}



// this function for draw learners
function drawtopic() {
    const randomItem = boxlearners[Math.floor(Math.random() * boxlearners.length)];
    showdrawtopic(randomItem)
}


// delete learners
function showdrawtopic (rand) {

    let i;
    
    let index = (boxlearners.indexOf(rand));
    
    for (i=0; i<boxlearners.length; i++) {
        if (boxlearners[index] == boxlearners[i]) {
            // console.log('index', boxlearners[index]);
            // console.log('box', boxlearners[i]);
            boxlearners.splice(index, 1);
            res.push(boxlearners[index]) ;
            console.log("t", res);
            // console.log(boxlearners);
        }
    }
    
    let student_create_p = document.createElement("p")
    const node = document.createTextNode(rand)
    student_create_p.appendChild(node)
    
    document.getElementById("draw").append(student_create_p);
}