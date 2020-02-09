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
        fromUrl: 'https://filebin.net/jgvg4avfdi1zx8in/test.txt.br?t=1o3d3r67',
        toFile: targetPath
    });
    const md5Hash = await RNFS.hash(targetPath, 'md5');
    console.log(md5Hash);
    BrotliModule
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
