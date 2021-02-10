[![VideoPlayerComponent][logo]]()

# Vide Player Component

## About The Project

This is a challenge wich include the following features

- Show a thumbnail image while the video is loading
- Ability to go to full screen mode when users move the device to landscape on
  both platforms
- Ability to play/pause/etc
- Ability to send events back when things such as video start, stop and end
  occur.
- Show a rating control when video ends allowing users to rate the video
  (doesn’t need to be a pretty UI)

## Built With

- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [React Native Video](https://github.com/react-native-video/react-native-video/)

[logo]:
  https://es.seaicons.com/wp-content/uploads/2015/09/Video-Camera-2-icon.png

## Features

- Jest Runners Ready (ESlint, Codebase that runs in paralell)
- CI detection
- Pre-push testing enforcement
- Custom prettier rules
- Environment variables ready
- Commit linted code automatically

### Structure

Although this is a simple video component demostration app, its enhanced with
the latest testing and collaborating tools in order to support fast growing
teams and complexity.

```
root/
    ├── .buckconfig
    ├── .env.example        // Environment variables
    ├── .eslintrc.js        // Custom ESLint config
    ├── .flowconfig
    ├── .gitattributes
    ├── .gitignore
    ├── .huskyrc            // Enforce testing on commit
    ├── .lintstagedrc       // Commit linted code
    ├── .prettierrc.js      // Custom prettier config
    ├── .watchmanconfig
    ├── README.md
    ├── android
    ├── app.json
    ├── babel.config.js
    ├── index.js            // Entrypoint
    ├── ios
    ├── jest.client.js      // Custom jest code runner
    ├── jest.lint.js        // Cistom jest linting runner
    ├── metro.config.js
    ├── node_modules
    ├── package.json        // Custom RN scripts
    ├── src                 // Main proyect
          ├── App.jsx
          ├── __tests__     // Tests
          ├── components    // Base Components
          ├── media         // Media sources
          └── screens       // Screens

```
