import { TypeNamed } from '../m-interfaces/type-named';
import { Step } from './step';
import { ObjectInstance } from './object-instance';

export class Wizard implements TypeNamed {
  //#region database fields
  Id: number;
  CaptionKey: string;
  DescriptionKey: string;
  AreImplementationVersionId: number;
  ExpressionVisibility: boolean;
  ExpressionReadOnly: boolean;
  ExpressionEditable: boolean;
  EntryEventId: number;
  FinishEventId: number;
  Comment: string;
  Status: number;
  //#endregion

  typeName = 'Wizard';
  steps: Step[];

  private _objectInstance: ObjectInstance;
  public get objectInstance(): ObjectInstance {
    return this._objectInstance;
  }
  public set objectInstance(v: ObjectInstance) {
    this._objectInstance = v;

  }
}
