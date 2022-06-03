import {useState,useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {searchNote}from '../redux/notesSlice';
function Search() {
  const [search,setSearch]=useState('');
  const dispatch=useDispatch();
  const handleSearch= (e)=>{
    
    dispatch(searchNote(e.target.value))
  }
  return (
    <div className='note-search'>
        <form>
        <input type="text" placeholder='Search...' onChange={(e)=> {setSearch(e.target.value);handleSearch(e)}} value={search} />
        </form>
        

    </div>
  )
}

export default Search