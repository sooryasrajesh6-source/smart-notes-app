let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    notesList.innerHTML += `
      <div class="note">
        <p>${note}</p>
        <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

function addNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();

  if (noteText === "") {
    alert("Please write a note");
    return;
  }

  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  displayNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function searchNotes() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const noteElements = document.querySelectorAll(".note");

  noteElements.forEach(note => {
    const text = note.innerText.toLowerCase();
    note.style.display = text.includes(searchValue) ? "flex" : "none";
  });
}

displayNotes();
