export enum EVENTS {
  dialogClose = '@tamentai-dialog:close',
  CLOSE = '@tamentai:close',
}

export class Events {
  constructor() {
    this.initListeners();
  }

  initListeners() {
    window.addEventListener('keydown', event => {
      if (event.code === 'Escape') this.close();
    });
  }

  close() {
    (document?.activeElement as HTMLElement).blur();
    dispatchEvent(new CustomEvent(EVENTS.CLOSE));
  }
}
