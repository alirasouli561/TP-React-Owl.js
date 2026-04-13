import './App.css';
// Importation du composant Owl
import Owl from './Owl';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Galerie de Hiboux</h1>

        <div className="owl-gallery">
          {/* Utilisation du composant Owl avec différentes images et descriptions */}
          <Owl
            image="/images/owl1.jpg"
            description="Le Grand-duc d'Europe est l'un des plus grands hiboux du monde."
          />

          <Owl
            image="/images/owl2.jpg"
            description="La Chevêche d'Athéna est un petit rapace nocturne très répandu en Europe."
          />

          <Owl
            image="/images/owl3.jpg"
            description="Le Harfang des neiges habite les régions arctiques."
          />

          {/* Cas sans image pour tester le rendu conditionnel (bonus) */}
          <Owl
            image=""
            description="Ce hibou mystérieux n'a pas encore été photographié."
          />
        </div>
      </header>
    </div>
  );
}

export default App;
