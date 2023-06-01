import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionicreact.app',
  appName: 'ionicreact',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
