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

  render(text: string) {
    this.element = document.createElement('div');
    this.element.className = 'tooltip';
    this.element.textContent = text;
    document.body.append(this.element);
  }

  onPointerOver = (event: PointerEvent) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>('[data-tooltip]');
    if (!target) return;
    this.render(target.dataset.tooltip || '');
    this.element!.style.cssText = `position: fixed; left: ${event.clientX + 10}px; top: ${event.clientY + 10}px;`;
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
