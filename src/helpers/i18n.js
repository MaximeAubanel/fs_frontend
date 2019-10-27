import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      gb: {
        translation: {
          common: {
            or: 'or',
            join: 'Join'
          },
          account: {
            sign_in: 'Sign In',
            sign_up: 'Sign Up',
            username: 'Username',
            password: 'Password'
          },
          room: {
            create: 'Create room',
            join: 'Join room',
            empty: 'No existing rooms',
            name: 'Room name...'
          },
          game: {
            ready: 'Ready',
            am_ready: "I'm ready!",
            waiting: 'Waiting...'
          },
          home_desc:
            'But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.'
        }
      },
      fr: {
        translation: {
          common: {
            or: 'ou',
            join: 'Rejoindre'
          },
          account: {
            sign_in: 'Connexion',
            sign_up: 'Inscription',
            username: "Nom d'utilisateur",
            password: 'Mot de passe'
          },
          room: {
            create: 'Créer une room',
            join: 'Rejoindre une room',
            empty: 'Pas de rooms actives',
            name: 'Nom de la room...'
          },
          game: {
            ready: 'Prêt',
            am_ready: 'Je suis prêt!',
            waiting: 'En attente...'
          },
          home_desc:
            'Pour vous faire mieux connaitre d’où vient l’erreur de ceux qui blâment la volupté, et qui louent en quelque sorte la douleur, je vais entrer dans une explication plus étendue, et vous faire voir tout ce qui a été dit là-dessus par l’inventeur de la vérité, et, pour ainsi dire, par l’architecte de la vie heureuse.'
        }
      }
    },
    lng: 'gb',
    fallbackLng: 'gb',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
