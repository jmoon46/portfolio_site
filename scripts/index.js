console.log("We live boys");

// const htmlColors = "#e44d26";
// const cssColors = "#264de4";
// const javascriptColors = "#f7df1f";
// const reactjsColors = "#61dafb";
// const nodejsColors = "#79b45f";
// const rubyOnRailsColors = "#b51407";
// const sqlColors = "#feb201";

const colorHash = {
	"HTML5": "#e44d26",
	"CSS3": "#264de4",
	"Javascript": "#f7df1f",
	"Reactjs": "#61dafb",
	"Node.js": "#79b45f",
	"Ruby on Rails": "#b51407",
	"SQL": "#feb201"
}

const webDevBackground = document.querySelector('#web-dev-section');

const webDevButtons = document.querySelectorAll('.dev-skills-container > a');

webDevButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();

		let innerHTML = e.target.innerHTML;

		if (innerHTML === "Javascript" || innerHTML === "Reactjs" || innerHTML === "Node.js" || innerHTML === "SQL") {
			webDevBackground.style.color = "black";
			webDevButtons.forEach((button2) => {
				button2.style.color = "black"
			});
		} else {
			webDevBackground.style.color = "white";
						webDevButtons.forEach((button2) => {
				button2.style.color = "white"
			});
		}

		webDevBackground.style.backgroundColor = colorHash[innerHTML];
	});
});


// const changeColor = (bgColor) => {
// 	webDevBackground.style.backgroundColor = bgColor;
// }

// const test = document.querySelector('#test-1');

// test.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log(e.target.innerHTML);
// })