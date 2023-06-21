export interface NotificationError {
  message: string;
  context: string;
}

export class Notification {
  private readonly _errors: NotificationError[] = [];

  addError(error: NotificationError): void {
    this._errors.push(error);
  }

  hasErrors(): boolean {
    return this._errors.length > 0;
  }

  messages(context?: string): string {
    let message = "";
    this._errors.forEach((error) => {
      if (context === undefined || error.context === context) {
        message += `${error.context}: ${error.message},`;
      }
    });
    return message;
  }
}
