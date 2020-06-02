import { Message } from './models';
declare class RobotOption {
    accessToken?: string;
    secret?: string;
}
export declare class Robot {
    private accessToken?;
    private secret?;
    private webhook;
    constructor(option?: RobotOption);
    private getSign;
    private request;
    send(message: Message): Promise<import("axios").AxiosResponse<any> | undefined>;
}
export {};
