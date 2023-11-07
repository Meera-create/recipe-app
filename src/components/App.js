import '../styles/App.css';
import { AuthContext } from '../Context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthContext>
        <header className="App-header">
          <h1>Recipe App</h1>
        </header>
      </AuthContext>
    </div>
  );
}

export default App;