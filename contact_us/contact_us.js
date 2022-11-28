const contSection = document.querySelector('#contact-section');
const submitBtn = contSection.querySelector('button');


submitBtn.addEventListener("click", function(e) {
    const required = contSection.querySelectorAll('input[required]');
    //console.log(required);
    
    const input2 = contSection.querySelectorAll('input');
    //console.log(input2[0]);
    
   input2.forEach(function (element) {
    if (element.required) {
        console.log(element);
        element.style.border = "2.5px solid #FF0000";
        
        const div2 =  element.parentNode;
        const label2 = div2.querySelector('label');
        label2.style.color = "red";
       
        //cómo poner rojo el placeholder?
    }
   })
 
})