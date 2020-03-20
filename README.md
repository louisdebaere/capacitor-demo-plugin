# Capacitor Plugin Demo
An example of a Capacitor plugin which make native Swift and Java code available for use in Typescript for an Ionic project

## Example of exposing native code
### iOS

Open `Plugin.swift`

A Capacitor plugin for iOS is a simple Swift class that extends CAPPlugin and has some exported methods that will be callable from Typescript.

```
@objc(MyPlugin)
public class MyPlugin: CAPPlugin {
  @objc func echo(_ call: CAPPluginCall) {
    let value = call.getString("value") ?? ""
    call.resolve([
        "value": value
    ])
  }
}
```

Each plugin method receives an instance of CAPPluginCall containing all the information of the plugin method invocation from the client.

#### Export to Capacitor

To make sure Capacitor can see your plugin, you must do two things: export your Swift class to Objective-C, and register it using the provided Capacitor Objective-C Macros.

```
CAP_PLUGIN(MyPlugin, "MyPlugin",
  CAP_PLUGIN_METHOD(echo, CAPPluginReturnPromise);
)
```

### Android

Open `EchoPlugin.java`

A Capacitor plugin for Android is a simple Java class that extends com.getcapacitor.Plugin and have a @NativePlugin annotation. It has some methods with @PluginMethod() annotation that will be callable from Typescript.

```
@NativePlugin()
public class EchoPlugin extends Plugin {

    @PluginMethod()
    public void echo(PluginCall call) {
        String value = call.getString("value");

        JSObject ret = new JSObject();
        ret.put("value", value);
        call.success(ret);
    }
}
```

Each plugin method receives an instance of com.getcapacitor.PluginCall containing all the information of the plugin method invocation from the client.

#### Export to Capacitor

By using the @NativePlugin and @PluginMethod() annotations in your plugins, you make them available to Capacitor, but you still need an extra step in your application to make Capacitor aware of the plugins.

This is done in your apps MainActivity, where you add it in e.g. `src/main/java/com/example/myapp/MainActivity.java` like so:

```
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(EchoPlugin.class);
    }});
  }
}
```
