const descriptionTitle = document.getElementById("job-title");
const descriptionTime = document.getElementById("job-time");
const descriptionTextOne = document.getElementById("description-p1");
const descriptionTextTwo = document.getElementById("description-p2");
const descriptionTextThree = document.getElementById("description-p3");
const btnJobs = document.querySelectorAll(".btn");

document.getElementById("way").addEventListener("click", () => {
  descriptionTitle.innerHTML =
    "Full-Stack Developer <a href=''>@ Way Digital Consulting</a>";
  descriptionTime.innerHTML = "SET 2021 - Present";

  descriptionTextOne.innerHTML =
    "<span>►</span>Write modern, high-performance, and maintainable code for a diverse range of internal and customer projects.";
  descriptionTextTwo.innerHTML =
    "<span>►</span>Working with a variety of different languages, platforms, frameworks and content management systems such as JavaScript, TypeScript, Vue, HTML5, CSS3, WordPress, Webflow and HubSpot.";
  descriptionTextThree.innerHTML =
    "<span>►</span>Communicate daily with multidisciplinary teams of engineers, designers, producers and customers.";

  btnJobs[0].classList.add("active");
  btnJobs[1].classList.remove("active");
  btnJobs[2].classList.remove("active");
});

document.getElementById("yorkie").addEventListener("click", () => {
  descriptionTitle.innerHTML =
    "Front-End Developer & UI/UX Designer <a href=''>@ WHITEYORKIE</a>";
  descriptionTime.innerHTML = "SET 2021 - Present";

  descriptionTextOne.innerHTML =
    "<span>►</span>Created modern and current brand identities, designs and UIs using tools like FIGMA.";
  descriptionTextTwo.innerHTML =
    "<span>►</span>Work with various web development tools such as HTML5, CSS3, Javascript (ES6+), Vue 3, React, .";
  descriptionTextThree.innerHTML =
    "<span>►</span>Developed control and management systems for internal data and for clients on Windows using C# and for the web as PWAs using Vue 3.";

  btnJobs[0].classList.remove("active");
  btnJobs[1].classList.add("active");
  btnJobs[2].classList.remove("active");
});

document.getElementById("unimes").addEventListener("click", () => {
  descriptionTitle.innerHTML =
    "Robotics & Programming Professor <a href=''>@ Universidade Metropolitana de Santos</a>";
  descriptionTime.innerHTML = "Feb 2020 - Nov 2021";

  descriptionTextOne.innerHTML =
    "<span>►</span>Teach beginner and intermediate level classes in programming logic, web programming with HTML5, CSS3 and Javascript, and robotics classes using C++ and C# with arduino.";
  descriptionTextTwo.innerHTML =
    "<span>►</span>Create didactic content for college, such as teaching materials and lesson plans on programming and robotics.";
  descriptionTextThree.innerHTML = "";

  btnJobs[0].classList.remove("active");
  btnJobs[1].classList.remove("active");
  btnJobs[2].classList.add("active");
});
