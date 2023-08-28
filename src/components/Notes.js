
import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';
import Notesiteam from './Notesiteam';

const Notes = () => {
    const context = useContext(NoteContext);
  const{notes,setNotes} = context
  return (
    <div className="row my-2">
        <h2>Your Notes</h2>
        {notes.map((notes)=>{
          return <Notesiteam key={notes._id} note = {notes}/>
        })}
      </div>
  )
}
 
export default Notes
