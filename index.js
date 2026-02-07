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
  li.onclick = function () {
  li.classList.toggle("completed");
  saveTasks();};
  document.getElementById("task-list").appendChild(li);
  document.getElementById("task-input").value = "";
}
function toggleDark() {
document.body.classList.toggle("dark");}