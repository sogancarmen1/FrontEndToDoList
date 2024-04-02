<template>
    <div>
      <!-- Utilisation de v-for pour parcourir le tableau de tableaux d'objets -->
      <div v-for="(tableauInterne, index) in tableauDeTableaux" :key="index">
        <h2>Tableau interne {{ index }}</h2>
        <!-- Utilisation de v-for pour parcourir les objets dans chaque tableau interne -->
        <div v-for="(objet, objetIndex) in tableauInterne" :key="objetIndex">
          <p>{{ objet.nom }}: {{ objet.valeur }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableauDeTableaux: [
          [{ nom: "Objet1", valeur: 1 }, { nom: "Objet2", valeur: 2 }],
          [{ nom: "Objet3", valeur: 3 }, { nom: "Objet4", valeur: 4 }]
        ]
      };
    }
  };
  </script>
  