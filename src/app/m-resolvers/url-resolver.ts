import { TypeNamed } from '../m-interfaces/type-named';
import { Constants } from '../utils/constants';

export class UrlResolver<T extends TypeNamed> {
  readonly typename: string;
  constructor(private type: new () => T) {
        const instance = new type();
        this.typename = instance.typeName;

  }
  public getUrl(): string {
    let url = '';
    url = url.concat(Constants.rootUrl, Constants.apiUrl, this.typename);
    return url;
  }
  public getUrlWithFilter(params: any): string {
    let url = '';
    url = url.concat(Constants.rootUrl, Constants.apiUrl, this.typename, Constants.parameterStart, JSON.stringify(params));
    return url;
  }
  public getCommandUrl(command: string) {
    const url = ''.concat(Constants.rootUrl, Constants.apiUrl, 'command/', command);
    return url;
  }
  getQueryUrl(command: string) {
    const url = ''.concat(Constants.rootUrl, Constants.apiUrl, 'query/', command);
    return url;
  }
}

