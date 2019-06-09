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

const pHash = {
	"HTML5": "The most basic form of web development but a valuable skill. What I have learned to be most important with HTML is to be well organized and not use more elements than you need to or else things get messy.",
	"CSS3": "My knowledge of CSS goes beyond changing the size and shape of elements. I'm very comfortable with animations and media queries as well as the interactions between CSS and Javascript. This knowledge along with my design background gives me an edge when it comes to styling a website.",
	"Javascript": "Pure vanilla ES6 Javascript. I have spent countless hours learning the ins and outs of this language and my fascination with it will not be ending soon. Whether it's interacting with the DOM or utilizing recursion and closures I have in depth knowledge on all of the intricacies of this language.",
	"Reactjs": "Props and state management, actions and reducers. Over time I have obtained a strong grasp on these concepts that would confuse most developers. My knowledge of this library grows every day and my comprehensive foundational knowledge of vanilla Javascript, HTML, and CSS really helps with that process.",
	"Node.js": "I would say I have an intermediate knowledge of Node. While I haven't worked with this library much, I feel confident in my abilities to make apps with Node. This is mostly due to my in depth understanding of MVC architecture and how to structure API endpoints.",
	"Ruby on Rails": "This is the language that started my journey into programming. While Ruby seems to not be the most valuable programming language to know, learning this did teach me a lot about all of the core concepts of back end programming and programming in general. This has given me the ability to learn other languages with relative ease.",
	"SQL": "From your basic query to object relational mapping, I've done it all. SQL can be a very confusing language at times but organizing data is one of my favorite aspects of programming and fiddling with a SQL query for hours sounds like a good time to me."
}

const webDevBackground = document.querySelector('#web-dev-section');
const webDevButtons = document.querySelectorAll('.dev-skills-container > a');
const webDevParagraph = document.querySelector('.p-wrapper > p');
const webDevHeader = document.querySelector('#web-dev-header');
const webProjectLink = document.querySelector('#web-project-link');

webDevButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		e.preventDefault();

		let innerHTML = e.target.innerHTML;

		if (innerHTML === "Javascript" || innerHTML === "Reactjs" || innerHTML === "Node.js" || innerHTML === "SQL") {
			webDevBackground.style.color = "black";
			webProjectLink.style.color = "black";
			webDevButtons.forEach((button2) => {
				button2.style.color = "black"
			});
		} else {
			webDevBackground.style.color = "white";
			webProjectLink.style.color = "white";
			webDevButtons.forEach((button2) => {
				button2.style.color = "white"
			});
		}

		webDevBackground.style.backgroundColor = colorHash[innerHTML];
		webDevParagraph.innerHTML = pHash[innerHTML];
		webDevHeader.innerHTML = innerHTML;
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