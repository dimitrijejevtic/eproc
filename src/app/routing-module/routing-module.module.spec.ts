import { RoutingModule } from './routing-module.module';

describe('RoutingModuleModule', () => {
  let routingModuleModule: RoutingModule;

  beforeEach(() => {
    routingModuleModule = new RoutingModule();
  });

  it('should create an instance', () => {
    expect(routingModuleModule).toBeTruthy();
  });
});
