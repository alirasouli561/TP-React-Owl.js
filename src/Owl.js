import React, { useState } from 'react';
import './Owl.css';

// Composant fonctionnel Owl qui affiche une image de hibou et un texte descriptif
// Les props "image" et "description" sont passées par le composant parent
function Owl({ image, description }) {

  // État pour gérer l'effet au survol (bonus)
  const [isHovered, setIsHovered] = useState(false);

  // Rendu conditionnel : si aucune image n'est fournie, on affiche un message d'erreur (bonus)
  if (!image) {
    return (
      <div className="owl-card">
        <p className="owl-no-image">Aucune image de hibou disponible.</p>
        {description && <p className="owl-description">{description}</p>}
      </div>
    );
  }

  // Rendu principal avec l'image et la description
  return (
    <div className="owl-card">
      {/* L'image reçoit un effet de zoom au survol grâce à l'état isHovered */}
      <img
        src={image}
        alt="Owl"
        className={`owl-image ${isHovered ? 'owl-image-hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {/* Affichage du texte descriptif passé en prop */}
      <p className="owl-description">{description}</p>
    </div>
  );
}

export default Owl;
