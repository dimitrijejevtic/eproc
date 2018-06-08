import { PropertyField } from '../m-interfaces/property-field';
import { Component, ComponentFactoryResolver, Injectable, ComponentFactory } from '@angular/core';
import { TextInputComponent } from '../builder/text-input/text-input.component';
import { FormControl, Validators, FormGroup, ValidatorFn } from '@angular/forms';

@Injectable()
export class PropertyResolver<T extends PropertyField> {
  getComponent(resolver: ComponentFactoryResolver, property: T): ComponentFactory<any> {
    const component = resolver.resolveComponentFactory(property.getComponent());
    return component;
  }
  toFormGroup(prop: PropertyField[]) {
    const group: any = {};
    prop.forEach(pr => {
      group[pr.DictionaryAttributeParent.Name] = new FormControl({value: pr.Value || '', disabled: pr.IsReadOnly });
    });
    return new FormGroup(group);
  }
}
