"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
const axios_1 = __importDefault(require("axios"));
const debug_1 = __importDefault(require("debug"));
const colors_1 = __importDefault(require("colors"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const Debugger = debug_1.default('ts-dingtalk-robot');
class RobotOption {
}
class Robot {
    constructor(option = {}) {
        this.webhook = 'https://oapi.dingtalk.com/robot/send';
        Object.assign(this, option);
        if (!this.accessToken) {
            throw new Error('accessToken is required!');
        }
        if (!this.secret) {
            console.warn(colors_1.default.yellow('Secret is undefined'));
        }
    }
    getSign(timeStamp) {
        let signStr = '';
        if (this.secret) {
            signStr = crypto_js_1.default.enc.Base64.stringify(crypto_js_1.default.HmacSHA256(`${timeStamp}\n${this.secret}`, this.secret));
            Debugger('Sign string is %s, result is %s', `${timeStamp}\n${this.secret}`, signStr);
        }
        return signStr;
    }
    async request(body) {
        Debugger('Send message: %O ', body);
        try {
            const timestamp = Date.now();
            const sign = this.getSign(timestamp);
            const result = await axios_1.default.post(this.webhook, body, {
                params: {
                    timestamp,
                    sign,
                    access_token: this.accessToken,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            Debugger('Result is %s, %s。', result.data.errcode, result.data.errmsg);
            if (result.data.errcode === 310000) {
                console.error('Send Failed:', result.data);
                Debugger('Please check safe config : %O', result.data);
            }
            return result;
        }
        catch (error) {
            if (error.toJSON) {
                console.error(error.toJSON());
            }
            else {
                console.error(error);
            }
        }
    }
    async send(message) {
        let body = message.get();
        return this.request(body);
    }
}
exports.Robot = Robot;
//# sourceMappingURL=Robot.js.map