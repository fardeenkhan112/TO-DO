function add() {
  var Input = document.getElementById("task-input").value;
  if (Input === "") {
    alert("Please enter a task.");
    return;
  }
  var li = document.createElement("li");
  li.textContent = Input;
  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "x";
  deleteBtn.onclick = function() {  
  li.remove();}
  li.appendChild(deleteBtn);
  document.getElementById("task-list").appendChild(li);
  saveData();
  document.getElementById("task-input").value = "";
}
function toggleDark() {
document.body.classList.toggle("dark");}

function saveData() {
  var inputValue = document.getElementById("task-input").value;
  var todoData = JSON.parse(localStorage.getItem("todo")) || [];
  todoData.push(inputValue);
  localStorage.setItem("todo", JSON.stringify(todoData));
}