
let boxUser=[];

function addlearners() {
    
    let i;
    let res = "";

    let learners = document.getElementById('add').value;
    if (learners) {
        boxUser.push(learners)
        console.log(boxUser);
        for (i = 0; i < boxUser.length; i++) {
            res += boxUser[i] +" </br>" ;
        }
    }
    else {
        console.log("???????????");
    }
    document.getElementById("userList").innerHTML = res;
}

function readelearners () {
    
}