import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'B1Pos',
  webDir: 'www',
  bundledWebRuntime: false,
  // CAPACITOR_ANDROID_STUDIO_PATH: "/home/radioactive/android-studio/bin/studio.sh"
};
export interface PluginsConfig {
  [CAPACITOR_ANDROID_STUDIO_PATH: string]: | {
        [CAPACITOR_ANDROID_STUDIO_PATH: string]: '/home/radioactive/android-studio/bin/studio.sh';
      }
    | undefined;
}
export default config;
