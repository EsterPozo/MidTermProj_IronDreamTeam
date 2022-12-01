//HEADER BURGUER
const button = document.querySelector("#burger");
const menu = document.querySelector("#overlay");
const buttonProjects = document.querySelector("#overlay-link-projects");
const buttonServices = document.querySelector("#overlay-link-services");

button.addEventListener("click", () => {
  button.classList.toggle("burger-active");
  menu.classList.toggle("overlay-active");
});

//HTML variables
const contSection = document.querySelector("#contact-section");
const submitBtn = contSection.querySelector("button");

// Submit validation
submitBtn.addEventListener("click", function (e) {
  const required = contSection.querySelectorAll("input[required]");
  const input2 = contSection.querySelectorAll("input");
  // required inputs red
  input2.forEach(function (element) {
    if (element.required && element.value === "") {
      element.style.border = "1px solid #E74C3C ";
      const div2 = element.parentNode;
      const label2 = div2.querySelector("label");
      label2.style.color = "#E74C3C ";
      const addCSS = document.createElement("style");
      addCSS.innerHTML = "::placeholder {color: #E74C3C  ;}";
      element.append(addCSS);
    } else if (element.required && element.value !== "") {
      element.style.border = "none";
      const div2 = element.parentNode;
      const label2 = div2.querySelector("label");
      label2.style.color = "#6b708d";
      const addCSS = document.createElement("style");
      addCSS.innerHTML = "::placeholder {color: #6b708d;}";
      element.append(addCSS);
    }
  });
  //required textarea red
  const message = contSection.querySelector("textarea");
  if (message.required && message.value === "") {
    message.style.border = "1px solid #E74C3C ";
    const div3 = message.parentNode;
    const label3 = div3.querySelector("label");
    label3.style.color = "#E74C3C ";
  } else if (message.required && message.value !== "") {
    message.style.border = "none";
    const div3 = message.parentNode;
    const label3 = div3.querySelector("label");
    label3.style.color = "#6b708d ";
  }
  // Name input (the first) cannot be Ironhack
  if (
    document.querySelector("input").value.includes("Ironhack") ||
    document.querySelector("input").value.includes("ironhack")
  ) {
    alert("You cannot be Ironhack");
  }
});
