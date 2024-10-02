export declare function getData(route: string, paramsValue?: any): Promise<any>;
export declare function postData(route: string, dataEntered?: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function deleteData(route: string): Promise<void>;
export declare function updateData(route: string, newData?: any): Promise<import("axios").AxiosResponse<any, any>>;
export declare function getDataById(route: string): Promise<any>;
