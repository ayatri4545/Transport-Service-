document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span><button>Delete</button>`;
        taskList.appendChild(li);

        newTaskInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    });
});
document.getElementById('location-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    document.getElementById('display-location').innerText = `Your location is: ${location}`;
});

document.getElementById('location-form1').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    document.getElementById('display-location1').innerText = `Your location is: ${location}`;
});
