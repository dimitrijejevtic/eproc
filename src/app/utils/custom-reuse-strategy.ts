import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router';

export class CustomReuseStrategy implements RouteReuseStrategy {
 private handlers: {[key: string]: DetachedRouteHandle } = {};

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return true;
  }
  store(route: ActivatedRouteSnapshot, handle: {}): void {
    this.handlers[route.url.join('/') || route.parent.url.join('/')] = handle;
  }
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.handlers[route.url.join('/')];
  }
  retrieve(route: ActivatedRouteSnapshot): {} {
    return this.handlers[route.url.join('/') || route.parent.url.join('/')];
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
