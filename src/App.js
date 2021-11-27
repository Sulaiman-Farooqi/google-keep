
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Notes from './component/Notes';
import Notes2 from './component/Notes2';
import React, { useState } from 'react'


function App() {
  const [additem, setAdditem] = useState([])
  const addnote=(notes)=>{
    setAdditem((prevdata)=>{

      return [...prevdata,notes]
    })
  }

  const dlt=(id)=>{
    setAdditem((olddata)=>
      olddata.filter((curdata,index)=>{
        return index!==id;

      })
    
    
    )  }
    
  

  

  
  return (
    <div>
      <Header />
      <Notes passNote={addnote}  />

        {additem.map((val,index)=>{
          return    (<Notes2 key={index} id={index} title={val.title} content={val.content} delteitem={dlt} />)
        })}
      
      <Footer/>


    </div>
  );
}

export default App;
