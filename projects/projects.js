
const url2 =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

//Variables de HTML
const projSection = document.querySelector('#p-proj-section');
const projSection2 = document.querySelector('#p-other-proj-section');
const projCtaSec = document.querySelector('#p-cta-section');

//OPCIÓN 1 (THEN)

window.onload = function () {
fetch(url2)
.then((result)  => {
    result.json().then((data) => { 
        console.log("segundo then")
    console.log(data)  
    
    //SECTION 1
    //Title area
    const h1 = projSection.querySelector('h1');
    h1.innerHTML = data[4].name;
    const p1 = projSection.querySelector('#under-h1');
    p1.innerHTML = data[4].description;
    const p2 = projSection.querySelector('#date');
    p2.innerHTML = 'Completed on: '+ data[4].completed_on;
    //Middle area
    const image1 = projSection.querySelector('img');
    image1.src = data[4].image;
    // Eliminar después de CSS:
    image1.style.height = "400px";
    const parag = projSection.querySelector('#p-main-p');
    parag.innerHTML = data[4].content;

    //SECTION2
    const h2Other = projSection2.querySelector('h2');
    h2Other.innerHTML = "Other Projects"

    const card1 =projSection2.querySelector('#card1');
    const imagecard1 = document.createElement('img');
    imagecard1.src = "https://github.com/ironhack-jc/mid-term-api/blob/main/3.jpg?raw=true";
    imagecard1.style.width = "120px"
    card1.appendChild(imagecard1);
    const h4 = document.createElement('h4');
    card1.appendChild(h4);
    h4.innerHTML = data[0].name;
    const pcard1 = document.createElement('p');
    card1.appendChild(pcard1);
    pcard1.innerHTML = data[0].description;
    const acard1 = document.createElement('a');
    card1.appendChild(acard1);
    acard1.innerHTML = "Learn More"
    acard1.href = "#"

    /*const card = projSection2.querySelectorAll('.p-card');
    
     card.forEach( (element) => {
        const pjctsImg = document.createElement("img");
        pjctsImg.src = data[0].image
        card.appendChild(pjctsImg);
        
    }) */

    //CTA SECTION
const h2Cta = document.createElement('h2');
const ctaDiv = projCtaSec.querySelector('#cta-div');
ctaDiv.appendChild(h2Cta);
h2Cta.innerHTML="Do you have any questions?"

const pCta = document.createElement('p');
ctaDiv.appendChild(pCta);
pCta.innerHTML = "Let us help you!"

//AÑADIR EMAIL + SUBSCRIBE

//FOOTER

})
})
.catch((err) => console.log("error!")); 
};

//Como no consigo coger info de la API..

