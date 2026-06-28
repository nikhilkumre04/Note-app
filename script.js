let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
    const notesDiv = document.getElementById("notes");
    notesDiv.innerHTML = "";

    notes.forEach((note, index) => {
        notesDiv.innerHTML += `
        <div class="note">
            <p>${note}</p>
            <button class="delete" onclick="deleteNote(${index})">Delete</button>
        </div>`;
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
    const note = document.getElementById("note").value;

    if(note.trim() !== ""){
        notes.push(note);
        document.getElementById("note").value = "";
        displayNotes();
    }
}

function deleteNote(index){
    notes.splice(index,1);
    displayNotes();
}

displayNotes();

document.getElementById("search").addEventListener("keyup", function(){
    const value = this.value.toLowerCase();
    const noteList = document.querySelectorAll(".note");

    noteList.forEach(note=>{
        note.style.display =
        note.innerText.toLowerCase().includes(value)
        ? "block" : "none";
    });
});
