
import './App.css';
import Search from './components/Search';
import Form from './components/Form';
import Notes from './components/Notes'; 
function App() {
  return (
    <div className="App">
      <h1 className='notes-header'>Notes App</h1>
      <Search></Search>
      <Form></Form>
      <Notes></Notes>
    </div>
  );
}

export default App;
