# react-native-brotli-compression

[![npm version](https://badge.fury.io/js/react-native-brotli-compression.svg)](https://badge.fury.io/js/react-native-brotli-compression)

## Getting started

You will most likely combine this module with `react-native-fs` or something similar.

`$ npm install react-native-react-native-brotli-compression --save`
`$ yarn add react-native-react-native-brotli-compression`

### Mostly automatic installation

`$ react-native link react-native-react-native-brotli-compression`

## Compatibility

This module can currently only be used with Android.


## Usage
```javascript
import BrotliModule from 'react-native-react-native-brotli-compression';

await BrotliModule.decompressFile('file.br',  'output.br');
```

