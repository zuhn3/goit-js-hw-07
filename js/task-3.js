const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
    const trimmedValue = inputEl.value.trim();

    if (trimmedValue === "") {
        outputEl.textContent = "Anonymous";
    } else {
        outputEl.textContent = trimmedValue;
}
})



 


inputEl.style.width = "360px";
inputEl.style.height = "40px";
inputEl.style.fontSize = "16px";
inputEl.style.padding = "8px 16px";
inputEl.style.backgroundColor = "#FFF";
inputEl.style.color = "#2E2F42";
inputEl.style.borderRadius = "4px";
inputEl.style.border = "1px solid #808080";


const wrapper = document.createElement("div");

wrapper.style.display = "inline-flex";
wrapper.style.flexDirection = "column";
wrapper.style.width = "408px";
wrapper.style.height = "136px";
wrapper.style.borderRadius = "8px";
wrapper.style.backgroundColor = "#FFF";
wrapper.style.padding = "24px";





const output = document.querySelector("h1");
output.style.fontStyle = "normal";
output.style.whiteSpace = "nowrap"
output.style.color = "#2E2F42";
output.style.fontSize =  "24px";
output.style.fontWeight = "600";
output.style.lineHeight = "1.33";
output.style.letterSpacing = "0.96px";


document.body.append(wrapper);
wrapper.insertAdjacentElement("afterbegin", inputEl);
wrapper.insertAdjacentElement("beforeend", output);