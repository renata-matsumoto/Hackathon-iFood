import './App.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


import Home from './components/Home/Index'
import ListRecipes from './components/ListRecipes/ListRecipes';
import Landing from './components/Landing/Landing';
import ComprarIngredientes from './components/ComprarIngredientes/ComprarIngredientes';
import Recipes from './components/Recipes/Recipes';


function App() {
  return (
    <div className="App">

      
      {/* <Home></Home> */}
      {/* <Landing></Landing> */}

      <Recipes></Recipes>

    </div>
  );
}

export default App;
