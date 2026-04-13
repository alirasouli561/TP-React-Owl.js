## Rapport – TP React : Composant Owl.js

Pour ce TP, j'ai créé un composant fonctionnel `Owl` qui reçoit deux props : `image` (l'URL de l'image du hibou) et `description` (le texte descriptif associé). Le composant utilise la syntaxe JSX et respecte la structure d'un composant fonctionnel React.

J'ai utilisé le hook `useState` pour gérer un effet visuel au survol de l'image : lorsqu'on passe la souris sur un hibou, l'image s'agrandit légèrement avec un effet de lumière (bonus). J'ai également implémenté un rendu conditionnel : si aucune image n'est fournie, un message d'avertissement s'affiche à la place (bonus).

Dans `App.js`, j'ai importé et utilisé le composant `Owl` plusieurs fois avec des images et descriptions différentes, ce qui démontre la réutilisabilité du composant. Un quatrième composant sans image illustre le cas du rendu conditionnel.

Le code est commenté pour expliquer les choix techniques, et le CSS est séparé dans un fichier `Owl.css` dédié pour respecter les bonnes pratiques de séparation des responsabilités.
