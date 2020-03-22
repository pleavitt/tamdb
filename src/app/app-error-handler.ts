import { ErrorHandler, Injector, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { ErrorService } from './error.service';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: Error | HttpErrorResponse) {

        const notifier = this.injector.get(NotificationService);
        const errorService = this.injector.get(ErrorService);
        let message;
        let stackTrace;
        if (error instanceof HttpErrorResponse) {
            message = errorService.getServerMessage(error);
            notifier.showError("Network Error", null);
        }
        else {
            message = errorService.getClientMessage(error);
            stackTrace = errorService.getClientStack(error);
            notifier.showError("Application Error", null);
        }
        console.error(error);
    }
}