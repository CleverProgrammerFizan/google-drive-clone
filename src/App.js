import './App.css';
import Filecards from './Components/Filecards';
import Folders from './Components/Folders';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
       <Header />
       
       <Sidebar />

       <Filecards />
       
       <Folders />
    </div>
  );
}

export default App;
