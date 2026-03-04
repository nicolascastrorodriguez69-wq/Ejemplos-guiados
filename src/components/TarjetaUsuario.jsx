// 1. El Molde (Componente)
// Archivo: TarjetaUsuario.jsx
function TarjetaUsuario(props) {
    return (
        <div style={{ border: '2px solid black', padding: '10px', margin:'10px'}}>
            <h3>Jugador: {props.nombre}</h3>
            <p>Juego favorito: {props.JuegoFavorito}</p>
            </div>
    );
}

export default TarjetaUsuario