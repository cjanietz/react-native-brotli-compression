import {NativeModules} from "react-native";

const { ReactNativeBrotliCompression } = NativeModules;

export interface CompressionOptions {

}

export interface ReactNativeBrotliCompression {
    compressFile(filepath: string): Promise<void>;
    decompressFile(filepath: string, targetPath: string, cb: (err) => void): Promise<void>;
}

export class _BrotliModule {
    private _moduleInstance: ReactNativeBrotliCompression = ReactNativeBrotliCompression;

    public decompressFile(filePath: string, targetPath?: string) {
        return new Promise((resolve, reject) => {
            if (!targetPath) {
                if (filePath.endsWith('.br')) {
                    targetPath = filePath.replace(/\.br$/, '');
                } else {
                    targetPath = `${filePath}.dec`;
                }
            }

            this._moduleInstance.decompressFile(filePath, targetPath, (err) => {
                if (!err) return resolve();
                reject(new Error(`General Error when decompressing ${filePath}`));
            });
        })
    }

}

export const BrotliModule = new _BrotliModule();
