import { TTokenPayload } from '@module/type/token.type';

export const SYSTEM_TOKEN: TTokenPayload = {
    userId: '9ae2ecbb-a4de-49f8-aa79-ff1a2ec9f2e3',
    loginId: 'system',
    name: 'system',
    loginType: 'system',
};

export const loggingMsgFormat = {
    user: { message: '${msg} (userId: ${userId}, loginId: ${loginId})', param: ['userId', 'loginId'] },
    auth: { message: '${msg} (userId: ${userId}, loginId: ${loginId})', param: ['userId', 'loginId'] },
    post: {},
    comment: {},
    like: {},
};
