const contSection = document.querySelector('#contact-section');
const submitBtn = contSection.querySelector('button');


submitBtn.addEventListener("click", function(e) {
    const required = contSection.querySelectorAll('input[required]');
    //console.log(required);
    
    const input2 = contSection.querySelectorAll('input');
    console.log(input2[0]);
    
   input2.forEach(function (element) {
    if (element.required && element.value === "") {
        console.log(element);
        element.style.border = "1px solid #FF0000";
        
        const div2 =  element.parentNode;
        const label2 = div2.querySelector('label');
        label2.style.color = "red";
       
        //cómo poner rojo el placeholder?
    }
    if (element.value.includes('Ironhack') || element.value.includes('ironhack')) {
        alert('You cannot be Ironhack')
    }
    })
    const message = contSection.querySelector('textarea');
   if (message.required && message.value === "") {
    message.style.border = "1px solid #FF0000";
    const div3 = message.parentNode;
    const label3 = div3.querySelector('label');
    label3.style.color = "red";
   }
   })
 
   
