const contSection = document.querySelector('#contact-section');
const submitBtn = contSection.querySelector('button');

submitBtn.addEventListener("click", function(e) {
    const required = contSection.querySelectorAll('input[required]');

    required.forEach(function (element) {
        if (element.value === "") {
            element.style.backgroundColor = "red";
        }
    })

})