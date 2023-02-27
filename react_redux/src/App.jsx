import './App.css';
import CakeView from './features/cake/cakeView';
import IceView from './features/icecream/iceCreamView';
import UserView from './features/user/userView';
function App() {
  return (
    <div className="App">
      <CakeView/>
      <IceView/>
      <UserView/>
    </div>
  );
}

export default App;
