
import React, { useState, useEffect } from 'react';

interface Note {
    id: number;
    title: string;
    content: string;
}

const NoteList: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setNotes([
                { id: 1, title: 'Note 1', content: 'This is the first note.' },
                { id: 2, title: 'Note 2', content: 'This is the second note.' },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    const addNote = () => {
        const newNote: Note = {
            id: notes.length + 1,
            title: `Note ${notes.length + 1}`,
            content: 'This is a new note.',
        };
        setNotes([...notes, newNote]);
    };

    if (loading) {
        return <div>Loading notes...</div>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Notes</h1>
            <button
                onClick={addNote}
                className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary"
            >
                Add Note
            </button>
            <ul className="mt-4 space-y-2">
                {notes.map((note) => (
                    <li key={note.id} className="border p-4 rounded bg-gray-100">
                        <h2 className="font-semibold">{note.title}</h2>
                        <p>{note.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;
