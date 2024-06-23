import './App.css';
import * as Batalha from './components/atividade01/03Batalha';
//import * as PC from './components/atividade01/02MeuPC';
//import Pai from './components/atividade01/questao1/01Pai';
// import { Beverage, Fruit, Supermarket, Vegetable } from './components/Children';
//import Temperature from './components/atividade00/03Temperature';
//import HelloWorld from './components/HelloWorld';
//import Calculadora from './components/Calculadora';
//import MyProps from './components/MyProps';
//import MeusDados from './components/atividade00/01MeusDados';
//import MeusDados from './components/atividade00/02MeusDados';

function App() {
  return (
    <div>
      <Batalha.World>
        <Batalha.Arena name="Castelão"/>
        <Batalha.Arena name="Castelão"/>
      </Batalha.World>
      <hr />
      <Batalha.World>
        <Batalha.Arena2 name="Castelão">
          <Batalha.Hero name="Superman"/>
          <Batalha.Enemy name="Homelander"/>
        </Batalha.Arena2>
      </Batalha.World>
    </div>
  );
}

/*
return (
    <div>
      <Supermarket name="Skywalker">
        <Vegetable name="Potato"/>
        <Fruit name="Apple"/>
        <Beverage name="Soda"/>
      </Supermarket>
      </div>
  );*/ 

/*

return (
    <MeusDados 
    name="Lucas" 
    course="Computer Science" 
    university="Federal University of Ceará"
    />
  );

*/

export default App;
