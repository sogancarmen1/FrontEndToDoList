export declare const stores: import("vue").Ref<{
    id: number;
    nameIcon: string;
    textWithIcon: string;
    title: string;
    nameRoute: string;
    isSelectedAccueil: boolean;
}[], {
    id: number;
    nameIcon: string;
    textWithIcon: string;
    title: string;
    nameRoute: string;
    isSelectedAccueil: boolean;
}[] | {
    id: number;
    nameIcon: string;
    textWithIcon: string;
    title: string;
    nameRoute: string;
    isSelectedAccueil: boolean;
}[]>;
export declare function path(value: Number): string;
export declare const projectsAndEquipe: import("vue").Ref<{
    id: number;
    firstNameIcon: string;
    secondeFormFirstNameIcon: string;
    secondNameIcon: string;
    title: string;
    thirdNameIcon: string;
    fourNameIcon: string;
    isSelect: boolean;
    showValue: boolean;
    listOfProject: any[];
}[], {
    id: number;
    firstNameIcon: string;
    secondeFormFirstNameIcon: string;
    secondNameIcon: string;
    title: string;
    thirdNameIcon: string;
    fourNameIcon: string;
    isSelect: boolean;
    showValue: boolean;
    listOfProject: import("vue").Ref<any[], any[]>;
}[] | {
    id: number;
    firstNameIcon: string;
    secondeFormFirstNameIcon: string;
    secondNameIcon: string;
    title: string;
    thirdNameIcon: string;
    fourNameIcon: string;
    isSelect: boolean;
    showValue: boolean;
    listOfProject: any[];
}[]>;
export declare const footerContent: import("vue").Ref<{
    firstNameIcon: string;
    title: string;
}[], {
    firstNameIcon: string;
    title: string;
}[] | {
    firstNameIcon: string;
    title: string;
}[]>;
export declare const iconAndText: {
    id: number;
    icon: string;
    text: string;
}[];
export declare const iconAndTextPlus: {
    id: number;
    icon: string;
    text: string;
}[];
export declare const showModalProject: import("vue").Ref<boolean, boolean>;
export declare const showModalProjectPlus: import("vue").Ref<boolean, boolean>;
export declare function toggleAndHidden(): void;
export declare function toggleAndHiddenOther(): void;
