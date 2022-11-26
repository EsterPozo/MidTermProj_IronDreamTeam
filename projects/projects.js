
const url2 =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects-v2";

//Variables de HTML
const projSection = document.querySelector('#p-proj-section');

//OPCIÓN 1 (THEN)

window.onload = function () {
fetch(url2)
.then((result)  => {
    result.json().then((data) => { 
        console.log("segundo then")
    console.log(data)  
    
    //Title area
    const h1 = projSection.querySelector('h1');
    h1.innerHTML = data[4].name;
    const p1 = projSection.querySelector('#under-h1');
    p1.innerHTML = data[4].description;
    const p2 = projSection.querySelector('#date');
    p2.innerHTML = 'Completed on: '+ data[4].completed_on
})
})
.catch((err) => console.log("error!")); 
};

//Como no consigo coger info de la API..

