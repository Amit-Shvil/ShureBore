
declare class MdMessageWindowCtrl {
    private $mdDialog;
    constructor($mdDialog: any);
    close($event: Event): void;
    cancel($event: Event): void;
    confirm($event: Event): void;
}

declare class MessageWindowCtrl {
    private wixModal;
    constructor(wixModal: any);
    close($event: Event): void;
    cancel($event: Event): void;
    confirm($event: Event): void;
}

declare class WixModalCustomExample {
    private wixModal;
    constructor(wixModal: any);
    confirm($event: Event): void;
}

declare module directives {
    class WixTabController {
        private $scope;
        isActive: boolean;
        tabIndex: number;
        label: string;
        disabled: boolean;
        constructor($scope: any);
        getLabel(): string;
    }
    function wixTab(): any;
    class WixTabsController {
        private _activeTabIndex;
        tabControllers: any[];
        constructor();
        onTabClick(tab: any): void;
        activeTabIndex: number;
        isActive(tab: any): boolean;
    }
    function wixTabs(): any;
}

interface IMyScope extends ng.IScope {
    steps: {
        name: string;
        state?: string;
    }[];
}
declare class WixWizard {
    constructor($scope: IMyScope, $element: ng.IAugmentedJQuery);
}
