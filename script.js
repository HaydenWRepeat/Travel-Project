class User {
    constructor(firstName, lastName, id, DoB, departing, arriving, leaveDate, returnDate, bags, meal, extras) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.DoB = DoB;
        this.departing = departing;
        this.arriving = arriving;
        this.leaveDate = leaveDate;
        this.returnDate = returnDate;
        this.bags = bags;
        this.meal = meal;
        this.extras = extras;
    }
    age() {
        let DoB = new Date(this.DoB);
        let age = Date.now() - DoB.getTime();
        age = Math.floor(age / (1000 * 60 * 60 * 24 * 365));
        return age;
    }
    tripDuration() {
        let leaveDate = new Date(this.leaveDate);
        let returnDate = new Date(this.returnDate);
        let duration = returnDate.getTime() - leaveDate.getTime();
        duration = Math.floor(duration / (1000 * 60 * 60 * 24));
        return duration;
    }
    cost() {
        let totalcost = this.bags * 20;
        totalcost += checkboxes().split(", ").length * 10 + 300;
        return totalcost;
    }
}




let userList = [];
let userId = 101;

function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let id = userId;
    let DoB = document.getElementById("DoB").value;
    let departing = document.getElementById("departing").value;
    let arriving = document.getElementById("arriving").value;
    let leaveDate = document.getElementById("leaveDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let bags = document.getElementById("bags").value;
    let meal = radio();
    let extras = checkboxes();
    if (firstName != "" && lastName != "") {
        let user = new User(firstName, lastName, id, DoB, departing, arriving, leaveDate, returnDate, bags, meal, extras);
        userId++;
        userList.push(user);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
    }
}


function radio() {
    let elements = document.getElementsByName("meal");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            return elements[i].value;
        }
    }
}

function checkboxes() {
    let elements = document.getElementsByName("extra");
    let extra = [];
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            extra.push(elements[i].value)
        }
    }
    return extra.join(", ");
}


function print() {
    printSpace = document.getElementById("names");

    printSpace.innerHTML = "";
    for (let i = 0; i < userList.length; i++) {
        printSpace.innerHTML += `<div>${userList[i].id} ${userList[i].firstName} ${userList[i].lastName}</div>`
    }
}

function search() {
    let name = document.getElementById("search").value;
    name = name.split(" ");
    for (let i = 0; i < userList.length; i++) {
        if (name[0] == userList[i].firstName && name[1] == userList[i].lastName) {
            document.getElementById("outfirstName").value = userList[i].firstName;
            document.getElementById("outlastName").value = userList[i].lastName;
            document.getElementById("outDoB").value = userList[i].DoB;
            document.getElementById("outbags").value = userList[i].bags;
            document.getElementById("outdeparting").value = userList[i].departing;
            document.getElementById("outarriving").value = userList[i].arriving;
            document.getElementById("outleaveDate").value = userList[i].leaveDate;
            document.getElementById("outreturnDate").value = userList[i].returnDate;
            document.getElementById("outmeal").value = userList[i].meal;
            document.getElementById("outage").textContent = userList[i].age();
            document.getElementById("outextras").value = userList[i].extras;
            document.getElementById("outdurration").textContent = userList[i].tripDuration();
            document.getElementById("outcost").textContent = userList[i].cost();
        }
    }
}
