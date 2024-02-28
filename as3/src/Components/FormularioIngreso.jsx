import { useState } from 'react'

const FormularioIngreso = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [pokemonFavorito, setPokemonFavorito] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };
  
  const handlePokemonFavorito = (event) => {
    setPokemonFavorito(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Mostrar en consola los datos ingresados
    console.log('Nombre:', nombre);
    console.log('Edad:', edad);
    console.log('pokemonFavorito:', pokemonFavorito);

    // Restablecer los campos del formulario después de enviar
    setNombre('');
    setEdad('');
    setPokemonFavorito('');
  };

  return (
    <div className="contenedor-formulario">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={handleNombreChange} />
        </label>
        <br />
        <label>
          Edad:
          <input type="text" value={edad} onChange={handleEdadChange} />
        </label>
        <br />
        <label>
          Pokemon Favorito:
          <input type="text" value={pokemonFavorito} onChange={handlePokemonFavorito} />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
  </div>
  );
};

export default FormularioIngreso;