import { ENV } from './enviroment.config';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'bZaDtzZpvuNRwCnJdTq6qkTkOiiOwRBw',
  domain: 'cognitio-angular.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};