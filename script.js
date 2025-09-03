function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.onclick = () => li.classList.toggle('completed');
    li.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => li.remove();
    li.appendChild(deleteBtn);

    document.getElementById('taskList').appendChild(li);
    input.value = '';
}

// Load from local storage (expand this later)
