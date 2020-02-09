package eu.janietz.brotli;

import com.facebook.common.internal.ByteStreams;
import com.facebook.react.bridge.*;
import org.brotli.dec.BrotliInputStream;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ReactNativeBrotliCompressionModule extends ReactContextBaseJavaModule {

    private static Logger LOG = Logger.getLogger("ReactNativeBrotliCompressionModule");
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
    public void decompressFile(String filePath, String targetPath, Callback callback) {
        Thread thread = new Thread(() -> {
            try {
                FileInputStream fileInputStream = new FileInputStream(filePath);
                BrotliInputStream inputStream = new BrotliInputStream(fileInputStream);
                FileOutputStream fileOutputStream = new FileOutputStream(targetPath);
                ByteStreams.copy(inputStream, fileOutputStream);
                callback.invoke(new Object[]{null});
            } catch (FileNotFoundException e) {
                WritableNativeMap map = new WritableNativeMap();
                map.putString("type", "NOT_FOUND");
                callback.invoke(map);
            } catch (IOException e) {
                WritableNativeMap map = new WritableNativeMap();
                map.putString("type", "IO_ERROR");
                map.putString("message", e.getMessage());
                map.putString("exception", e.toString());
                callback.invoke(map);
            } catch (Exception e) {
                WritableNativeMap map = new WritableNativeMap();
                map.putString("type", "GENERAL_ERROR");
                map.putString("message", e.getMessage());
                map.putString("exception", e.toString());
                LOG.log(Level.SEVERE, "Error when decompressing Brotli file", e);
                callback.invoke(map);
            }
        });
        thread.start();
    }
}
