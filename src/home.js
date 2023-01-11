function createSidebar(){
    const side = document.createElement('div')
    side.classList.add('sidebar')

    // here we are creating a title for different projects
    const projects = document.createElement('h2')
    projects.textContent = "Projects"

    // here we are creating sample projects that will be usable for the user upon opening the website for the first time
    const projlists = document.createElement('ul')
    projlists.classList.add('task-lists')

    //the projects will be in the form of unordered lists
    // i will also be using a class called "active-list" to denote which projects' task to displa on the right
    const proj1 = document.createElement('li')
    proj1.classList.add('active-list')
    proj1.textContent = 'Sample 1'
    const proj2 = document.createElement('li')
    proj2.textContent = 'Sample 2'
    const proj3 = document.createElement('li')
    proj3.textContent = 'Sample 3'

    //adding the list-items to the actual list
    projlists.appendChild(proj1)
    projlists.appendChild(proj2)
    projlists.appendChild(proj3)

    //Here I will be adding a form to create new projects
    const projForm = document.createElement('form')
    projForm.action = ""
    //adding elements of the form
    const projInput = document.createElement('input')
    projInput.type = 'text'
    projInput.classList.add('newlist')
    projInput.placeholder = 'new list name'
    projInput.ariaLabel = 'new project name'
    //creating a button to submit the form
    const newProjBut = document.createElement('button')
    newProjBut.classList.add('btnlist')
    newProjBut.textContent = '+'
    newProjBut.ariaLabel = 'create new project'

    //now first adding the form elements
    projForm.appendChild(projInput)
    projForm.appendChild(newProjBut)

    //now appending the elements to the sidebar
    side.appendChild(projects)
    side.appendChild(projlists)
    side.appendChild(projForm)

    return side
}

function createCanvas(){
    const canvas = document.createElement('div')
    canvas.classList.add('todo-list')

    // the to-do section will contain of 3 parts - the project DataTransferItemList, tasks and options to clear or delete the tasks
    //header
    const todohead = document.createElement('div')
    todohead.classList.add('todohead')

    const todotit = document.createElement('h2')
    todotit.classList.add('list-titte')
    todotit.textContent = 'Sample 1'

    todohead.appendChild(todotit)
    canvas.appendChild(todohead)

    //the body
    const todobod = document.createElement('div')
    todobod.classList.add('todo-body')

    const tasks = document.createElement('div')
    tasks.classList.add('tasks')

    const task1 = document.createElement('div')
    task1.classList.add('task')
    const task2 = document.createElement('div')
    task2.classList.add('task')
    const task3 = document.createElement('div')
    task3.classList.add('task')

    const input1 = document.createElement('input')
    input1.type = 'checkbox'
    input1.id = 'task-1'

    const label_1 = document.createElement('label')
    label_1.textContent = "Make a to-do List Web App" 
    label_1.for = 'task-1'

    const input2 = document.createElement('input')
    input2.type = 'checkbox'
    input2.id = 'task-2'

    const label_2 = document.createElement('label')
    label_2.textContent = "Make a restaurant page" 
    label_2.for = 'task-2'

    const input3 = document.createElement('input')
    input3.type = 'checkbox'
    input3.id = 'task-3'

    const label_3 = document.createElement('label')
    label_3.textContent = "Make a sketching web app" 
    label_3.for = 'task-3'

    task1.appendChild(input1)
    task1.appendChild(label_1)
    task2.appendChild(input2)
    task2.appendChild(label_2)
    task3.appendChild(input3)
    task3.appendChild(label_3)

    tasks.appendChild(task1)
    tasks.appendChild(task2)
    tasks.appendChild(task3)

    todobod.appendChild(tasks)
    canvas.appendChild(todobod)

    //new task creator
    const taskcreate = document.createElement('div')
    const TaskForm = document.createElement('form')
    TaskForm.action = ""
    //adding elements of the form
    const taskInput = document.createElement('input')
    taskInput.type = 'text'
    taskInput.classList.add('newlist')
    taskInput.placeholder = 'new list name'
    taskInput.ariaLabel = 'new project name'
    //creating a button to submit the form
    const newtaskBut = document.createElement('button')
    newtaskBut.classList.add('btnlist')
    newtaskBut.textContent = '+'
    newtaskBut.ariaLabel = 'create new project'

    taskcreate.appendChild(TaskForm)
    TaskForm.appendChild(taskInput)
    TaskForm.appendChild(newtaskBut)
    canvas.appendChild(taskcreate)


    const deltodo = document.createElement('div')
    deltodo.classList.add('delete-stuff')
    const but1 = document.createElement('button')
    const but2 = document.createElement('button')
    but1.classList.add('delbut')
    but2.classList.add('delbut')
    but1.textContent = "Clear Completed Tasks"
    but2.textContent = "Delete List"

    deltodo.appendChild(but1)
    deltodo.appendChild(but2)
    canvas.appendChild(deltodo)

    return canvas
}

function loadbase(){
    const divele = document.getElementById('content')
    divele.appendChild(createSidebar())
    divele.appendChild(createCanvas())
}
export default loadbase