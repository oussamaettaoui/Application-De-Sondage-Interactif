
                 Projet : Application de Sondage Interactif
Objectif : Créer une application web interactive permettant aux utilisateurs de créer, partager, et
répondre à des sondages.
Jour 1: Conception et Structure de Base
1. Création de la Structure de Base - Utiliser JSX pour construire l'interface utilisateur initiale.
• Page d'accueil
• Page de création de sondage
• Page de réponse au sondage
2. Implémentation de useState - Gérer l'état des composants (création du sondage, réponses, etc.).
Jour 2: Fonctionnalités Avancées et Finitions
4. Création de Formulaires Contrôlés - Développer des formulaires pour la soumission des
sondages.
5. Reverse Data Flow - Assurer la communication des données entre les composants parents et
enfants.
6. Tests et Débuggage - Tester l'application et corriger les bugs.
7. Présentation Finale - Chaque équipe présente son travail et reçoit des feedbacks.
Livrables :
• Code source de l'application
• Documentation du projet
• Présentation du fonctionnement de l'application
Critères d’Évaluation :
• Fonctionnalité de l'application
• Qualité et clarté du code
• Utilisation effective de React et des concepts enseignés
• Créativité et originalité dans la conception de l'interface utilisateur
Consignes :
Structure de Base du Projet
1. Configuration du Projet
• Utilisez vite pour initialiser un nouveau projet React.
• Structurez vos dossiers en séparant les composants, les services, et les utilitaires.
2. Composants de l'Application
• Composant HomePage : Affiche les sondages disponibles et un bouton pour créer un nouveau
sondage.
• Composant CreateSurvey : Formulaire pour créer un nouveau sondage.
• Composant Survey : Affiche un sondage spécifique et permet aux utilisateurs de répondre.
• Composant SurveyForm : Un formulaire contrôlé pour recueillir les réponses.
3. Gestion de l'État avec useState
• Utilisez useState pour gérer l'état local dans chaque composant, comme les données du
formulaire, les réponses des sondages, et l'état de chargement.
4. Formulaires Contrôlés par React
• Assurez-vous que tous les formulaires dans l'application sont contrôlés. Cela signifie que vous
utiliserez l'état React pour gérer tous les inputs.
5. Reverse Data Flow
• Utilisez des props pour passer des fonctions de mise à jour d'état aux composants enfants. Par
exemple, passez une fonction de mise à jour depuis le composant parent CreateSurvey vers le
composant enfant SurveyForm.
6. Navigation
• Utilisez react-router-dom pour gérer la navigation entre les différentes pages de l'application.






# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
