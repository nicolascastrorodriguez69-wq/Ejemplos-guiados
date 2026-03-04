// Archivo: PostConEfecto.jsx
import { useState, useEffect } from  'react';

function PostConEfecto () {
    const [mensajes, setMensajes] = useState(0);

    // Paso 2: El Efecto Secundario
    useEffect (() => {
        // Esto es lo que React hara de fondo
        document.title = 'Tienes $(mensajes) mensajes nuevos';

        // El arreglo [mensajes] al final significa:
        // "React, ejecuta esta funcion SOLO cuando el estado 'mensajes cambie".
    }, [mensajes]);

    return (
        <div>
            <h2>Bandeja de Entrada</h2>
            <p>Mensajes sin leer: {mensajes}</p>
            <button onClick={() => setMensajes(mensajes + 1)}>
                Recibir nuevo mensaje
                </button>


        </div>
    );

    }

    export default PostConEfecto
