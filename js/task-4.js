
const form = document.querySelector(".login-form");

form.style.display = "inline-flex";
form.style.width = "408px";
form.style.height = "256 px";
form.style.backgroundColor = "#fff";
form.style.borderRadius = "8px";
form.style.padding = "24px";
form.style.flexDirection = "column";
form.style.alignItems = "flex-start";
form.style.gap = "16px";
form.style.fontFamily = "Montserrat";
form.style.color = "#2E2F42";
form.style.fontSize = "16px";
form.style.fontStyle = "normal";
form.style.fontWeight = "400";
form.style.lineHeight = "1.5";
form.style.letterSpacing = "0.64px";

const button = document.querySelector("button");

button.textContent = "Log in";
button.style.display = "block";
button.style.width = "86px";
button.style.height = "40px";
button.style.gap = "10px";
button.style.backgroundColor = "#4E75FF"; 
button.style.color = "#fff"; 
button.style.border = "none"; 
button.style.padding = "8px 16px"; 
button.style.fontSize = "16px"; 
button.style.fontFamily = "Montserrat"; 
button.style.fontStyle = "normal"; 
button.style.fontWeight = "500";
button.style.lineHeight = "1.5";
button.style.letterSpacing = "0.64px" 
button.style.cursor = "pointer"; 
button.style.borderRadius = "8px"; 

button.addEventListener("mouseover", function() {
  button.style.backgroundColor = "#1946e6"; // Darker green on hover
});

button.addEventListener("mouseout", function() {
  button.style.backgroundColor = "#4E75FF"; // Reset to original color when mouse leaves
});

const inputElements = document.querySelectorAll("input[name='email'], input[name='password']"); 
inputElements.forEach(input => {
  input.style.display = "flex";
  input.style.width = "360px";
  input.style.height = "40px";  
  input.style.gap = "8px";
  input.style.color = "#2E2F42";
    input.style.borderRadius = "4px";
    input.style.border = "border: 1px solid #808080"; 
});

form.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (email === "" || password === "") {
        alert('All form fields must be filled in');
        return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    
    form.reset();
});
