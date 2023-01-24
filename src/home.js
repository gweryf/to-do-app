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

    //Here I will be adding a form to create new projects
    const projForm = document.createElement('form')
    projForm.action = ""
    projForm.setAttribute('data-new-list-form','')
    projForm.classList.add('sidebarForm')
    //adding elements of the form
    const projInput = document.createElement('input')
    projInput.type = 'text'
    projInput.setAttribute('data-new-list-input','')
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
    TaskForm.setAttribute('data-new-task-form','')
    //adding elements of the form
    const taskInput = document.createElement('input')
    taskInput.type = 'text'
    taskInput.setAttribute('data-new-task-input','')
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
    but2.classList.add('delprojbut')
    but1.textContent = "Clear Completed Tasks"
    but2.textContent = "Delete Project"

    deltodo.appendChild(but1)
    deltodo.appendChild(but2)
    canvas.appendChild(deltodo)

    return canvas
}

function loadbase(){
    const divele = document.getElementById('content')
    divele.appendChild(createSidebar())
    divele.appendChild(createCanvas())

    //here lies the main logic for the website
    const containerList = document.querySelector('.task-lists')
    const newProjectForm = document.querySelector('[data-new-list-form]')
    const newProjectInput = document.querySelector('[data-new-list-input]')
    const delProjectButton = document.querySelector('.delprojbut')
    const projectDisplayContainer = document.querySelector('.todo-list')
    const projectTitle = document.querySelector('.list-titte')
    const tasksContainer = document.querySelector('.tasks')
    const taskTemplate = document.getElementById('task-template')
    const newTaskForm = document.querySelector('[data-new-task-form]')
    const newTaskInput = document.querySelector('[data-new-task-input]')
    const clearCompleteTaskBut = document.querySelector('.delbut')

    //local storage keys
    const LOCAL_STORAGE_PROJECT_KEY = 'task.projects'
    const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'task.selectedProjectId'
    //creating a list to store projects
    let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || []
    let selectedProjectID = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY)

    clearCompleteTaskBut.addEventListener('click',e => {
        const selectedProject = lists.find(list => list.id === selectedProjectID)
        selectedProject.tasks = selectedProject.tasks.filter(task=>!task.complete)
        save()
        render()
    })

    newProjectForm.addEventListener('submit',e => {
        e.preventDefault()
        const listName = newProjectInput.value
        if(listName == null||listName ==='') return
        const list = createProject(listName)
        newProjectInput.value = null
        lists.push(list)
        save()
        render()
    })

    newTaskForm.addEventListener('submit',e => {
        e.preventDefault()
        const taskName = newTaskInput.value
        if(taskName == null||taskName ==='') return
        const task = createTask(taskName)
        newTaskInput.value = null
        const selectedProject = lists.find(list=>list.id===selectedProjectID)
        selectedProject.tasks.push(task)
        save()
        render()
    })

    function createTask(name){
        return {id: Date.now().toString(), name: name, complete: false}
    }

    tasksContainer.addEventListener('click',e=>{
        if(e.target.tagName.toLowerCase()==='input') {
            const selectedProject = lists.find(list => list.id === selectedProjectID)
            const selectedTask = selectedProject.tasks.find(task=>task.id === e.target.id)
            selectedTask.complete = e.target.checked
            save()
        }
    })

    delProjectButton.addEventListener('click', e=>{
        lists = lists.filter(list => list.id !== selectedProjectID)
        selectedProjectID = null
        console.log('oklol');
        save()
        render()
    })

    function createProject(name){
        return {id: Date.now().toString(), name: name, tasks:[]}
    }

    containerList.addEventListener('click',e=>{
        if (e.target.tagName.toLowerCase()==='li') {
            selectedProjectID = e.target.dataset.listId 
            save()
            render()
        }
    })

    function render() {
        clearElement(containerList)
        renderProject()
        const selectedProject = lists.find(list => list.id === selectedProjectID)
        if (selectedProjectID == null){
            projectDisplayContainer.style.display = 'none'
        } else {
            projectDisplayContainer.style.display = ''
            projectTitle.innerText = selectedProject.name
            clearElement(tasksContainer)
            renderTasks(selectedProject)
        }
    }

    function renderTasks(selectedProject){
        selectedProject.tasks.forEach(task => {
            const taskElement = document.importNode(taskTemplate.content, true)
            const checkbox = taskElement.querySelector('input')
            checkbox.id = task.id
            checkbox.checked = task.complete  
            const label = taskElement.querySelector('label')
            label.htmlFor = task.id
            label.append(task.name)
            tasksContainer.appendChild(taskElement)
        })
    }

    function renderProject() {
        lists.forEach(list => {
            const listItem = document.createElement('li')
            listItem.classList.add('list-name')
            listItem.dataset.listId = list.id
            listItem.innerText = list.name
            if (list.id === selectedProjectID) listItem.classList.add('active-project')
            containerList.appendChild(listItem)
        });
    }

    function save(){
        localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY,JSON.stringify(lists))
        localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectID)
    }

    function clearElement(element){
        while(element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }

    render()
    
}

export default loadbase