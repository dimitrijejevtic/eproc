import { TypeNamed } from '../m-interfaces/type-named';
import { Step } from './step';
import { ObjectInstance } from './object-instance';

export class Wizard implements TypeNamed {
  typeName = 'Wizard';
  steps: Step[];
  objectInstance: ObjectInstance;
}
