import { Injectable } from '@angular/core';
import { ObjectInstance } from '../m-models/object-instance';
import { HttpClient } from '@angular/common/http';
import { PropertyRule } from '../m-models/property-rule';
import { UrlResolver } from '../m-resolvers/url-resolver';

@Injectable({
  providedIn: 'root'
})
export class ObjectInstanceService extends UrlResolver<ObjectInstance> {

  private instances: ObjectInstance[];

  constructor(private http: HttpClient) {
    super(ObjectInstance);
    this.instances = [];
  }
  public getInstance(id?: string) {
    return this.http.get<ObjectInstance>(this.getUrlWithFilter({id: id}));
  }
  public getInstances() {
    return this.http.get<ObjectInstance>(this.getUrl());
  }

  public find(id: number): ObjectInstance {
    let ins = null;
    console.log(this.instances);
    if (this.instances !== null) {
      this.instances.forEach(instance => {
        if (id === instance.id)
        ins = instance;
      });
    }
    return ins;
  }

  public setById(id: number, objectInstance: ObjectInstance) {
    let exist = this.find(id);
    if (exist !== null)
      exist = objectInstance;
    else
      this.instances.push(objectInstance);

    console.log('changed data: ');
    console.log(this.instances);
  }

  public removeById(id: number) {
    const exist = this.find(id);
    if (exist !== null) {
      const ind = this.instances.indexOf(exist);
      this.instances = this.instances.splice(ind, 1);
    }
  }
  public saveById(id: number) {
    const inst = this.find(id);
    if (inst !== null)
      this.http.post('rooturl', inst)
      .subscribe(() => {
        this.removeById(id);
      });
  }
  applyConditions(id: number, rules: PropertyRule[]) {
    const instance = this.find(id);
    rules.forEach(rule => {
      const prop = instance.getPropertyByName(rule.name);
      prop.expressionReadOnly = rule.expressionReadOnly;
      prop.expressionVisibility = rule.expressionVisibility;

      if (rule.value !== null) {
        prop.value = rule.value;
      }
    });

  }
}
