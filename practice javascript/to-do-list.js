const inputField = document.getElementById("new-task-input");
const buttonTask = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
buttonTask.addEventListener("click", () => {
  const taskContent = inputField.value.trim();
  if (taskContent === "") {
   // alert("Please enter a task");
    return;
  }
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const span = document.createElement("span");
  span.textContent = taskContent;
  
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "&#10060";
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);
  inputField.value = "";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "black";
    }
  });
  deleteButton.addEventListener("click", () => {
    li.remove();
  });
});

const tasksremaining = document.getElementById("tasks-remaining");
function updateTasksRemaining() {
  const totalTasks = taskList.children.length;
  const completedTasks = taskList.querySelectorAll("input[type='checkbox']:checked").length;
  const remainingTasks = totalTasks - completedTasks;
  tasksremaining.textContent = `Tasks Remaining: ${remainingTasks}`;
}
taskList.addEventListener("change", updateTasksRemaining);
taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    updateTasksRemaining();
  }
});

const taskscompleted = document.getElementById("tasks-completed");
function updateTasksCompleted() {
  const completedTasks = taskList.querySelectorAll("input[type='checkbox']:checked").length;
  taskscompleted.textContent = `Tasks Completed: ${completedTasks}`;
}
taskList.addEventListener("change", updateTasksCompleted);
taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    updateTasksCompleted();
  }
});


