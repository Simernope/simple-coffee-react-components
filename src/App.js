import './App.css';
import Header from "./components/Header/Header";
import AllRecipies from "./pages/Recipies/AllRecipies";
import AllDrinks from "./pages/Recipies/Drinks/AllDrinks";

function App() {
  return (
      <div className='container p-5'>
          <Header/>
          <AllRecipies/>
          <AllDrinks/>
      </div>

  );
}

export default App;
