import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Smartlista',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    hostname: "https://smartlista-api.test"
  }
};

export default config;
