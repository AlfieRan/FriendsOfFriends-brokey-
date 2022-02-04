export type UserSignUp = ClientSignUp | ServerSignUp;

interface ClientSignUp {
  ClientSignUp: true;
  id: string;
  RefreshToken: string;
  AuthToken: string;
}

interface ServerSignUp {
  ClientSignUp: false;
  id: string;
}
