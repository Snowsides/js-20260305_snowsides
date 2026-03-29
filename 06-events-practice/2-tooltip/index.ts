let instance: Tooltip | null = null;

export default class Tooltip {
  element: HTMLElement | null = null;

  constructor() {
    if (instance) return instance;
    instance = this;
  }

  initialize() {
    document.addEventListener('pointerover', this.onPointerOver);
    document.addEventListener('pointerout', this.onPointerOut);
  }

  render(text: string, pos1: string, pos2: string) {
    this.element = document.createElement('div');
    this.element.className = 'tooltip';
    this.element.textContent = text;
    this.element.style.cssText = `position: fixed; left: ${pos1}; top: ${pos2}`;
    document.body.append(this.element);
  }

  onPointerOver = (event: PointerEvent) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>('[data-tooltip]');
    if (!target) return;
    let pos1 = `${event.clientX + 10}px`;
    let pos2 = `${event.clientY + 10}px`;
    this.render(target.dataset.tooltip || '', pos1, pos2);
  }

  onPointerOut = (event: PointerEvent) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>('[data-tooltip]');
    if (!target) return;
    this.element?.remove();
  }

  destroy() {
    document.removeEventListener('pointerover', this.onPointerOver);
    document.removeEventListener('pointerout', this.onPointerOut);
    this.element?.remove();
    instance = null;
  }
}