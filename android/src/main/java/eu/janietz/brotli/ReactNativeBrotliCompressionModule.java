package eu.janietz.brotli;

import com.facebook.common.internal.ByteStreams;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import org.brotli.dec.BrotliInputStream;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class ReactNativeBrotliCompressionModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public ReactNativeBrotliCompressionModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "ReactNativeBrotliCompression";
    }

    @ReactMethod
    public void decompress(String filePath, String targetPath, Callback callback) {
        Thread thread = new Thread(() -> {
            try {
                FileInputStream fileInputStream = new FileInputStream(filePath);
                BrotliInputStream inputStream = new BrotliInputStream(fileInputStream);
                FileOutputStream fileOutputStream = new FileOutputStream(targetPath);
                ByteStreams.copy(inputStream, fileOutputStream);
                callback.invoke(null, null);
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            } catch (Exception e) {

            }
        });
        thread.start();
    }
}
