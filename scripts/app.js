const elements = () => {
    const root = document.querySelector(':root')
    const body = document.querySelector('body')
    const lightbulb = document.getElementById('lightbulb')
    const aboutMePara = document.getElementById('aboutMePara1')
    const aboutMePara2 = document.querySelectorAll('.aboutMePara2')
    const projectsTitle = document.getElementById('projectsTitle')
    const projectPara = document.querySelectorAll('.projectPara')
    const projectName = document.querySelectorAll('.projectName')

    return { root, body, lightbulb, aboutMePara, aboutMePara2, projectsTitle, projectPara, projectName }
}

const element = elements()

const darkMode = () => {
    if (document.body.style.backgroundColor !== 'var(--even-darker-text)') {
        element.lightbulb.src = './images/moon.svg'
        element.body.style.backgroundColor = 'var(--even-darker-text)'
        element.aboutMePara.style.color = 'white'
        element.aboutMePara2.forEach((para) => {
            para.style.color = 'white'
        })
        element.projectsTitle.style.color = 'white'
        element.projectPara.forEach((para) => {
            para.style.color = 'white'
        })
        element.projectName.forEach((name) => {
            name.style.color = 'white'
        }) 
    } else {
        element.body.style.backgroundColor === 'var(--even-darker-text)' 
        element.lightbulb.src = './images/lightbulb.svg'
        element.body.style.backgroundColor = 'var(--light-text)'
        element.aboutMePara.style.color = 'var(--darker-text'
        element.aboutMePara2.forEach((para) => {
            para.style.color = 'var(--darker-text'
        })
        element.projectsTitle.style.color = 'var(--darker-text'
        element.projectPara.forEach((para) => {
            para.style.color = 'var(--darker-text'
        })
            element.projectName.forEach((name) => {
                name.style.color = 'var(--darker-text'
        })
    }
}

element.lightbulb.addEventListener('click', darkMode)