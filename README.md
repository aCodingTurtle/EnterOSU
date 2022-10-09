How to actually get started with a React Native app:
- install node.js
- install Android Studio and Android SDKs
- then
```npx create-expo-app AwesomeProject
cd AwesomeProject
npm start # you can also use: npx expo start (--tunnel)```

- for actual good looking apps https://callstack.github.io/react-native-paper/getting-started.html
```npm install react-native-paper
npm install --save react-native-vector-icons```

- install navigation
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack

- firebase packages (jk it breaks expo go)
npm install --save @react-native-firebase/app
npm i @react-native-firebase/auth 

BACK DATABASE
    mySQL
BACKEND
    Flask
FRONTEND
    React Native

Back + Backend run on separate server
Frontend runs as separate app
Backs communicate with each other
Frontend communicates with backend via ip