import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {toggle,destroy} from '../redux/notesSlice';
function Notes() {
  const dispatch=useDispatch();
  const items= useSelector(state => state.notes.items);
  const search=useSelector(state=>state.notes.searchTitle);

  let filteredItem=search ? items.filter((item) => item.title.includes(search.toUpperCase())): items;
  console.log(search);

  return (
   
 
     
    <div className='notes-area'>
            {
              filteredItem.map((data)=>(
                <div className='notes-container' key={data.id}>
                    <div className='notes'  style={{backgroundColor:`${data.color}`}} onClick={()=>dispatch(toggle({id:data.id}))}>
                    {
                      data.title
                      
                    }
                    
                    <div className='notes-destroy'>
                      {
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Trash_font_awesome.svg" width={30} alt="" onClick={()=>window.confirm('Are you sure ?') ? dispatch(destroy({id:data.id})):console.log('test')} />
                      }
                    </div>
                  </div>
                  <div className={`notes-content ${data.showContent ? 'show' : 'delete'}`} >
                      {
                        data.content
                      }
                  </div>
                 </div>
              ))
            }
            {/* <div className='notes'>
                
            </div>
            <div className='notes' style={{backgroundColor:'#eb4634'}}>
                Note 2
            </div>
            <div className='notes' style={{backgroundColor:'#40e35b'}}>
                Note 3
            </div> */}
    </div>
  )
}

export default Notes