import React from 'react'

const Notes2 = (props) => {
    const dltitem=()=>{
        props.delteitem(props.id)
    }
    
    return (
        <div className="container2">
            <div className="notes2" id="note1">
                <h6 style={{fontSize:"20px"}}>{props.title}</h6>
                <p>{props.content}</p>
               

                <i onClick={dltitem} id="dlt"className="far fa-trash-alt"></i>

               
            </div>
           
        </div>
    )
}

export default Notes2
