import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

//必须实现至ExceptionFilter，固定写法，该接口只有一个catch方法
//catch方法参数：
//exception：当前正在处理的异常对象
//host：传递给原始处理程序的参数的一个包装(Response/Request)的引用
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception.getStatus(); //获取状态码
    const exceptionRes: any = exception.getResponse(); //获取响应对象
    const { error, message } = exceptionRes;

    //自定义的异常响应内容
    const msgLog = {
      status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error,
      message,
    };

    response.status(status).json(msgLog);
  }
}
