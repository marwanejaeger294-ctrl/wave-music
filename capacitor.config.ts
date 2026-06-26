import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.wave.musicplayer',
  appName: 'WAVE',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: true
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
