import React, {useEffect, useState} from 'react'

function Pagina1 () {
    const [perros, setPerros] = useState([])

    useEffect(() => {
        console.log('Iniciando...')
        
        const getPerros = async () => {
            const res = await fetch("https://dog.ceo/api/breed/hound/images")
            const data = await res.json();
            setPerros(data.message)
        }

        getPerros();
        /*
        fetch("https://dog.ceo/api/breed/hound/images")
        .then(res => res.json())
        .then(
            (result) => {
                setPerros(result.message)
            },
            (error) => {
                setPerros([]) 
            }
        )
        */

        return () => {
            console.log('saneando...')
        };
    }, []);

    const imagenes = perros.map((perro) => 
        <img src={perro} alt=""/>
    );

    return (
        <div>
            <header>
                <h1>Pagina 1</h1>
            </header>
            <section>
                {imagenes}
            </section>
        </div>    
    );
}

export default Pagina1;