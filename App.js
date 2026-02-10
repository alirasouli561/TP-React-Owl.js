import React from "react";
import Owl from "./Owl";

function App() {
  // Ce composant est réutilisable car on peut lui passer des props différentes.
  const owlImage1 = "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?auto=format&fit=crop&w=600&q=80";
  const owlImage2 = "https://images.unsplash.com/photo-1474511016485-ec5c3d65d43f?auto=format&fit=crop&w=600&q=80";

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Galerie de hiboux</h1>

      <Owl image={owlImage1} description="Un hibou perché sur une branche pendant la nuit." />

      <Owl image={owlImage2} description="Un hibou au regard attentif dans la forêt." />

      <Owl image="" description="Ce hibou n'a pas encore d'image, message affiché grâce au rendu conditionnel." />
    </div>
  );
}

export default App;
