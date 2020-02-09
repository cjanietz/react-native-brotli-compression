/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import * as RNFS from "react-native-fs";
import {BrotliModule} from "react-native-brotli-compression"

const downloadAndDecompressFile = async () => {
    const targetPath = RNFS.DocumentDirectoryPath + '/' + 'test.br';
    const {promise} = RNFS.downloadFile({
        fromUrl: 'http://192.168.178.158:8080/test.txt.br',
        toFile: targetPath
    });
    const md5Hash = await RNFS.hash(targetPath, 'md5');
    console.log(md5Hash);
    const decompressedFilePath = targetPath + '.dec';
    await BrotliModule.decompressFile(targetPath, decompressedFilePath);
    const md5HashDec = await RNFS.hash(decompressedFilePath, 'md5');
    console.log(md5HashDec);
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title={'Compress'} onPress={null} />
        <Button title={'Decompress'} onPress={downloadAndDecompressFile} />
      </SafeAreaView>
    </>
  );
};
export default App;
