import React, { useContext } from 'react'
import TemaContext from '../../contexto/contexto'

function Inicio () {

    const { tema, cambiarTema } = useContext(TemaContext);

    return (
        <div style={tema}>
            <header>
                <h1>Pagina Inicio</h1>
            </header>
            <section>
                <h2>Cuerpo</h2>
                <button type='button' onClick={cambiarTema}>Cambiar Tema</button>
            </section>
            <footer></footer>
        </div>
    );
}

export default Inicio;