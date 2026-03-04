import React from 'react'
import Saludo from './components/Saludo'
import MatematicasMagicas from './components/MatematicasMagicas'
import TarjetaUsuario from './components/TarjetaUsuario'


const App = () => {
  return (
    <div>
      < Saludo />
      <MatematicasMagicas />

      <h1>Lista de jugadores</h1>
      {/* ¡le pasamos los props como si fueran atributos HTML! */}
      <TarjetaUsuario nombre="Lucia" juegoFavorito="Valorant" />
      <TarjetaUsuario nombre="Marcos" juegoFavorito="MInecraft" />
      <TarjetaUsuario nombre="Sofia" juegoFavorito="Elden Ring" />
      
    </div>
  )
}

export default App
