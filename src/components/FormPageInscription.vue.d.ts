declare const _default: import("vue").DefineComponent<any, {}, {
    nameValue: string;
    lastNameValue: string;
    emailValue: string;
    password: string;
    confirmPassword: string;
    isEqual: boolean;
    isNotCorrectEmail: boolean;
    emailRegex: RegExp;
    isEmpty: boolean;
    isDark: import("vue").WritableComputedRef<boolean, boolean>;
    showPassword: boolean;
    showTrueCheckBox: boolean;
}, {}, {
    onSubmit(): Promise<void>;
    showOrNotPassword(): void;
    showOrNotCheckBox(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
