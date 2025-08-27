import './App.css';
import techBooks from './data/techbook.json';
import { Techbook } from './components/Techbook';

console.log(techBooks);

function App() {
  return (
    <div className="App">
      <Techbook techBooks={techBooks} />
    </div>
  );
}

export default App;
