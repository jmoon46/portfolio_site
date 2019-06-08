console.log("We live boys");

const htmlColors = "#e44d26";
const cssColors = "#264de4";
const javascriptColors = "#f7df1f";
const reactjsColors = "#61dafb";
const nodejsColors = "#79b45f";
const rubyOnRailsColors = "#b51407";
const sqlColors = "#feb201";

const webDevBackground = document.querySelector('#web-dev-section');

const webDevButtons = document.querySelectorAll('.dev-skills-container > a');

webDevButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();
	});
});

webDevBackground.style.backgroundColor = htmlColors;

const changeColor = (bgColor) => {
	webDevBackground.style.backgroundColor = bgColor;
}

// const test = document.querySelector('#test-1');

// test.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log(e.target.innerHTML);
// })