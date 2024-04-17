import logo from './logo.png';
import './App.css';


/*

Se encargará de:

Mostrar la barra de navegación.
Renderizar el componente correspondiente a la sección que el usuario está viendo (Inicio, Jugadores, Equipos, Estadísticas, Top 5).
Manejar el estado global de la aplicación, como el jugador o equipo seleccionado.

*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Inicio del proyecto "Efootball Statistics", bienvenido!
        </p>
      </header>
    </div>
  );
}

export default App;
