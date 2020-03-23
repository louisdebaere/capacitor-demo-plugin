declare module "@capacitor/core" {
  interface PluginRegistry {
    DemoPlugin: DemoPluginPlugin;
  }
}

export interface DemoPluginPlugin {
  sum(options: { first: number, second: number}): Promise<{value: number}>;
}
