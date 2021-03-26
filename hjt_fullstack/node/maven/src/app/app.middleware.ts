import { Request, Response, NextFunction, response } from 'express';

export const defaultErrorHandler = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction,
    response
) => {
    if (error.message) {
        console.log(error.message,'---------');
        
    }
    let statusCode: number, message: string;
    /**
     * 处理异常
     */
    switch (error.message) {
        case 'NAME_IS_REQUIRED':
            statusCode = 400;
            message = "请提供用户名";
            break;
        case 'USER_DOES_NOT_EXIT':
            statusCode = 400;
            message = "请提供用户名";
            break;
        case 'PASSWORD_IS_REQUIRED':
            statusCode = 400;
            message = "请提供密码";
            break;
        case 'USER_ALERADY_EXSIT':
            statusCode = 409;
            message = "用户名已被占用";
            break;
        case 'USER_DOES_NOT_OWN_RESOURCE':
            statusCode = 403;
            message = "您不能处理内容";
            break;
        case 'UNAUTHORIZED':
            statusCode = 401 ;
            message = "请先登录"
            break;
        default:
            statusCode = 500;
            message = "未知错误!";
            break;
    }
    response.status(statusCode).send({message})
}