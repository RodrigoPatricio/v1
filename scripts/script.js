const companyBtns = document.querySelectorAll(".exp-btn");
const companyTitle = document.querySelector(".experience-title");
const companyName = document.querySelector(".company-title");
const companyTime = document.querySelector(".time-stamp");
const companyDesc = document.querySelectorAll(".description");
const menu = document.querySelector("ul.mobile");
const mobileNavLinks = document.querySelectorAll("ul.mobile a");

companyBtns[0].addEventListener("click", () => {
  companyBtns[0].classList.add("active");
  companyBtns[1].classList.remove("active");
  companyBtns[2].classList.remove("active");
  companyBtns[3].classList.remove("active");

  companyTitle.innerHTML = "Full-Stack Developer & SEO Specialist";
  companyName.innerHTML = "<span>@ Way Digital Consulting</span>";
  companyTime.innerHTML = "Set 2021 - Presente";

  companyDesc[0].innerHTML = "Escrever código moderno, de alto desempenho e de fácil manutenção para um gama diversificada de projetos internos e de clientes.";
  companyDesc[1].innerHTML = "Liderar o departamento de tecnologia e desenvolvimento em vários cases de marketing avaliando as necessidades de clientes únicos, identificando, diagnóstico e resolução de problemas técnicos.";
  companyDesc[2].innerHTML = "Comunicar-se diariamente com equipes multidisciplinares de engenheiros, designers, gerentes e clientes.";
});

companyBtns[1].addEventListener("click", () => {
  companyBtns[0].classList.remove("active");
  companyBtns[1].classList.add("active");
  companyBtns[2].classList.remove("active");
  companyBtns[3].classList.remove("active");

  companyTitle.innerHTML = "Full-Stack Developer & UI/UX Designer";
  companyName.innerHTML = "<span>@ WHITEYORKIE</span>";
  companyTime.innerHTML = "Set 2021 - Presente";

  companyDesc[0].innerHTML = "Projetar e desenvolver interfaces de usuário modernas com foco na experiência do usuário usando tecnologia de front-end de conceitos criativos de design de software.";
  companyDesc[1].innerHTML = "Liderar a equipe de desenvolvimento, conduzir o produto por todas as etapas do processo de desenvolvimento, cuidar da logística, supervisionar prazos e garantir a qualidade por meio do processo de codificação.";
  companyDesc[2].innerHTML = "Desenvolver sistemas de controle e gerenciamento para dados internos e para clientes no Windows usando C# e PWAs para dispositivos móveis usando Vue 3.";
});

companyBtns[2].addEventListener("click", () => {
  companyBtns[0].classList.remove("active");
  companyBtns[1].classList.remove("active");
  companyBtns[2].classList.add("active");
  companyBtns[3].classList.remove("active");

  companyTitle.innerHTML = "Front-End Developer & UI/UX Designer";
  companyName.innerHTML = "<span>@ DUOSTUDIO</span>";
  companyTime.innerHTML = "Ago 2020 - Ago 2021";

  companyDesc[0].innerHTML = "Trabalhar com uma equipe diversificada de designers para criar produtos acessíveis e centrados na experiência do usuário para diferentes clientes.";
  companyDesc[1].innerHTML = "Aprender diferentes ferramentas de wireframe e prototipagem para criar designs estéticos que aprimoram a experiência do usuário.";
  companyDesc[2].innerHTML = "Gerir e coletar dados de aplicativos e teste os resultados para aumentar o envolvimento do usuário, aumentar as taxas de conversão e criar conteúdo com eficácia.";
});
companyBtns[3].addEventListener("click", () => {
  companyBtns[0].classList.remove("active");
  companyBtns[1].classList.remove("active");
  companyBtns[2].classList.remove("active");
  companyBtns[3].classList.add("active");

  companyTitle.innerHTML = "Programming & Robotics Professor ";
  companyName.innerHTML = "<span>@ Universidade Metropolitana de Santos</span>";
  companyTime.innerHTML = "Fev 2020 - Ago 2021";

  companyDesc[0].innerHTML = "Ministrar aulas de robótica nível iniciante e intermediário utilizando C++ e C# com arduino.";
  companyDesc[1].innerHTML = "Criar conteúdos didáticos para a faculdade, como materiais didáticos e planos de aula sobre programação e robótica.";
  companyDesc[2].innerHTML = "Ministrar aulas de programação em inglês para alunos de nível intermediário e avançado.";
});

//#region mobile nav menu
document.getElementsByClassName("mobile-nav")[0].addEventListener("click", () => {
    menu.style.display == "flex" ? (menu.style.display = "none") : (menu.style.display = "flex");
  });

  mobileNavLinks.forEach(Element => {
    Element.addEventListener('click', () => {
      menu.style.display = 'none'
    })
  });
//#endregion
