export declare const useUserStore: import("pinia").StoreDefinition<"user", {
    userData: null;
    informations: string;
}, {}, {
    setUserData(data: any): void;
    getUserInformations(): Promise<void>;
}>;
export declare const members: import("pinia").StoreDefinition<"members", {
    member: import("vue").Ref<string[], string[]>;
}, {}, {
    setAllMember(data: any): void;
}>;
export declare const assignTo: import("pinia").StoreDefinition<"tache", {
    userAssigned: import("vue").Ref<string, string>;
    userAssignedStore: import("vue").Ref<any[], any[]>;
}, {}, {
    setAllMember(data: any): void;
}>;
export declare const useModalDetailStore: import("pinia").StoreDefinition<"details", {
    valueOfDetail: import("vue").Ref<{
        id?: number | undefined;
        name?: string | undefined;
        dueDate?: Date | undefined;
        priority?: string | undefined;
        status?: string | undefined;
        taskDescription?: string | undefined;
        assignedTo?: string | undefined;
    }, {
        id?: number | undefined;
        name?: string | undefined;
        dueDate?: Date | undefined;
        priority?: string | undefined;
        status?: string | undefined;
        taskDescription?: string | undefined;
        assignedTo?: string | undefined;
    } | {
        id?: number | undefined;
        name?: string | undefined;
        dueDate?: Date | undefined;
        priority?: string | undefined;
        status?: string | undefined;
        taskDescription?: string | undefined;
        assignedTo?: string | undefined;
    }>;
    descriptionValue: string;
    idTask: number;
}, {}, {
    getDetailTask(value: number): Promise<{
        id?: number | undefined;
        name?: string | undefined;
        dueDate?: Date | undefined;
        priority?: string | undefined;
        status?: string | undefined;
        taskDescription?: string | undefined;
        assignedTo?: string | undefined;
    }>;
    setId(value: number): void;
    setDescription(value: string): void;
}>;
export declare const useTaskStore: import("pinia").StoreDefinition<"tasks", Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
    getAllTasksInProject: (projectId: any) => Promise<any>;
    tasks: import("vue").Ref<any[], any[]>;
}, "tasks" | "revele">, Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
    getAllTasksInProject: (projectId: any) => Promise<any>;
    tasks: import("vue").Ref<any[], any[]>;
}, never>, Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
    getAllTasksInProject: (projectId: any) => Promise<any>;
    tasks: import("vue").Ref<any[], any[]>;
}, "toggleRevele" | "getAllTasksInProject">>;
export declare const useAssignToStore: import("pinia").StoreDefinition<"assignStore", Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
    toggleReveleAndShowTaskId: (value: any) => void;
    taskId: import("vue").Ref<number, number>;
}, "revele" | "taskId">, Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
    toggleReveleAndShowTaskId: (value: any) => void;
    taskId: import("vue").Ref<number, number>;
}, never>, Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
    toggleReveleAndShowTaskId: (value: any) => void;
    taskId: import("vue").Ref<number, number>;
}, "toggleRevele" | "toggleReveleAndShowTaskId">>;
export declare const useTaskOnProjectStore: import("pinia").StoreDefinition<"tasksOnProject", Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
    getAllTasksInProject: (projectId: any) => Promise<any>;
    tasks: import("vue").Ref<any[], any[]>;
}, "tasks" | "revele">, Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
    getAllTasksInProject: (projectId: any) => Promise<any>;
    tasks: import("vue").Ref<any[], any[]>;
}, never>, Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
    getAllTasksInProject: (projectId: any) => Promise<any>;
    tasks: import("vue").Ref<any[], any[]>;
}, "toggleRevele" | "getAllTasksInProject">>;
export declare const useAddCollaboratorStore: import("pinia").StoreDefinition<"add collaborator", Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    projectId: import("vue").Ref<number, number>;
    toggleRevele: () => void;
    toggleReveleWithValue: (value: any) => void;
}, "revele" | "projectId">, Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    projectId: import("vue").Ref<number, number>;
    toggleRevele: () => void;
    toggleReveleWithValue: (value: any) => void;
}, never>, Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    projectId: import("vue").Ref<number, number>;
    toggleRevele: () => void;
    toggleReveleWithValue: (value: any) => void;
}, "toggleRevele" | "toggleReveleWithValue">>;
export declare const useProjectStore: import("pinia").StoreDefinition<"projectsCreate", Pick<{
    showModalOfAddProject: import("vue").Ref<boolean, boolean>;
    toggleModalAddProject: () => void;
    reveleInput: import("vue").Ref<boolean, boolean>;
    reveleText: import("vue").Ref<boolean, boolean>;
    toggleReveleInput: () => Promise<void>;
    resetView: () => void;
    projectName: import("vue").Ref<string, string>;
    onSubmit: (value: any) => Promise<void>;
    getProjectById: (value: any) => Promise<void>;
}, "showModalOfAddProject" | "reveleInput" | "reveleText" | "projectName">, Pick<{
    showModalOfAddProject: import("vue").Ref<boolean, boolean>;
    toggleModalAddProject: () => void;
    reveleInput: import("vue").Ref<boolean, boolean>;
    reveleText: import("vue").Ref<boolean, boolean>;
    toggleReveleInput: () => Promise<void>;
    resetView: () => void;
    projectName: import("vue").Ref<string, string>;
    onSubmit: (value: any) => Promise<void>;
    getProjectById: (value: any) => Promise<void>;
}, never>, Pick<{
    showModalOfAddProject: import("vue").Ref<boolean, boolean>;
    toggleModalAddProject: () => void;
    reveleInput: import("vue").Ref<boolean, boolean>;
    reveleText: import("vue").Ref<boolean, boolean>;
    toggleReveleInput: () => Promise<void>;
    resetView: () => void;
    projectName: import("vue").Ref<string, string>;
    onSubmit: (value: any) => Promise<void>;
    getProjectById: (value: any) => Promise<void>;
}, "onSubmit" | "toggleModalAddProject" | "toggleReveleInput" | "resetView" | "getProjectById">>;
export declare const useProjectsStore: import("pinia").StoreDefinition<"projects", Pick<{
    projects: import("vue").Ref<any[], any[]>;
    countCompletedTasks: import("vue").Ref<number, number>;
    countOnGoingTasks: import("vue").Ref<number, number>;
    countPendingTasks: import("vue").Ref<number, number>;
    countOverdueTasks: import("vue").Ref<number, number>;
    addProject: (value: any, id: Number) => void;
    fetchProjects: () => Promise<void>;
    addNewProject: (value: any) => void;
    projectId: import("vue").Ref<number, number>;
}, "projects" | "projectId" | "countCompletedTasks" | "countOnGoingTasks" | "countPendingTasks" | "countOverdueTasks">, Pick<{
    projects: import("vue").Ref<any[], any[]>;
    countCompletedTasks: import("vue").Ref<number, number>;
    countOnGoingTasks: import("vue").Ref<number, number>;
    countPendingTasks: import("vue").Ref<number, number>;
    countOverdueTasks: import("vue").Ref<number, number>;
    addProject: (value: any, id: Number) => void;
    fetchProjects: () => Promise<void>;
    addNewProject: (value: any) => void;
    projectId: import("vue").Ref<number, number>;
}, never>, Pick<{
    projects: import("vue").Ref<any[], any[]>;
    countCompletedTasks: import("vue").Ref<number, number>;
    countOnGoingTasks: import("vue").Ref<number, number>;
    countPendingTasks: import("vue").Ref<number, number>;
    countOverdueTasks: import("vue").Ref<number, number>;
    addProject: (value: any, id: Number) => void;
    fetchProjects: () => Promise<void>;
    addNewProject: (value: any) => void;
    projectId: import("vue").Ref<number, number>;
}, "addProject" | "fetchProjects" | "addNewProject">>;
export declare const useProjectParameterStore: import("pinia").StoreDefinition<"parameter of project", Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
}, "revele">, Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
}, never>, Pick<{
    revele: import("vue").Ref<boolean, boolean>;
    toggleRevele: () => void;
}, "toggleRevele">>;
import { Member } from "@/Interfaces/interface";
export declare const useMemberStore: import("pinia").StoreDefinition<"member of project", Pick<{
    members: import("vue").Ref<{
        id: number;
        email: string;
        roleType: string;
    }[], Member[] | {
        id: number;
        email: string;
        roleType: string;
    }[]>;
    getAllMembersInProject: (value: any) => Promise<void>;
}, "members">, Pick<{
    members: import("vue").Ref<{
        id: number;
        email: string;
        roleType: string;
    }[], Member[] | {
        id: number;
        email: string;
        roleType: string;
    }[]>;
    getAllMembersInProject: (value: any) => Promise<void>;
}, never>, Pick<{
    members: import("vue").Ref<{
        id: number;
        email: string;
        roleType: string;
    }[], Member[] | {
        id: number;
        email: string;
        roleType: string;
    }[]>;
    getAllMembersInProject: (value: any) => Promise<void>;
}, "getAllMembersInProject">>;
