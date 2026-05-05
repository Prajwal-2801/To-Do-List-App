const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask(){

const taskText = taskInput.value;

if(taskText === ""){
alert("Please enter a task");
return;
}

const li = document.createElement("li");

li.innerHTML = `
<span>${taskText}</span>
<button class="delete">X</button>
`;

taskList.appendChild(li);

taskInput.value = "";

/* Mark completed */

li.querySelector("span").addEventListener("click", function(){
this.classList.toggle("completed");
});

/* Delete task */

li.querySelector(".delete").addEventListener("click", function(){
li.remove();
});

}
