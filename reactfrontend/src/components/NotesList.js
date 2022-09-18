import { useEffect, useState } from "react";
import NotesService from "../services/NotesService";


const NotesList = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        NotesService.getAll()
            .then(response => {
                console.log('Printing Response', response.data);
                setNotes(response.data);
            })
            .catch (error => {
                console.log('something went wrong!', error)
            })
    }, []);

    return (
        <div>
            <h1>List of Notes</h1>
            {
               notes.map(note => (
                    <div key={note.id}>
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