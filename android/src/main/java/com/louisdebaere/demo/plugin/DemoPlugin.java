package com.louisdebaere.demo.plugin;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class DemoPlugin extends Plugin {

    @PluginMethod()
    public void sum(PluginCall call) {
        Integer first = call.getInt("first");
        Integer second = call.getInt("second");
        Integer sum = first + second;
        JSObject ret = new JSObject();
        ret.put("sum", sum);
        call.success(ret);
    }
}
