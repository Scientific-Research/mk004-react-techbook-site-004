import './App.css';
import techBooks from './data/techbook.json';

console.log(techBooks);

function App() {
  return (
    <div className="App">
      <h1>There are {techBooks.length} Tech Books there!</h1>
      <p>test</p>
    </div>
  );
}

export default App;
