import { WebPlugin } from '@capacitor/core';
import { DemoPluginPlugin } from './definitions';
export declare class DemoPluginWeb extends WebPlugin implements DemoPluginPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const DemoPlugin: DemoPluginWeb;
export { DemoPlugin };
