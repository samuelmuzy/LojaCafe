import './App.css';
import GlobalState from './global/GlobalState';
import {Router} from './Router'

function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
  );
}

export default App;
