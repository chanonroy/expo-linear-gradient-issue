## Linear Gradient Unimodules Issue

To replicate:

Install packages
```
yarn
```

Run tests
```
yarn test
```

You should see the following error
```
TypeError: Cannot read property 'viewManagersNames' of undefined

      at requireNativeViewManager (node_modules/@unimodules/react-native-adapter/src/NativeViewManagerAdapter.tsx:26:31)
      at Object.<anonymous> (node_modules/expo-linear-gradient/src/NativeLinearGradient.ios.tsx:20:34)
      at Object.<anonymous> (node_modules/expo-linear-gradient/src/LinearGradient.tsx:5:1)

  console.warn
    The "UMNativeModulesProxy" native module is not exported through NativeModules; verify that @unimodules/react-native-adapter's native code is linked properly

      at CustomConsole.console.warn (node_modules/react-native/Libraries/YellowBox/YellowBox.js:71:9)
      at Object.<anonymous> (node_modules/@unimodules/react-native-adapter/src/NativeModulesProxy.ts:45:11)
      at Object.<anonymous> (node_modules/@unimodules/react-native-adapter/src/index.ts:2:1)
```
