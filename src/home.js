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
    canvas.classList.add('canvas')

    const createTaskbut = document.createElement('button')
    createTaskbut.classList.add('createTaskbut')
    createTaskbut.textContent = '+ Add Task'

    canvas.appendChild(createTaskbut)
    return canvas
}

function loadbase(){
    const divele = document.getElementById('content')
    divele.appendChild(createSidebar())
    divele.appendChild(createCanvas())
}
export default loadbase