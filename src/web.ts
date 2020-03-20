import { WebPlugin } from '@capacitor/core';
import { DemoPluginPlugin } from './definitions';

export class DemoPluginWeb extends WebPlugin implements DemoPluginPlugin {
  constructor() {
    super({
      name: 'DemoPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const DemoPlugin = new DemoPluginWeb();

export { DemoPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DemoPlugin);
