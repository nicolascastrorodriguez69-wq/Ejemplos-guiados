// Archivo: BotonLike.jsx
import {useState} from 'react'; // Paso 1: Importar el superpoder

function BotonLike(){
    // Paso 2: Crear la memoria.
    // 'likes' es la variable actual.
    // 'setlikes' es la UNICA forma permitida de modificar 'likes'.
    // 0 es la cantidad de likes iniciales.
    const [likes, setLikes] = useState (0);
    
    // Funcion que se ejecuta al hacer clic
    const darLike = () => {
        setLikes(likes + 1); // le decimos a React: "Oye, suma 1 y actualiza la pantalla"
    }

    return(
        <div style={{ textAlign: 'center', marginTop: '20px'}}>
            <h2>Post: ¿La pizza con piña es buena?</h2>
            {/* Paso 3: Conectar el clic del boton */}
            <button onClick={darLike} style={{FontSize: '20px', padding: '10px'}}>
                Me gusta({likes})
                </button>

                {/* Un poco de logica extra */}
                {Likes > 10 && <p>¡Wow, esto se esta volviendo viral!</p>}
                </div>

    );

}

export default BotonLike