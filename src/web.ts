import { WebPlugin } from '@capacitor/core';
import { DemoPluginPlugin } from './definitions';

export class DemoPluginWeb extends WebPlugin implements DemoPluginPlugin {
  constructor() {
    super({
      name: 'DemoPlugin',
      platforms: ['web']
    });
  }

  async sum(options: { first: number, second: number }): Promise<{ sum: number }> {
    const first = options.first;
    const second = options.second
    console.log('SUM', first, second);
    return { sum: first + second };
  }
}

const DemoPlugin = new DemoPluginWeb();

export { DemoPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(DemoPlugin);
