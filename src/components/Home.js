import React,{useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';


function Home() {
  const context = useContext(NoteContext);
  const{notes,setNotes} = context
  return (
    <div>
      <div className="container my-2">
        <h2>Add a Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Add Note</button>
        </form>
      </div>
      <div className="container my-2">
        <h2>Your Notes</h2>
        {notes.map((notes)=>{
          return notes.title;
        })}
      </div>
    </div>
  )
}

export default Home
