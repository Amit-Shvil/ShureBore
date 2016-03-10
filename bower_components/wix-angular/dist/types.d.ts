
declare module angular {
    interface IComponent {
        controller?: any;
        controllerAs?: string;
        bindings?: Object;
        template?: any;
        templateUrl?: any;
        restrict?: string;
        transclude?: any;
    }
    interface IModule {
        component(name: string, options: IComponent): IModule;
    }
}

declare class WixRoles {
    OWNER: string;
    CONTRIBUTOR: string;
    WIX_STAFF: string;
    constructor();
}

declare class WixAngularDemoHeightController {
    height: number;
    showContent: boolean;
    reportHeightChanged(height: any): void;
}

interface IWixHeightChangedAttributes extends ng.IAttributes {
    wixHeightChanged: string;
}
declare class WixHeightChangedCtrl {
    constructor($scope: ng.IScope, $attrs: IWixHeightChangedAttributes, wixHeightWatcher: WixHeightWatcher);
}

declare var Wix: any;
declare class WixTpaHeightChangedDirectiveCtrl implements ng.IDirective {
    constructor($scope: ng.IScope, wixHeightWatcher: WixHeightWatcher);
}

interface Manager<T> {
    contains(value: string | Array<string>): boolean;
    get(value: string): string;
    loadScope(scope: string): ng.IPromise<T>;
}

interface IAuthorizationInfo {
    permissions: Array<string>;
    isOwner: boolean;
    roles: Array<string>;
    ownerId: string;
}
declare class PermissionsDefinition {
    $$ownerId: string;
    $$roles: Array<string>;
    permissions: Array<string>;
    isOwner: boolean;
    constructor(json: IAuthorizationInfo);
}
declare class PermissionsDefinitionBuilder {
    ownerId: string;
    roles: Array<string>;
    permissions: Array<string>;
    isOwner: boolean;
    withPermissions(permissions: Array<string>): PermissionsDefinitionBuilder;
    withIsOwner(isOwner: boolean): PermissionsDefinitionBuilder;
    withOwnerId(ownerId: string): PermissionsDefinitionBuilder;
    withRoles(roles: Array<string>): PermissionsDefinitionBuilder;
    build(): PermissionsDefinition;
}

declare class IsPermitted {
    private permissionsManager;
    private wixManagerEval;
    constructor(permissionsManager: any, wixManagerEval: WixManagerEval);
    filter(input: string, permissionId: string, fallback: string, context?: string): string;
}

interface Window {
    jsonpExperiemts: any;
    loadExperimentScopeSync: Function;
    setExperimentsSync: Function;
}
declare class ExperimentManager implements Manager<{
    [name: string]: string;
}> {
    private provider;
    private $http;
    petriUrlPrefix: string;
    getExperimentValue: Function;
    isExperimentEnabled: Function;
    constructor(provider: ExperimentManagerProvider, $http: ng.IHttpService);
    get(value: string): string;
    contains(value: string): boolean;
    loadScope(scope: any): ng.IPromise<{}>;
    loadExperiment(name: any, fallback: any): ng.IPromise<{}>;
    $$queryPetri(params: any): ng.IPromise<{}>;
    $$getExperimentsObj(): any;
    private getPetriUrl(params);
    private getQueryParams(params);
}
declare class ExperimentManagerProvider {
    experiments: any;
    constructor();
    clearExperiments(): void;
    isExperimentEnabled(name: any): boolean;
    setExperiments(map: any): void;
    getExperimentValue(name: any): any;
    $get($injector: ng.auto.IInjectorService): ExperimentManager;
}

declare class PermissionsManager implements Manager<Array<string>> {
    private provider;
    private wixRoles;
    private permissionsContextMap;
    private contextGetter;
    private defaultContextKey;
    private defaultContextGetter;
    constructor(provider: PermissionsManagerProvider, wixRoles: WixRoles);
    contains(value: string, context?: string): boolean;
    get(value: string): string;
    loadScope(scope: string): ng.IPromise<Array<string>>;
    assignPermissionsMap(permissionsMap: {
        [context: string]: PermissionsDefinition;
    }): void;
    setContextGetter(contextGetter: Function): void;
    resetContextGetter(): void;
    $$getOwnerId(): string;
    $$getRoles(): Array<string>;
    $$isOwner(): boolean;
    private isWixStaff(roles);
    private getCurrentPermissionsDefinition();
    private hasPermission(permissionsDefinition, permission);
}
declare class PermissionsManagerProvider {
    permissionsDefinition: PermissionsDefinition;
    constructor();
    setAuthorizationInfo(authorizationInfo: IAuthorizationInfo): void;
    setPermissions(permissionsDefinition: PermissionsDefinition): void;
    $get($injector: ng.auto.IInjectorService): PermissionsManager;
}

declare module WixHeightWatcherModule {
    const HEIGHT_CHANGED_EVENT: string;
}
declare class WixHeightWatcher {
    private wixDebounce;
    private $document;
    private $rootScope;
    private $timeout;
    private height;
    constructor(wixDebounce: any, $document: ng.IDocumentService, $rootScope: ng.IRootScopeService, $timeout: any);
    private reportHeight(height);
    private checkHeight();
    subscribe(func: Function): Function;
}

declare class WixManagerEval {
    private wixConstValue;
    constructor(wixConstValue: any);
    eval(manager: any, expr: any, context?: string): boolean;
}
