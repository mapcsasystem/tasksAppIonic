import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.macpsasystem.taskapp',
  appName: 'Tasks',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
};

export default config;
