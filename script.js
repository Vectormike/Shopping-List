var button = document.getElementById("enter");

var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var toggleli = document.querySelector("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("Delete!"));	
	li.appendChild(deleteBtn);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



// // Toggle done once click
// function toggleDone() {
// 	var done = document.querySelector("li");
// 	done.classList.toggle(".done");
// }
// toggleli.addEventListener("hover", toggleDone);



function deleteListAfterClick() {
	var dLi = document.querySelector("li");
	dLi.parentNode.removeChild(dLi);
}

deleteButton.addEventListener("click", deleteListAfterClick);
