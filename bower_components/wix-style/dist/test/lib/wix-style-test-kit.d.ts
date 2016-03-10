
declare class WixModalServiceMock {
    dialogs: WixModalMock[];
    constructor();
    alert(): WixModalMock;
    open(dialog: any): this;
    then(callback: any): this;
    onConfirm(): void;
    onClose(): void;
}
declare class WixModalMock {
    private _title;
    private _content;
    private _confirm;
    private _cancel;
    _thenCallback: Function;
    title(title: any): WixModalMock;
    content(content: any): WixModalMock;
    confirm(confirm: any): WixModalMock;
    cancel(cancel: any): WixModalMock;
    matches(expected: WixModalMatcher): boolean;
    serialize(): {
        title: string;
        content: string;
        confirm: string;
        cancel: string;
    };
}
declare class WixModalMatcher {
    private _title;
    private _content;
    private _confirm;
    private _cancel;
    constructor();
    withTitle(title: any): WixModalMatcher;
    withContent(content: any): WixModalMatcher;
    withConfirm(confirm: any): WixModalMatcher;
    withCancel(cancel: any): WixModalMatcher;
    serialize(): {
        title: any;
        content: any;
        confirm: any;
        cancel: any;
    };
}
