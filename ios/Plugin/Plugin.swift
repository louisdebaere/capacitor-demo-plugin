import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(DemoPlugin)
public class DemoPlugin: CAPPlugin {
    
    @objc func sum(_ call: CAPPluginCall) {
        guard let first = call.getInt("first"),
            let second = call.getInt("second") else {
            call.reject("Received invalid input")
            return
        }
        let sum = first + second
        call.success(["sum": sum])
    }
}
