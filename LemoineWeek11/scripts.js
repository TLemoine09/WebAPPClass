//This is for the click button event on the webpage
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
 alert("You clicked the button!");
}); 

//This is for the text input event on the webpage
const textInput = document.getElementById("textInput");
textInput.addEventListener("input", (event) => {
 console.log("You typed: " + event.target.value);
});

//This is for the hover text event on the webpage
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
 hoverText.style.color = "Red";
});
hoverText.addEventListener("mouseout", () => {
 hoverText.style.color = "black";
});


//This is for the double-click button event on the webpage
const dblBtn = document.getElementById("dblBtn");
dblBtn.addEventListener("dblclick", () => {
 alert("You double-clicked the button!");
});

//This is for the keydown event on the webpage. Pressing keys will log what key was pressed in the console.
document.addEventListener("keydown", (event) => {
 console.log("You pressed a key: " + event.key);
});


//This is for updating the text output based on the text input on the webpage, just to throw something up there
const textOutput = document.getElementById("output");
textInput.addEventListener("input", (event) => {
 textOutput.textContent = "You typed: " + event.target.value;
});

const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
toggleDarkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
const toggleHighlightModeBtn = document.getElementById("toggle-highlight-mode");
toggleHighlightModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("highlight-mode");
});