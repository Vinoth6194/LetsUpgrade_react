
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Component1 />
        <img src="https://avatars.githubusercontent.com/u/49114903?v=4" className="App-logo" alt="logo" />
        <Component2 />
      </header>
    </div>
  );
}

export default App;
