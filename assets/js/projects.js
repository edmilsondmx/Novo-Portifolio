const projectList = [
  {
    href: "https://github.com/edmilsondmx/Modulo01_Projeto02_DEVinHouse",
    imgSrc: "assets/images/projetos/tela_dashboard.jpg",
    title: "Projeto desenvolvido em Angular e JSON-Server",
    imgAlt: "Projeto 1",
    target: "_blank",
    class: "itam"
  },
  {
    href: "https://edmilsondmx.github.io/projeto-pagina-viagens/",
    imgSrc: "assets/images/projetos/2022-03-23.png",
    title: "Projeto desenvolvido em HTML, CSS e Bootstrap",
    imgAlt: "Projeto 2",
    target: "_blank",
    class: "itam"
  },
  {
    href: "https://github.com/edmilsondmx/DEVinHouse-Exercicios/tree/main/Modulo-01/Exercicios-Semana08",
    imgSrc: "assets/images/projetos/ngfood.png",
    title: "Projeto desenvolvido em Angular e JSON-Server",
    imgAlt: "Projeto 3",
    target: "_blank",
    class: "itam"
  },
  {
    href: "https://github.com/edmilsondmx/Modulo01_Projeto01_DEVinHouse",
    imgSrc: "assets/images/projetos/todolist.jpg",
    title: "Projeto desenvolvido em HTML, CSS e JS",
    imgAlt: "Projeto 4",
    target: "_blank",
    class: "itam"
  },
  {
    href: "https://edmilsondmx.github.io/tela-login/",
    imgSrc: "assets/images/projetos/login.png",
    title: "Projeto desenvolvido em HTML e CSS",
    imgAlt: "Projeto 5",
    target: "_blank",
    class: "itam"
  },
  {
    href: "https://github.com/edmilsondmx/Projeto_SolarEnergy",
    imgSrc: "assets/images/projetos/SolarEnergy.png",
    title: "Projeto desenvolvido em Angular, .Net Core e SQL Server",
    imgAlt: "Projeto 6",
    target: "_blank",
    class: "itam"
  },
  {
    href: "https://github.com/edmilsondmx/ProjetoSquad12---FCamara",
    imgSrc: "assets/images/projetos/robson.png",
    title: "Projeto desenvolvido em React, MongoDb",
    imgAlt: "Projeto 7",
    target: "_blank",
    class: "itam"
  },
  {
    href: "https://github.com/edmilsondmx/Projeto-DEVinCourses",
    imgSrc: "assets/images/projetos/ndd_training.png",
    title: "Projeto desenvolvido em Angular, .Net Core e SQL Server",
    imgAlt: "Projeto 8",
    target: "_blank",
    class: "itam"
  },
  {
    href: "https://projeto-blog-interface.vercel.app/",
    imgSrc: "assets/images/projetos/blog.png",
    title: "Projeto desenvolvido em React, Jest, Storybook e Axios",
    imgAlt: "Projeto 9",
    target: "_blank",
    class: "itam"
  },
  {
    href: "https://projeto-autoescola.vercel.app/",
    imgSrc: "assets/images/projetos/autoescola.png",
    title: "Projeto desenvolvido em React, Jest e Storybook",
    imgAlt: "Projeto 10",
    target: "_blank",
    class: "itam"
    },
  {
    href: "https://github.com/edmilsondmx/My_money_app",
    imgSrc: "assets/images/projetos/mymoney.png",
    title: "Projeto desenvolvido em React, NodeJS e MogoDb",
    imgAlt: "Projeto 11",
    target: "_blank",
    class: "itam"
  },
  {
    href: "https://github.com/edmilsondmx/projeto_cadastro_node_angular",
    imgSrc: "assets/images/projetos/meucadastro.png",
    title: "Projeto desenvolvido em Angular, NodeJS e OracleDb",
    imgAlt: "Projeto 12",
    target: "_blank",
    class: "itam"
  }
];

// Seleciona a div onde os elementos dos projetos serão adicionados
  const projectContainer = document.getElementById("t_slider");

  // Itera sobre a lista de projetos e cria elementos HTML correspondentes
  projectList.forEach((projectInfo) => {
    // Cria o elemento "a"
    const projectLink = document.createElement("a");
    projectLink.href = projectInfo.href;
    projectLink.target = projectInfo.target;
    projectLink.className = projectInfo.class;

    // Cria o elemento "img" dentro do "a"
    const projectImage = document.createElement("img");
    projectImage.src = projectInfo.imgSrc;
    projectImage.alt = projectInfo.imgAlt;

    // Cria o elemento "p" dentro do "a" com o título do projeto
    const projectTitle = document.createElement("p");
    projectTitle.textContent = projectInfo.title;

    // Adiciona a imagem e o título ao "a"
    projectLink.appendChild(projectImage);
    projectLink.appendChild(projectTitle);

    // Adiciona o "a" à div do slider
    projectContainer.appendChild(projectLink);
  });