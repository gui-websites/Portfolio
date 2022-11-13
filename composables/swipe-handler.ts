type SwipeState = "left" | "right" | "up" | "down" | null;
type SwipePos = { x: number; y: number };
type SwipeCallback = (state: SwipeState, pos: SwipePos) => void;

export class SwipeHandler {
  private origin: SwipePos | null;
  private state: SwipeState;

  private listeners: SwipeCallback[];

  constructor() {
    this.origin = null;
    this.state = null;
    this.listeners = [];

    onMounted(() => {
      window.addEventListener("touchstart", this.handleTouchStart);
      window.addEventListener("touchmove", this.handleTouchMove);
    });
  }

  private handleTouchStart = (evt: TouchEvent) => {
    this.origin = {
      x: evt.touches[0].clientX,
      y: evt.touches[0].clientY,
    };
  };

  private handleTouchMove = (evt: TouchEvent) => {
    if (!this.origin) {
      this.state = null;
      return;
    }

    const delta = { x: evt.touches[0].clientX, y: evt.touches[0].clientY };
    const diff = { x: this.origin.x - delta.x, y: this.origin.y - delta.y };

    if (Math.abs(diff.x) > Math.abs(diff.y)) {
      this.state = diff.x > 0 ? "left" : "right";
    } else {
      this.state = diff.y > 0 ? "up" : "down";
    }

    this.listeners.forEach((listener) => listener(this.state, this.origin));
    this.origin = null;
  };

  public onSwipe = (callback: SwipeCallback) => {
    this.listeners.push(callback);
  };
}
