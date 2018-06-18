import { Constants } from './constants';
import { envglobals } from '../../environments/environment';

export abstract class ConfigGlobal {
  abstract get Get(): Global;
}
export interface Global {
  apiUrl: string;
  rootUrl: string;
  protocol: string;
}
export class Config extends ConfigGlobal {
  get Get(): Global {
    const windowAny = <any>window;
    try {
      let globals = windowAny.globalVar;
      if (globals === undefined || globals === null) {
        globals = Object.assign({}, envglobals);
      }
      const global = Object.assign({}, globals) as Global;
      Constants.init(global);
      return global;
    } catch (error) {
      console.log('cannot read global variables');
      return null;
    }
  }
}
