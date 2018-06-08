export class PropertyRule {
  Id: number;
  Name: string;
  IsVisible: boolean;
  IsValid: boolean;
  IsReadOnly: boolean;
  Value: any;
  TargetType: TargetType;
}
export enum TargetType {
  Wizard = 1,
  Step = 2,
  Section = 3,
  Attribute = 4
}
