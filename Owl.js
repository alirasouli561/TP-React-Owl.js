import React from "react";

function Owl(props) {
  // Les props sont des données envoyées par le composant parent.
  const image = props.image;
  const description = props.description;

  // Le rendu conditionnel permet d'afficher un contenu différent selon une condition.
  const hasImage = image && image.trim() !== "";

  // On prépare le contenu avant le return pour garder le code clair.
  let imageContent;
  if (hasImage) {
    imageContent = <img src={image} alt={description} style={{ width: "220px", borderRadius: "8px" }} />;
  } else {
    imageContent = <p>Aucune image de hibou n'est disponible pour le moment.</p>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "12px", marginBottom: "12px", maxWidth: "260px" }}>
      {imageContent}
      <p>{description}</p>
    </div>
  );
}

export default Owl;
