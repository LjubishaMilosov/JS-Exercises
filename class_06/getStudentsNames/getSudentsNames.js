// Exerise: Get students names from user input (prompt) and render them in an unordered listdthsdth


function getStudents() {
    let students = [];

    let addMoreStudents = true;

    while(addMoreStudents){
        let studentname = prompt("Enter student's name (or Cancel to finish)")
        console.log(studentname);
        if(studentname === null){
            addMoreStudents =false;
            // break;
        } else if(studentname.trim() === ""){
            continue;
        } else {
            students.push(studentname);
        }
    }
    return students;
}

function renderStudents(students, container){
    // => best way is to build the string of the html and then just assign it to the container.innerHTML 
    let htmlContent = "<ul>";
   // container.innerHTML += "<ul>";
    // container.innerHTML = "<ul>" // => if we use it like this, the browser will generate a self-closing tag automatically, which will break our html structure
   
    for(const student of students){
        htmlContent += `<li>${student}</li>`
    }
    htmlContent += "</ul>";
    container.innerHTML = htmlContent;
}


//better way:
function renderStudentsUsingCreateElement(students, container){
    container.innerHTML = "";
    const ul = document.createElement("ul");

    for(const student of students){
        const li = document.createElement("li");
        li. textContent = student;
        ul.appendChild(li);
    }
    container.appendChild(ul);
}


let students = getStudents();
console.log(students);

let studentContainer = document.getElementById("students-container");

//renderStudents(students, studentContainer);
renderStudentsUsingCreateElement(students, studentContainer);
