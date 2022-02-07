# Getting start with web3

My first web3 app using React Js and Blocknative api

## BlockNative

Blocknative’s open-source JavaScript library to onboard users to Ethereum apps. Help your users transact with ease by enabling wallet selection, connection, wallet checks, and real-time state updates.

---

Steps I took to resolve webpack 5 issues:

- install 'crypto-browserify'
- Install 'react-app-rewired'
- create a file in file in the root directory called config-overrides.js
- Add the the following code to the above created file

```
const webpack = require('webpack');

 module.exports = function override(config, env) {
 //do stuff with the webpack config...

     config.resolve.fallback = {
         url: require.resolve('url'),
         assert: require.resolve('assert'),
         crypto: require.resolve('crypto-browserify'),
         http: require.resolve('stream-http'),
         https: require.resolve('https-browserify'),
         os: require.resolve('os-browserify/browser'),
         buffer: require.resolve('buffer'),
         stream: require.resolve('stream-browserify'),
     };
     config.plugins.push(
         new webpack.ProvidePlugin({
             process: 'process/browser',
             Buffer: ['buffer', 'Buffer'],
         }),
     );

     return config;

 }
```

- Go your package.json file and make this changes

```
"scripts": {
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
"eject": "react-app-rewired eject"
},
```

- Restart your dev server and you are good to go.
