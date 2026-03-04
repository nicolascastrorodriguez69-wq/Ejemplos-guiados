// Archivo: GestorMisiones.jsx
import { useState } from 'react';

function GestorMisiones() {
    // Estado 1: La lista de misiones (empieza vacía)
    const [misiones, setMisiones] = useState([]);

    // Estado 2: Lo que el usuario está escribiendo ahora mismo
    const [nuevaMision, setNuevaMision] = useState("");
    
    // Función para añadir la misión
    const agregarMision = (evento) => {
        evento.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Si el texto está vacío, no hacemos nada
    if (nuevaMision.trim() === "") return;

    // Añadimos la nueva misión a la lista anterior
    setMisiones([...misiones, nuevaMision]);

    // Limpiamos el campo de texto para la siguiente misión
    setNuevaMision(""); 

    }

// Función para eliminar una misión
const eliminarMision = (indiceABorrar) => {
    // El "colador": conservamos las misiones cuyo índice no sea el que queremos borrar
const misionesFiltradas = misiones.filter((mision, indice) => indice !== indiceABorrar);
    setMisiones(misionesFiltradas);
};
    return (
    <div style={{ fontFamily: 'Arial', maxWidth: '400px', margin: 'auto'}}>
    <h2>Mi Diario de Misiones</h2>
     
    <form onSubmit={agregarMision}>
        <input
        type="text"
        placeholder="Ej: Derrotar al dragón (Limpiar mi cuarto)"
        value={nuevaMision}
        // Cada vez que el usuario teclea, actualizamos el estado
        onChange={(e) => setNuevaMision(e.target.value)}
        style={{ padding: '8px', width: '70%' }}
/>
<button type="submit" style={{ padding: '8px' }}>Añadir</button>
</form>
{/* Mostramos la lista */}
<ul>
    {misiones.length === 0 ? (
        <p>No tienes misiones activas. ¡Ve a descansar!</p>
    ) : (
        // Usamos .map para transformar los textos en elementos de lista <li>
        misiones.map((mision, indice) => (
            <li key={indice} style={{ marginTop: '10px' }}>
                {mision}
                <button
                onClick={() => eliminarMision(indice)}
                style={{ marginLeft: '10px', color: 'red'}}
                >
                    Abandonar
                    </button>
                    </li>
                ))
            )}
        </ul>
    </div>
 )}

 export default GestorMisiones