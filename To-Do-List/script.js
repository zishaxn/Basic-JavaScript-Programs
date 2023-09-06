// Last Step: Modularizing our code --> to create a block scope for our code.
//IIFE Module design pattern




(function () {
let tasks = [];  // this will be the array to store the task(object)
const addTaskInput = document.getElementById('add');  //this variable will hold the input element
let tasksCounter = document.getElementById('task-counter'); // taskCounter
const taskslist = document.getElementById('list');               //

    var a = 10


initializeToDo();   

async function fetchTodos() {
    // GET request
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then(function (data) {
            // console.log(data);
            tasks = data.slice(0, 10);
            renderTaskList();
        })
        .catch(function (error) {
            console.error('Error fetching todos:', error);
        });

    // try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    //     const data = await response.json();
    //     tasks = data.slice(0, 10);
    //     renderTaskList();
    // }
    // catch (error) { 
    //     console.error(error);
    // }
}


// it will take an object as input and add it to the task array
function addTask(task) {
    if (task) {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            tasks = data.slice(0, 10);
            renderTaskList();
        })
        .catch(function (error) {
            console.error('Error fetching todos:', error);
        });

        tasks.push(task);
        updateTasksCounter();
        renderTaskList();
        showNotification('Task Added Successfully');
        return;
    }
    showNotification('Task Could not be added');
}

// delete the task for a given task id
function deleteTask(taskId) {
    const newTask = tasks.filter((task) => {
        return task.id != taskId;
    });
    tasks = newTask;
    // taskCount--;
    updateTasksCounter();
    renderTaskList();
    showNotification('Task Deleted Successfully');
}

function updateTasksCounter() {
    let taskCount = tasks.length;
    tasksCounter.innerHTML = taskCount;
}

// marking task as done
function markTaskComplete(taskId) {
    const foundTask = tasks.filter(function (task) {
        return task.id == taskId;
    });

    if (foundTask.length>0) {
        let currTask = foundTask[0];
        currTask.completed = !currTask.completed;
        renderTaskList();
        showNotification('Task Completed');
        return;
    } else {
        console.log('Could not mark as Complete');
    }
}

function showNotification(text) {
    alert(text);
}

// this will display all the task in an orderly fashion one below other
function renderTaskList() {
    taskslist.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
            addTaskToDom(tasks[i]);
    }
    updateTasksCounter();
}

function addTaskToDom(task) {
    const li = document.createElement('li');
    
    li.innerHTML = `
            <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : '' } class="custom-checkbox">
            <label for="${task.id}">${task.title}</label>
            <img src="icon.png" class="delete" data-id="${task.id}" />
    `;
    taskslist.prepend(li);
}

//this will take inputs from user and will be called on event trigger(when user press Enter).
function handleTaskInput(event) {

    // checking if user clicked enter, indicating user has done typing task 
    if (event.key === 'Enter') { 

        const text = event.target.value; // storing the input data(task)

        // making sure if there is an actual data(task) and input is not blank,
        if (!text) { 
            showNotification('Task Can not Be Empty!!');
            return;
        }

        // at this point we are sure that user has entered some data and we are creating an object to store that data
        const task = {
            title: text,
            id: Date.now().toString(),
            completed: false
        }
        
        event.target.value = "";  // clearing input box
        addTask(task);
    }
}


function handleClickEvents(event) {
    const target = event.target;
    // console.log(target);
    if (target.className === 'delete') {
        const taskId = target.dataset.id;
        deleteTask(taskId);
    } else if (target.className === 'custom-checkbox') { 
        const taskId = target.id;
        // console.log(taskId);
        markTaskComplete(taskId);
        return
    }
}

// it initializes the to do list, basically a container for event listeners
function initializeToDo() {
    fetchTodos();
    // event that will be triggred when user starts typing.
    addTaskInput.addEventListener('keypress', handleTaskInput);

    // event listener on whole document, so that we can target desired elements without writing multiple event listener
    document.addEventListener('click', handleClickEvents)
}
})()





