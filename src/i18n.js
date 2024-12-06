import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
      "Registration": "Registration",
      "Accueil":"Home",
      "à propos":"About",
      "Connecter":"Login",
      "Bienvenue": "Welcome",  
      "à": "to",  
      "Stade": "Stadium",  
      "Billet": "Ticket",  
      "Réservation": "Booking",  
      "Réservez": "Book",  
      "Vos": "Your",  
      "Préférés": "Favorite",  
      "Événements": "Events",  
      "Vivez": "Experience",  
      "le": "the",  
      "frisson": "thrill",  
      "des": "of",  
      "en direct": "live",  
      "matchs": "matches",  
      "avec": "with",  
      "juste": "just",  
      "quelques": "a few",  
      "clics": "clicks",
     "Commencer" :"Get started",

     "Prénom": "First Name",  
      "Nom": "Last Name",  
      "Numéro de Mobile": "Mobile Number",  
      "Email": "Email",  
      "Mot de Passe": "Password",  
      "Sélectionner un Rôle": "Select Role",  
      "Vous avez déjà un compte?": "Already have an account?", 
      "Vous n'avez pas de compte?": "Don't have an account?",  
      "Tableau de Bord Administrateur": "Admin Dashboard",  
      "Connecté en tant que": "Logged in as",  
      "Rôle": "Role",  
      "ADMIN": "ADMIN",  

      "Voir le client": "View Client",  
      "Se déconnecter": "Log OUT",  
      "Rechercher par nom du client": "Search by Client Name",  
      "Rechercher": "Search",  
      "Retour": "Back",  
      "Trier par nom": "Sort by Name",  
      "Retour au tableau de bord": "Return to Dashboard",  
      "ID": "ID",  
      "Nom du client": "Client Name",  
      "Numéro de téléphone": "Phone Number",  
      "Classe de billet": "Ticket Class",  
      "Action": "Action",  
      "Modifier": "Edit",  
      "Supprimer": "Delete",  
      "Télécharger": "Download",  
      "Billet Réservé": "TICKET BOOKED",  
      "Réserver un billet": "Book Ticket",  
      "Photo de passeport": "Passport Photo",  
      "Soumettre": "Submit", 
      "RÉSERVEZ VOTRE BILLET AVEC NOUS": "BOOK YOUR TICKET WITH US",
      "Bienvenue": "Welcome",
        "à": "to",
        "Utilisateur": "User",
        "Tableau de bord": "Dashboard",
        "Administrateur": "Admin",
        "Sélectionner": "Select",
        "Billet": "Ticket",
        "Déconnexion": "Log",
        "OUT": "OUT",
        "Rechercher": "Search",
        "par": "by",
        "Client": "Client",
        "Nom": "Name",
        "Connecté": "Logged",
        "en tant que": "in",
        "comme": "as",
        "Voir": "View",
        "Filtrer avec la Classe de Billet":"Filter with Ticket Class"
      
      

    

    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next",
      "Registration":"Registrer",
      "Home":"Accueil",
      "About": "A propos",
      "Login":"Connecter",
      "Welcome": "Bienvenue",  
        "to": "à",  
        "Stadium": "Stade",  
        "Ticket": "Billet",  
        "Booking": "Réservation",  
        "Book": "Réservez",  
        "Your": "Vos",  
        "Favorite": "Préférés",  
        "Events": "Événements",  
        "Experience": "Vivez",  
        "the": "le",  
        "thrill": "frisson",  
        "of": "des",  
        "live": "en direct",  
        "matches": "matchs",  
        "with": "avec",  
        "just": "juste",  
        "a": "quelques",  
        "few": "clics",  
        "clicks": "clics" ,
        "Get started":"Commencer",

        "First Name": "Prénom",  
        "Last Name": "Nom",  
        "Mobile Number": "Numéro de Mobile",  
        "Email": "Email",  
        "Password": "Mot de Passe",  
        "Select Role": "Sélectionner un Rôle",  
        "Already have an account?": "Vous avez déjà un compte?", 
        "Don't have an account?": "Vous n'avez pas de compte?", 
        "Admin Dashboard": "Tableau de Bord Administrateur",  
        "Logged in as": "Connecté en tant que",  
        "Role": "Rôle",  
        "ADMIN": "ADMIN",
        "View Client": "Voir le client",  
        "Log OUT": "Déconnecter",  
        "Search by Client Name": "Rechercher par nom du client",  
        "Search": "Rechercher",  
        "Back": "Retour",  
        "Sort by Name": "Trier par nom",  
        "Return to Dashboard": "Retour au tableau de bord",  
        "ID": "ID",  
        "Client Name": "Nom du client",  
        "Phone Number": "Numéro de téléphone",  
        "Ticket Class": "Classe de billet",  
        "Action": "Action",  
        "Edit": "Modifier",  
        "Delete": "Supprimer",  
        "Download": "Télécharger",  
        "TICKET BOOKED": "Billet Réservé",  
        "Book Ticket": "Réserver un billet",  
        "Passport Photo": "Photo de passeport",  
        "Submit": "Soumettre",
        "BOOK YOUR TICKET WITH US": "RÉSERVEZ VOTRE BILLET AVEC NOUS",

        
          "Welcome": "Bienvenue",
          "to": "à",
          "User": "Utilisateur",
          "Dashboard": "Tableau de bord",
          "Admin": "Administrateur",
          "Select": "Sélectionner",
          "Ticket": "Billet",
          "Log": "Déconnexion",
          "OUT": "OUT",
          "Search": "Rechercher",
          "by": "par",
          "Client": "Client",
          "Name": "Nom",
          "Logged": "Connecté",
          "in": "en tant que",
          "as": "comme",
          "View": "Voir",
          "Filter with Ticket Class":"Filtrer avec la Classe de Billet"
        


     
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;