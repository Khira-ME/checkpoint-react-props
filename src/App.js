
import './App.css';
import { Profil } from './profil/Profil';
import picture from './khiraProfil.jpg';
import picdefault from './default.jpg'

function App() {
  function handleName(on){
    alert(`your name is ${on}` )
  }

  return (
    <div className="App">
        <div className="container">
        <h2>Props : parametrs</h2>
          <Profil FullName='Khira MECHRI' Bio='Tunis' Profession='Student in GO MY CODE' handleName={handleName}>
              <img src={picture} alt='photo de profil' width="250px"/>  
          </Profil>
          
        </div>
          
          <hr/>
          <div className="container">
            <h3> Props : default parametrs</h3>
          <Profil handleName={handleName}>
          <img src={picdefault} alt='photo de profil' width="250px"/>
          </Profil>
          </div>      
    </div>
  );
}

export default App;
