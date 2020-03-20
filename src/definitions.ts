declare module "@capacitor/core" {
  interface PluginRegistry {
    DemoPlugin: DemoPluginPlugin;
  }
}

export interface DemoPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
