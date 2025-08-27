import './App.css';
import techBooks from './data/techbook.json';

console.log(techBooks);

function App() {
  return (
    <div className="App">
      <h1>There are {techBooks.length} Tech Books there!</h1>
      {/* {techBooks.map((b) => console.log(b))} */}
      {techBooks.map((tb) => (
        <div className="techbooks">
          <div className="techbook">
            <p className="title">
              <span>Title:</span> {tb.title}
            </p>
            <p className="description">
              <span>Description:</span> {tb.description}
            </p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
