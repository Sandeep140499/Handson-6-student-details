import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../Style.css';
import { store } from './config/StudentData';

const UpdateStudent = () => {

    const { studentId } = useParams();
    const [data] = useContext(store);
    const navigate = useNavigate();
    
    const current = data.filter((student) => student.id === parseInt(studentId))

    const [newName,setNewName] = useState(current[0].name);
    const [newAge,setNewAge] = useState(current[0].age);
    const [newCourse,setNewCourse] = useState(current[0].course);
    const [newBatch,setNewBatch] = useState(current[0].batch);
  

    const index = current[0].id;
    console.log(current);
    
    console.log(data[index]);

    const handleReset = () => {
        setNewName("");
        setNewAge("");
        setNewCourse("");
        setNewBatch("");

    };
  

    const handleCancel = () => {
        setNewName("");
        setNewAge("");
        setNewCourse("");
        setNewBatch("");

        navigate('/students');

    };
  
    const handleSubmit = (e) =>{

        data[index].name = newName;
        data[index].age = newAge;
        data[index].course = newCourse;
        data[index].batch = newBatch;
 
      navigate('/students');
      e.preventDefault();
    }

  return (
    <div>
    <h1 className='newTitle'>Add New Details</h1>
      
      <form action="">

    <div className="inputContainer">

      <div className="formElem">
        <input type="text" className='input' placeholder=' ' name='name' value={newName} onChange={(e) => {setNewName(e.target.value)}}  required/>
        <label className='placeholder' htmlFor="name">Name </label>
      </div>

      <div className="formElem">
        <input type="number" className='input' placeholder=' ' name='age' value={newAge} onChange={(e) => {setNewAge(e.target.value)}}  required/>
        <label className='placeholder' htmlFor="age">Age </label>
      </div>
    </div>
    <div className="inputContainer">
      <div className="formElem">
        <input type="text" className='input' placeholder=' ' name='course' value={newCourse} onChange={(e) => {setNewCourse(e.target.value)}}  required/>
        <label className='placeholder' htmlFor="course">Course </label>
      </div>

      <div className="formElem">
        <input type="text" className='input' placeholder=' ' name='batch' value={newBatch} onChange={(e) => {setNewBatch(e.target.value)}}  required/>
        <label className='placeholder' htmlFor="">Batch </label>
      </div>

    </div>
    
    <div className="btns">
      <button type="reset" onClick={handleReset}>reset</button>
      <button type="submit" onClick={handleCancel} >Cancel</button>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>

      </form>

  </div>
  )
}

export default UpdateStudent