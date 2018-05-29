import { TypeNamed } from '../m-interfaces/type-named';

export class User implements TypeNamed {
  typeName = 'User';
  constructor(public userName: string, public email: string, public password: string, public loggedOn?: string) {
  }
}
