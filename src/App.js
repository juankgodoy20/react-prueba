import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/Inicio/Inicio'
import TemaContext, {TEMAS} from './contexto/contexto'
import { useState } from 'react';
import Pagina1 from './paginas/Pagina1/Pagina1'

function App() {
  const [tema, setTema] = useState(TEMAS.claro) 

  const cambiarTema = () => {
   console.log('llamando...') 
   setTema(() => {
    return tema === TEMAS.claro ? TEMAS.oscuro : TEMAS.claro   
   }); 
  }

  return (
    <TemaContext.Provider value={ { tema, cambiarTema} } >
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Inicio} />
          <Route path='/pagina1' component={Pagina1} />
        </Switch>
      </BrowserRouter>
    </TemaContext.Provider>
  );
}

export default App;
