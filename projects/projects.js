const url2 =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

//Coger el parametro uuid del url
const params = new URLSearchParams(window.location.search);

const index1 = params.get("uuid");
console.log(index1);
//borar cuando el setup esté hecho en index
const indexp = 4;

//Variables de HTML
const projSection = document.querySelector("#p-proj-section");
const projSection2 = document.querySelector("#p-other-proj-section");
const projCtaSec = document.querySelector("#p-cta-section");

//OPCIÓN 1 (THEN)

window.onload = function () {
  fetch(url2)
    .then((result) => {
      result.json().then((data) => {
        //console.log("segundo then")
        // console.log(data)

        //SECTION 1
        //Title area
        const h1 = projSection.querySelector("h1");
        h1.innerHTML = data[indexp].name;
        const p1 = projSection.querySelector("#p-under-h1");
        p1.innerHTML = data[indexp].description;
        const p2 = projSection.querySelector("#p-date");
        p2.innerHTML = "Completed on: " + data[indexp].completed_on;
        //Middle area
        const image1 = projSection.querySelector("img");
        image1.src = data[indexp].image;
        // Eliminar después de CSS:
        image1.style.height = "400px";
        const parag = projSection.querySelector("#p-main-p");
        parag.innerHTML = data[indexp].content;

        //SECTION2 - Other projects
        const h2Other = projSection2.querySelector("h2");
        h2Other.innerHTML = "Other Projects";

        //ejemplo estático
        const card1 = projSection2.querySelector("#p-card1");
        const imagecard1 = document.createElement("img");
        imagecard1.src = data[indexp].image;
        //eliminar después de CSS
        imagecard1.style.width = "120px";
        card1.appendChild(imagecard1);
        const h4 = document.createElement("h4");
        card1.appendChild(h4);
        h4.innerHTML = data[indexp].name;
        const pcard1 = document.createElement("p");
        card1.appendChild(pcard1);
        pcard1.innerHTML = data[indexp].description;
        const acard1 = document.createElement("a");
        card1.appendChild(acard1);
        acard1.innerHTML = "Learn More";
        acard1.href = "#";
        //fin ejemplo estático

        //other projects dinámico
        const pCards = projSection2.querySelectorAll(".p-card");
        console.log(pCards);

        pCards.forEach((card) => {
          const imagecard = document.createElement("img");
          //crear un numero random
          const random = Math.floor(Math.random() * data.length);
          //console.log(random);
          const randomStr = random.toString();
          console.log(randomStr);

          if (data[random].uuid !== indepx )

          /* const found = data.find((element) => {
            console.log(element.uuid);

            return element.uuid !== "indexp" && element.uuid === "randomStr";
          });
          console.log("found is:" + found); */

          /* data.forEach((dataElem) => {
            
              imagecard.src = data[random].image;
              card.appendChild(imagecard);
              imagecard.style.width = "200px"; 
            
          }); */
        });

        //CTA SECTION

        //FOOTER
      });
    })
    .catch((err) => console.log("error!"));
};
