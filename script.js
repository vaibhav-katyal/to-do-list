const inputBox = document.querySelector(".bar input")
const taskContainer = document.querySelector(".taskList")
const addBtn = document.querySelector(".bar button")
const taskComplete = document.querySelector("ul li")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li)

        let cross = document.createElement("span")
        cross.innerHTML = "\u00d7"
        li.appendChild(cross)
    }
    inputBox.value = "";
    saveData();
}


addBtn.addEventListener("click", ()=>{
    addTask()
})


inputBox.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        addBtn.click();
    }
})

taskContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})     // event listeners doesn't get saved so we can't make it in function

function saveData(){
    localStorage.setItem("data", taskContainer.innerHTML)
}

function showData(){
    taskContainer.innerHTML = localStorage.getItem("data");
}

showData();