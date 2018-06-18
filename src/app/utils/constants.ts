import { Global } from './config-globals';

export class Constants {
  static rootUrl: string;
  static apiUrl: string;
  static protocol: string;
  static parameterStart: string;
  static parameterAppend: string;

  public static init(config: Global) {
    Constants.rootUrl = config.rootUrl;
    Constants.protocol = config.protocol;
    Constants.apiUrl = config.apiUrl;
    Constants.parameterStart = '?';
    Constants.parameterAppend = '&';
  }
}

