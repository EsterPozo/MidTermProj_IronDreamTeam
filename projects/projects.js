const url2 =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

//Coger el parametro uuid del url



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
        //console.log("segundo then")
        console.log(data);
        const params = new URLSearchParams(window.location.search);

const pageNum= params.get("uuid");
console.log(pageNum);
        let indexp = 4;
        if (pageNum !== null) {
          console.log('entro en diferente a null')
          indexp = data.findIndex(object => {
            return object.uuid === pageNum;
          })
        
        }


        /* const indexp = data.findIndex(object => {
          return object.uuid === pageNum;
        })  */
        console.log(indexp);
        const pageId = data[indexp].uuid;
       console.log(pageId);
      

        //SECTION 1
        //Title area
        
        const h1 = projSection.querySelector("h1");
        h1.innerHTML = data[indexp].name;
        const p1 = projSection.querySelector("#p-under-h1");
        p1.innerHTML = data[indexp].description;
        const p2 = projSection.querySelector("#p-date");
        p2.innerHTML = "<span>Completed on: </span>" + data[indexp].completed_on;

        //Middle area
        const image1 = projSection.querySelector("img");
        image1.src = data[indexp].image;
        // Eliminar después de CSS:
        //image1.style.height = "400px";
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
            divInd.className = "internalDiv"
            divForCards.appendChild(divInd);
            const imagecard1 = document.createElement("img");
            imagecard1.className = "p-card-img";
            imagecard1.src = element.image;
            //eliminar después de CSS
            //imagecard1.style.width = "120px";
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
            // return 0.5 - Math.random()
          });
          const dataOnlyThree = dataFiltered.slice(0, 3);
          return dataOnlyThree;
        }

        //CTA SECTION

        //FOOTER
      });
    })
    .catch((err) => console.log("error!"));
};
