import type { ComboboxContentProps } from 'radix-vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ComboboxContentProps & {
    class?: any;
}>, {
    dismissable: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => void;
    pointerDownOutside: (event: import("node_modules/radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => void;
    focusOutside: (event: import("node_modules/radix-vue/dist/DismissableLayer").FocusOutsideEvent) => void;
    interactOutside: (event: import("node_modules/radix-vue/dist/DismissableLayer").PointerDownOutsideEvent | import("node_modules/radix-vue/dist/DismissableLayer").FocusOutsideEvent) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ComboboxContentProps & {
    class?: any;
}>, {
    dismissable: boolean;
}>>> & Readonly<{
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import("node_modules/radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => any) | undefined;
    onFocusOutside?: ((event: import("node_modules/radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: import("node_modules/radix-vue/dist/DismissableLayer").PointerDownOutsideEvent | import("node_modules/radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any) | undefined;
}>, {
    dismissable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};