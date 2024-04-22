// Variables
let container_div = document.getElementById('container');
let row = document.getElementById('input_space');
let btnAdd = document.getElementById('add_btn');
let btnDelete = document.getElementById('delete_btn');
let noteStartId = 0;

// Function for creating new note
function createNewToDo(){
	let newDiv = document.createElement('div');
	let editAndDeleteButtonsSpace = document.createElement('div');
	let doneSpan = document.createElement('button');
	let deleteSpan = document.createElement('button');
	let textSpan = document.createElement('span');
	let noteId = `note${++noteStartId}`;

	textSpan.innerText = row.value;

	if(textSpan.innerText === '') return;

	row.value = '';
	newDiv.classList.add('note');
	newDiv.setAttribute('id', noteId);
	doneSpan.classList.add('material-symbols-outlined');
	deleteSpan.classList.add('material-symbols-outlined');
	doneSpan.classList.add('note_done_btn');
	deleteSpan.classList.add('note_delete_btn');
	doneSpan.innerText = 'done';
	deleteSpan.innerText = 'delete';

	// Event listener for deleting the note which one we want
	deleteSpan.addEventListener('click', function(){
		let currentNoteForDeleting = document.getElementById(noteId);
		currentNoteForDeleting.remove();
	});

	// Event listener for turn into done the note which one we want
	doneSpan.addEventListener('click', function(){
		let currentNoteForDone = document.getElementById(noteId);

		if(currentNoteForDone.style.textDecoration === 'line-through'){
			currentNoteForDone.style.textDecoration = 'none';
			currentNoteForDone.style.opacity = '1';
		} else {
			currentNoteForDone.style.textDecoration = 'line-through';
			currentNoteForDone.style.opacity = '0.5';
		}
	});

	newDiv.append(textSpan);
	editAndDeleteButtonsSpace.appendChild(doneSpan);
	editAndDeleteButtonsSpace.appendChild(deleteSpan);
	newDiv.appendChild(editAndDeleteButtonsSpace);
	container_div.appendChild(newDiv);
}

// Function for deleting all notes 
function deleteAllNotes(){
	let itemsWithClassNameNote = document.getElementsByClassName('note');
	
	while(itemsWithClassNameNote.length > 0) {
		itemsWithClassNameNote[0].remove();
    }
}

// Event listeners for buttons 
btnDelete.addEventListener('click', deleteAllNotes);
btnAdd.addEventListener('click', createNewToDo);
row.addEventListener('keypress', function(event){
	if(event.key === 'Enter'){
		createNewToDo();
	}
});  