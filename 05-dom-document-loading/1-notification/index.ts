import { createElement } from "../../shared/utils/create-element";

interface Options {
  target?: HTMLElement;
  message?: string;
  options?: {
    duration?: number;
    type?: string;
  };
}

export default class NotificationMessage {
  static activeNotification: NotificationMessage | null = null;
  public element: HTMLElement | undefined;
  public message: string;
  public timerId: ReturnType<typeof setTimeout> | undefined;
  private options: { duration: number; type: string } = { duration: 0, type: 'success' };

  constructor({ target, message = "", options }: Options = {}) {
    this.message = message;
    this.target = target;
    this.timerId = undefined;
    this.options = {
      duration: options?.duration || 0,
      type: options?.type || "success",
    };

    if (NotificationMessage.activeNotification) {
      NotificationMessage.activeNotification.remove();
    }
    NotificationMessage.activeNotification = this;
  }

  show() {
    if( this.element && document.body.contains(this.element) ) {
      this.element.remove();
    }
 
    this.element = createElement(`
      <div class="notification ${this.options?.type ? `${this.options.type}` : 'error'}" style="--value:${this.options?.duration ? this.options.duration / 1000 : 0}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">
            ${this.options?.type ? `${this.options.type}` : ''}
          </div>
          <div class="notification-body">
            ${this.message}
          </div>
        </div>
      </div>
    `);
 
    if (this.element) {
      document.body.append(this.element);
    }
 
    if  (this.options?.duration  ) {
      this.timerId = setTimeout( () => {
        this.remove();
      }, this.options.duration);
    }
    
  }

  remove() {
  clearTimeout(this.timerId);
  this.timerId = undefined;
  if (this.element && document.body.contains(this.element)) {
    this.element.remove();
    this.element = undefined;
  }
}
  destroy() {
    this.remove();
    if (NotificationMessage.activeNotification === this) {
      NotificationMessage.activeNotification = null;
    }
  }

}
