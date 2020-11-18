import React from 'react'

export const TEMAS = {
    oscuro: {
        backgroundColor: '#000000',
        color: '#ffffff'
    },
    claro: {
        backgroundColor: '#ffffff',
        color: '#000000'
    }
}

const TemaContext = React.createContext(TEMAS.claro);

export default TemaContext;