// import data from './data.json'
import { data } from './Products/data';
import Products from './Products'


function App() {
  return (
    <div className="App">
       <Products data={data}/>
    </div>
  );
}

export default App;
