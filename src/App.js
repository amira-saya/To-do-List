import './App.css';
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App m-4">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
