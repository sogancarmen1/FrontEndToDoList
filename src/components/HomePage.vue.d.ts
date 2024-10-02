declare const _default: import("vue").DefineComponent<any, {
    projects: import("vue").Ref<never[], never[]>;
    showImage: import("vue").Ref<boolean, boolean>;
    isEmptyProject: import("vue").Ref<boolean, boolean>;
    showLoader: import("vue").Ref<boolean, boolean>;
}, {
    revele: boolean;
    receivedId: {};
    receivedId1: {};
    receiveProject: {};
    reveleProfil: boolean;
    reveledetails: boolean;
    reveleUpdateTask: boolean;
    name: string;
    dueDate: string;
    priority: string;
    status: string;
    inProject: string;
    nameUpdate: string;
    inProjectUpdate: string;
    count: number;
    count2: number;
    isChecked: boolean;
    reveleButtonUpDown: boolean;
    reveleButtonDropDown: boolean;
    reveleCreateProjectForm: boolean;
    isProjectSelected: boolean;
    isSettingsSeleted: boolean;
    reveleRemovePage: boolean;
    isHovered: boolean;
    isParameterProjectSelected: boolean;
    isMouseOver: boolean;
    valueSend: boolean;
    reveleRemoveProject: boolean;
    reveleUpdateProject: boolean;
    selectedTask: {};
    selectedProject: {};
    moonIsSelected: boolean;
    sunIsSelected: boolean;
    valueFixed: boolean;
    valueFixedOther: boolean;
    isDark: import("vue").WritableComputedRef<boolean, boolean>;
    toggleDark: (value?: boolean | undefined) => boolean;
}, {}, {
    tooglesunIsSelected(): void;
    tooglemoonIsSelected(): void;
    toogleUpdateProject(value: any): void;
    editProject(data: any): void;
    toogleReveleRemoveProject(value: any): void;
    deleteProject(value: any): Promise<void>;
    toogleHover(value2: any): void;
    toogleHoverMouseLeave(): void;
    toogleReveleRemovePage(value: any, value2: any): void;
    deleteTask(value: any, value2: any): Promise<void>;
    toogleSettingsToProject(): void;
    toogleProjectToSettings(): void;
    showOrNotImage(): void;
    showCreateTaskButton(): void;
    toggleReveleCreateProjectForm(): void;
    tooglereveleTaskList(projectId: any): void;
    toogleNonReveleTaskList(projectId: any): void;
    tooglereveledetail(value: any, value2: any): void;
    toggleProfil(): void;
    toggleModale(): void;
    tooglereveleUpdateTask(value: any, value2: any): void;
    formSubmittedUpdate(data: any): void;
    handleFormSubmitted(data: any): void;
    formProjectSubmitted(data: any): Promise<void>;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {
    theloader: import("vue").DefineComponent<any, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    addtask: import("vue").DefineComponent<any, {}, {
        id: number;
        name: string;
        dueDate: string;
        priority: string;
        status: string;
        inProject: string;
        description: string;
        isEmpty: boolean;
        nameOfModale: string;
    }, {}, {
        resetForm(): void;
        onSubmit(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    voirprofil: import("vue").DefineComponent<any, {}, {}, {}, {
        onSubmit(): Promise<void>;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    voirdetail: import("vue").DefineComponent<any, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    updatetask: import("vue").DefineComponent<any, {}, {
        isEmpty: boolean;
        nameOfModale: string;
        autre: string;
    }, {}, {
        onSubmit(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    logopage: import("vue").DefineComponent<any, {}, {}, {}, {
        onSubmit(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    addproject: import("vue").DefineComponent<any, {}, {
        id: number;
        nameOfProject: string;
        description: string;
        isEmpty: boolean;
        nameOfModale: string;
    }, {}, {
        resetForm(): void;
        onSubmit(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    settingpage: import("vue").DefineComponent<any, {}, {
        reveleProfil: boolean;
    }, {}, {
        toggleProfil(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {
        sidebar: import("vue").DefineComponent<any, {
            firstName: import("vue").Ref<string, string>;
            lastName: import("vue").Ref<string, string>;
        }, {
            date: Date;
            myValue: string;
        }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        topbar: import("vue").DefineComponent<any, {}, {
            isDark: import("vue").WritableComputedRef<boolean, boolean>;
        }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {
            logopage: import("vue").DefineComponent<any, {}, {}, {}, {
                onSubmit(): void;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
            voirprofil: import("vue").DefineComponent<any, {}, {}, {}, {
                onSubmit(): Promise<void>;
            }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        voirprofil: import("vue").DefineComponent<any, {}, {}, {}, {
            onSubmit(): Promise<void>;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    removetask: import("vue").DefineComponent<any, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    parameterproject: import("vue").DefineComponent<any, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    voirdetailparameter: import("vue").DefineComponent<any, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    deleteproject: import("vue").DefineComponent<any, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    updateproject: import("vue").DefineComponent<any, {}, {
        isEmpty: boolean;
        nameOfModale: string;
        isSelectedProject: boolean;
    }, {}, {
        onSubmit(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    formpageconnexion: import("vue").DefineComponent<any, {}, {
        emailValue: string;
        password: string;
        showError: boolean;
        isDark: import("vue").WritableComputedRef<boolean, boolean>;
        showPassword: boolean;
        showTrueCheckBox: boolean;
    }, {}, {
        onSubmit(): Promise<void>;
        showOrNotPassword(): void;
        showOrNotCheckBox(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    sidebar: import("vue").DefineComponent<any, {
        firstName: import("vue").Ref<string, string>;
        lastName: import("vue").Ref<string, string>;
    }, {
        date: Date;
        myValue: string;
    }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    topbar: import("vue").DefineComponent<any, {}, {
        isDark: import("vue").WritableComputedRef<boolean, boolean>;
    }, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {
        logopage: import("vue").DefineComponent<any, {}, {}, {}, {
            onSubmit(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        voirprofil: import("vue").DefineComponent<any, {}, {}, {}, {
            onSubmit(): Promise<void>;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<any> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
