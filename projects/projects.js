const url2 =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

//HEADER BURGUER
const button = document.querySelector("#burger");
const menu = document.querySelector("#overlay");
const buttonProjects = document.querySelector("#overlay-link-projects");
const buttonServices = document.querySelector("#overlay-link-services");

button.addEventListener("click", () => {
  button.classList.toggle("burger-active");
  menu.classList.toggle("overlay-active");
});

//Variables de HTML
const projSection = document.querySelector("#p-proj-section");
const projSection2 = document.querySelector("#p-other-proj-section");
const divForCards = projSection2.querySelector(".external-div");
const projCtaSec = document.querySelector("#p-cta-section");

//OPCIÓN 1 (THEN)

window.onload = function () {
  fetch(url2)
    .then((result) => {
      result.json().then((data) => {
        
        const params = new URLSearchParams(window.location.search);

        const pageNum = params.get("uuid");
        let indexp;
        
        if (pageNum !== null) {
          console.log("entro en diferente a null");
          indexp = data.findIndex((object) => {
            return object.uuid === pageNum;
          });
          if (indexp === -1 ) {
            window.location.replace("../error/error.html"); 
          }
          
        } else {
          window.location.replace("../error/error.html");
        }

        const pageId = data[indexp].uuid;

        //SECTION 1
        //Title area

        const h1 = projSection.querySelector("h1");
        h1.innerHTML = data[indexp].name;
        const p1 = projSection.querySelector("#p-under-h1");
        p1.innerHTML = data[indexp].description;
        const p2 = projSection.querySelector("#p-date");
        p2.innerHTML =
          "<span>Completed on: </span>" + data[indexp].completed_on;

        //Middle area
        const image1 = projSection.querySelector("img");
        image1.src = data[indexp].image;
        const parag = projSection.querySelector("#p-main-p");
        parag.innerHTML = data[indexp].content;

        //SECTION2 - Other projects
        const h2Other = projSection2.querySelector("h2");
        h2Other.innerHTML = "Other Projects";

        const otherProjArr = getArrayOfThree(data);
        console.log(otherProjArr);
        getOtherProjects(otherProjArr);

        // ZONA DE DECLARACIÓN DE FUNCIONES //

        function getOtherProjects(array) {
          array.forEach((element) => {
            const divInd = document.createElement("div");
            divInd.className = "internalDiv";
            divForCards.appendChild(divInd);
            const imagecard1 = document.createElement("img");
            imagecard1.className = "p-card-img";
            imagecard1.src = element.image;
            imagecard1.alt = `element ${element.uuid} image`
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
          const dataFiltered = array.filter((article) => {
            return article.uuid !== pageId;
          });
          dataFiltered.sort((a, b) => {
            if (a.uuid < b.uuid) return 0.5 - Math.random();
            if (a.uuid > b.uuid) return 0.5 - Math.random();
            if (a.uuid === b.uuid) return 0.5 - Math.random();
            
          });
          const dataOnlyThree = dataFiltered.slice(0, 3);
          return dataOnlyThree;
        }

        
      });
    })
    .catch((err) => console.log("error!"));
};
