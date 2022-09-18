import { useState } from "react";

const NotesList = () => {

    const [notes, setNotes] = useState([
        {title: "First Note", body: "My First Note", category: "Programming", id:1},
        {title: "Second Note", body: "My Second Note", category: "Work", id:2},
        {title: "Thrid Note", body: "My Thrid Note", category: "Vacation", id:3}
    ])

    return (
        <div>
            <h1>List of Notes</h1>
            {
                notes.map(note => (
                    <div>
                        <p>{note.id}</p>
                        <p>{note.title}</p>
                        <p>{note.body}</p>
                        <p>{note.category}</p>
                    </div>
                ))

            }
        </div>
    );
}

export default NotesList;