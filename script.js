const articlesList = [
    {
        title: 'eCommerce App',
        imgSrc: './assets/ecomerce.png',
        description: 'Made from scratch, powered by Angular 16, excels in efficiency. It harnesses the FakestoreAPI for dynamic data, implements lazy loading for swift content delivery, and SweetAlert 2 adds its touch.',
        frontCode: 'https://github.com/AMNdev/eCommerce-Angular',
        deploy: 'https://ecommerce-amndev.netlify.app'
    }
    ,
    {
        title: "Game of the Year",
        imgSrc: "./assets/Goty.jpg",
        description: "Real time voting app using Angular, Firebase hosting and cloud functions, Node, Express.",
        deploy: "https://firestore-grafica-8f7c4.web.app/inicio",
        courseLink: "https://www.udemy.com/course/angular-avanzado-fernando-herrera/",
    }
    ,
    {
        title: "AdminPro",
        imgSrc: "./assets/Adminpro.png",
        description: "Hospital App with MEAN stack, routes, lazy load, authentication... ",
        courseLink: "https://www.udemy.com/course/angular-avanzado-fernando-herrera/",
        frontCode: "https://github.com/AMNdev/angular-adv-adminpro",
        backCode: "https://github.com/AMNdev/admin-pro-backend"
    },
    {
        title: "Clients Control",
        imgSrc: "./assets/ControlClientes.png",
        description: "Simple control app with Cloud Firestore, Bootstrap, jQuery, authentication, guards... ",
        courseLink: "https://www.udemy.com/course/angular-de-cero-a-experto-angular-2-framework-javascript-html-css/",
        deploy: "https://control-clientes-2f53d.web.app/"
    },
    {
        title: "Tasks App",
        imgSrc: "./assets/Tareas.jpg",
        description: "Simple tasks manager with HTML, CSS and JavaScript. Using Webpack, LocalStorage, SessionStorage. Project from this course",
        courseLink: "https://www.udemy.com/course/javascript-fernando-herrera/",
        frontCode: "https://github.com/AMNdev/tareas-js",
        deploy: "https://amndev.github.io/tareas-js/"
    }

]

const works = document.querySelector('.works')
articlesList.forEach(article => {
    const newArticle = document.createElement('article')
    newArticle.classList = 'article';
    const newArticleHTML = `
          <img class="img" src="${article.imgSrc}" alt="${article.title}">
          <h4 class="h4">${article.title}</h4>
    `
    newArticle.innerHTML = newArticleHTML
    works.append(newArticle)
})

let articles = document.querySelectorAll('.article')
articles.forEach((article) => {
    article.addEventListener('click', () => {
        const searchTitle = article.querySelector('.h4').innerHTML
        const project = articlesList.find(element => element.title === searchTitle)
        showModal(project)
    })
})

function showModal(project) {
    const { title, imgSrc, description, frontCode, backCode, courseLink, deploy } = project;

    const modal = document.querySelector('#myModal');
    modal.classList.add('visible');
    const modalContent = document.createElement('div')
    modalContent.className = 'modal-content'
    modalContent.innerHTML = `
    <img src="${imgSrc}" alt="${title}" class="img">
    <h4 id="modal-title">${title}</h4>
    <p id="description">
    ${description}
    </p>
    <div class="modal-links">
    ${frontCode ? `<a id="modal-github" href="${frontCode}" target="_blank">Code<i class="bi bi-box-arrow-up-right"></i></a>` : ''}
    
    ${backCode ? `<a id="modal-github" href="${backCode}" target="_blank">Backend<i class="bi bi-box-arrow-up-right"></i></a>` : ''}
    
    ${deploy ? `<a id="modal-deploy" href="${deploy}" target="_blank">Deployment <i
        class="bi bi-box-arrow-up-right"></i></a>` : ''}
        
    ${courseLink ? `<a id="modal-github" href="${courseLink}" target="_blank">Course<i class="bi bi-box-arrow-up-right"></i></a>` : ''}
        
    </div>
        `
    modal.appendChild(modalContent)

    // Disable background scroll
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
}

const closeModal = document.querySelector('#closeModal')
closeModal.addEventListener('click', () => {
    const modal = document.querySelector('#myModal')
    modal.classList.remove('visible')
    const modalContent = modal.querySelector('.modal-content');
    modalContent.remove()
    // Enable scroll
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
})
