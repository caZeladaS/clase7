
import FormularioIngreso from './Components/FormularioIngreso';
import './App.css';

const App = () => {
  console.log('Renderizando App');

  return (
    <div className="contenedor">
      <h1>Formulario de Ingreso</h1>
      <FormularioIngreso />
    </div>
  );
};

export default App;
