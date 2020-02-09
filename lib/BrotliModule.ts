import {NativeModules} from "react-native";

const { ReactNativeBrotliCompression } = NativeModules;

export interface CompressionOptions {

}

export interface ReactNativeBrotliCompression {
    compressFile(filepath: string): Promise<void>;
    decompressFile(filepath: string): Promise<void>;
}

export class _BrotliModule {
    private _moduleInstance: ReactNativeBrotliCompression = ReactNativeBrotliCompression;

}

export const BrotliModule = new _BrotliModule();
