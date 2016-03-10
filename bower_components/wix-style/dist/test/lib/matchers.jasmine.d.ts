
declare module jasmine {
    interface Matchers {
        toHaveBeenCalledOnce(): boolean;
        toBeOneOf(expected?: any): boolean;
        toHaveClass(expected?: any): boolean;
        toBeAPromise(): boolean;
        toContainMenuItemWith(expected: any): boolean;
        toMatchBiAdapter(expected: any): boolean;
        toMatchBiUrl(expected: any): boolean;
        toBeVisible(): boolean;
    }
}
declare function isSelfOrAncestorHasClass(actual: any, clazz: any): any;
declare function isHasClass(actual: any, clazz: any): any;
