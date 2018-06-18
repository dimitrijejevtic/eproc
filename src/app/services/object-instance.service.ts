import { Injectable } from '@angular/core';
import { ObjectInstance } from '../m-models/object-instance';
import { HttpClient } from '@angular/common/http';
import { PropertyRule } from '../m-models/property-rule';
import { UrlResolver } from '../m-resolvers/url-resolver';
import { catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ObjectInstanceService extends UrlResolver<ObjectInstance> {

  private instances: ObjectInstance[];

  constructor(private http: HttpClient, private errorService: ErrorService) {
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
  }

  public removeById(id: number) {
    const exist = this.find(id);
    if (exist !== null) {
      const ind = this.instances.indexOf(exist);
      this.instances = this.instances.splice(ind, 1);
    }
  }
  /**
   * http method
   * @param id id of objectInstance from service store
   */
  public saveById(id: number, instance?: ObjectInstance) {

    if (instance === null)
     instance = this.find(id);

    if (instance !== null)
      this.http.post('rooturl', instance)
      .subscribe(() => {
        this.removeById(id);
      });
  }
  public validate(id: number, instance: ObjectInstance) {
    console.log(instance.toAssociative());
    return this.http.post<PropertyRule[]>(this.getCommandUrl('ExpressionEvaluateWizardStep') + '?Tag=1', instance.toAssociative())
    .pipe(catchError(this.errorService.handleNonRedirectError('expressionvalidation')));
  }

  applyConditions(id: number, rules: PropertyRule[]) {
    const instance = this.find(id);
    rules.forEach(rule => {
      const prop = instance.getPropertyByName(rule.Name);
      prop.IsReadOnly = rule.IsReadOnly;
      prop.isVisible = rule.IsVisible;

      if (rule.Value !== null) {
        prop.Value = rule.Value;
      }
    });
  }

  getPropertyOfInstance(instanceId: number, name: string) {
    const oi = this.find(instanceId);
    if (oi !== null)
      return oi.getPropertyByName(name);
    return null;
  }
  setPropertyOfInstance(instanceId: number, name: string, value: any) {
    const oi = this.find(instanceId);
    if (oi !== null)
      oi.setPropertyValue(name, value);
  }
  removePropertyOfInstance(instanceId: number, name: string) {
    const oi = this.find(instanceId);
    if (oi !== null)
      oi.removeProperty(name);
  }
}
