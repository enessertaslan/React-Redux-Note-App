import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNote} from '../redux/notesSlice';
import {nanoid} from '@reduxjs/toolkit'
function Form() {
  const [title,setTitle] = useState('');
  const [content,setContent]=useState('');
  const [color,setColor]=useState('#e93030');

  const dispatch=useDispatch();
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addNote({id:nanoid(),title,content,color,showContent:false}));
    setTitle('');
    setContent('');
  }
  return (
    <div className='text-area' style={{backgroundColor:`${color}`}}>
      <form onSubmit={handleSubmit}>
            <input type="text" className='form-title-text' placeholder='Title' value={title} onChange={(e) =>setTitle(e.target.value.toUpperCase())} style={{backgroundColor:`${color}`}} />
            <textarea rows={7}  cols={5}  className='form-input-text' placeholder='Enter your note here...' value={content} onChange={(e)=>setContent(e.target.value)} style={{backgroundColor:`${color}`}} >
            </textarea>
            <br />
            <button className='note-add'>ADD</button>
          </form>
          <div className='colors'>
              <button className='colors-red' onClick={()=>setColor('#e93030')}></button>
              <button className='colors-blue' onClick={()=>setColor('#2778da')}></button>
              <button className='colors-green' onClick={()=>setColor('#53aa49')}></button>
             
            </div>
    </div>
  )
}

export default Form