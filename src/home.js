function createSidebar(){
    const side = document.createElement('div')
    side.classList.add('sidebar')

    const projects = document.createElement('div')
    projects.textContent = "Projects"
    side.appendChild(projects)

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