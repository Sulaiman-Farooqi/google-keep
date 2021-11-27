import React, {useState} from 'react'




const Notes = (props) => {
    
    const [notes, setNotes] = useState({
        title:"",
        content:""
    })
    const InputEvent=(event)=>{
        const {name,value}=event.target
        setNotes((prevData)=>{
            return {
                ...prevData,
                [name]:value
            }

        })

    }
    const addEvent=()=>{
        props.passNote(notes)
         setNotes({
            title:"",
            content:""
        })
    }
    
    return (
          

        <div className="container">

            <div className="main-note"> 
                <form>
                 <input style={{ border: "none" }} type="text" value={notes.title} onChange={InputEvent} name="title"  placeholder="Title" autoComplete="off" />

                    <textarea name="text" id="text" cols="" rows="" value={notes.content} onChange={InputEvent} name="content"  placeholder="write a note"></textarea>
                  
                  
                    <i  id="add" onClick={addEvent}  class="fas fa-plus"></i>
                  
                     
                      
                </form>

            </div>
        </div>


    )
}

export default Notes
