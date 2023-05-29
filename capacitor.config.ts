import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'module.cros',
  appName: 'module-cros',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
