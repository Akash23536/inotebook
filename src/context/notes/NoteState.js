import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
// const S1 ={"name": "Akash","class": "11c"}
// const [state,setState] = useState(S1);
// const update =()=>{setTimeout(()=>{setState({"name": "Rahul","class": "2f"})},1000);}

const notesInitial =[
    {
      "_id": "64e8c050350325f134b396853",
      "user": "64e8bfed350325f34b39684a",
      "title": "all g good updated ",
      "description": "this is the desed",
      "tag": "personal",
      "date": "2023-08-25T14:53:04.250Z",
      "__v": 0
    },
    {
        "_id": "64e8c050350325f234b396853",
        "user": "64e8bfed350325f34b39684a",
        "title": "all set updated ",
        "description": "this is th updated",
        "tag": "personal",
        "date": "2023-08-25T14:53:04.250Z",
        "__v": 0
      },
      {
        "_id": "64e8c0503503235f34b396853",
        "user": "64e8bfed350325f34b39684a",
        "title": "allted ",
        "description": "this is the descriptionu updated",
        "tag": "personal",
        "date": "2023-08-25T14:53:04.250Z",
        "__v": 0
      },
      {
        "_id": "64e8c0503503425f34b396853",
        "user": "64e8bfed350325f34b39684a",
        "title": "all pdated ",
        "description": "this is the descriptionu updated",
        "tag": "personal",
        "date": "2023-08-25T14:53:04.250Z",
        "__v": 0
      },
      {
        "_id": "64e8c0503503525f34b396853",
        "user": "64e8bfed350325f34b39684a",
        "title": "ang good updated ",
        "description": "this is the descriptionu updated",
        "tag": "personal",
        "date": "2023-08-25T14:53:04.250Z",
        "__v": 0
      },
      {
        "_id": "64e8c0503503625f34b396853",
        "user": "64e8bfed350325f34b39684a",
        "title": "all set working good updated ",
        "description": " updated",
        "tag": "personal",
        "date": "2023-08-25T14:53:04.250Z",
        "__v": 0
      },
      {
        "_id": "64e8c0570350325f34b396853",
        "user": "64e8bfed350325f34b39684a",
        "title": "all set working good updated ",
        "description": "this is the descriptionu updated",
        "tag": "personal",
        "date": "2023-08-25T14:53:04.250Z",
        "__v": 0
      },
    {
      "_id": "64ec64f77971c886ed524ccf9",
      "user": "64e8bfed350325f34b39684a",
      "title": "my self ",
      "description": "fontend web developer",
      "tag": "personal",
      "date": "2023-08-28T09:12:23.259Z",
      "__v": 0
    },
    {
      "_id": "64ec65017971c86ed524c9cfb",
      "user": "64e8bfed350325f34b39684a",
      "title": "my self ",
      "description": "backend web developer",
      "tag": "personal",
      "date": "2023-08-28T09:12:33.602Z",
      "__v": 0
    },
    {
      "_id": "614ec650f7971c86ed524ccfd",
      "user": "64e8bfed350325f34b39684a",
      "title": "my self ",
      "description": "data analyst web developer",
      "tag": "personal",
      "date": "2023-08-28T09:12:47.438Z",
      "__v": 0
    }
  ]

  const [notes,setNotes] = useState(notesInitial);

return(
    // value ={{state, update}}
    <NoteContext.Provider value ={{notes,setNotes}} > 
        {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;