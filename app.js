const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");
const count = document.querySelector("#task-count");

function updateCount() {
  const remaining = list.querySelectorAll("input:not(:checked)").length;
  count.textContent = `${remaining} task${remaining === 1 ? "" : "s"} remaining`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = input.value.trim();
  if (!task) return;

  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const text = document.createElement("span");

  checkbox.type = "checkbox";
  checkbox.addEventListener("change", updateCount);
  text.textContent = task;
  label.append(checkbox, text);
  item.append(label);
  list.append(item);

  form.reset();
  input.focus();
  updateCount();
});
