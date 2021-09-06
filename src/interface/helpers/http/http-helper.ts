import { NotFoundError, ServerError } from '../../errors';
import { HttpResponse, HttpStatusCode } from '../../protocols';

export const serverError = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.serverError,
  body: new ServerError(error.stack as any),
});

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: HttpStatusCode.badRequest,
  body: error,
});

export const ok = (data: any): HttpResponse => ({
  statusCode: HttpStatusCode.ok,
  body: data,
});

export const notFoundError = (paramName: string): HttpResponse => ({
  statusCode: HttpStatusCode.notFound,
  body: new NotFoundError(paramName),
});

export const noContent = (): HttpResponse => ({
  statusCode: HttpStatusCode.noContent,
});

export const created = (data: any): HttpResponse => ({
  statusCode: HttpStatusCode.created,
  body: data,
});
