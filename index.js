
    const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];


function main() {

     const root = document.querySelector("#root");

     // create h1 tag
    const h1 = document.createElement("h1");
    h1.innerText = "FREELANCERS";
    root.appendChild(h1);

    // create parent ul tag    
    const ul = document.createElement("ul");
    
    for (let i = 0; i < users.length; i++) { // loop through users object
    const li = document.createElement("li")
        li.innerHTML= users[i].name; //print the user name to the webpage, can change to agewiht(.age) or occupation(.occupation)
        ul.appendChild(li) 
    }
     root.appendChild(ul)


 }

//call the main function
main();
