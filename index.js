const button = document.querySelector("#burger");
const menu = document.querySelector("#overlay");
const buttonProjects = document.querySelector("#overlay-link-projects");
const buttonServices = document.querySelector("#overlay-link-services");

button.addEventListener("click", () => {
    button.classList.toggle('burger-active');
    menu.classList.toggle('overlay-active');
});
buttonProjects.addEventListener("click", () => {
    button.classList.toggle('burger-active');
    menu.classList.toggle('overlay-active');
});

buttonServices.addEventListener("click", () => {
    button.classList.toggle('burger-active');
    menu.classList.toggle('overlay-active');
});

const url2 =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

  const recentSection = document.querySelector('#section-recent')
const divForCards = recentSection.querySelector(".external-div");

window.onload = function () {
  fetch(url2)
    .then((result) => {
      result.json().then((data) => {
        //console.log("segundo then")
        console.log(data);

        //Recent pprojects

        const recentProjArr = getArrayOfThree(data);
        console.log(recentProjArr);
        printRecentProjects(recentProjArr);

        // ZONA DE DECLARACIÓN DE FUNCIONES //

        function printRecentProjects(array) {
          array.forEach((element) => {
            
            const divInd = document.createElement("div");
            divInd.className = "internalDiv";
            divForCards.appendChild(divInd);
            const imagecard1 = document.createElement("img");
            imagecard1.className = "p-card-img";
            imagecard1.src = element.image;
            divInd.appendChild(imagecard1);

            const h4 = document.createElement("h4");
            divInd.appendChild(h4);
            h4.innerHTML = element.name;

            const pcard1 = document.createElement("p");
            divInd.appendChild(pcard1);
            pcard1.innerHTML = element.description;

            const acard1 = document.createElement("a");
            divInd.appendChild(acard1);
            acard1.innerHTML = "Learn More";
            acard1.href = `./projects.html?uuid=${element.uuid}`;
          });
        }

        function getArrayOfThree(array) {
          array.sort((a, b) => {
            if (a.uuid < b.uuid) return -1;
            if (a.uuid > b.uuid) return 1;
            if (a.uuid === b.uuid) return 0;
          });
          const dataOnlyThree = array.slice(0, 3);
          return dataOnlyThree;
        }
      });
    })
    .catch((err) => console.log("error!"));
};
