import { type EventDispatcherInterface } from "./event-dispatcher.interface";
import { type EventHandlerInterface } from "./event-handler.interface";
import { type EventInterface } from "./event.interface";

export class EventDispatcher implements EventDispatcherInterface {
  private readonly eventHandlers: Record<string, EventHandlerInterface[]> = {};

  get getEventHandlers(): Record<string, EventHandlerInterface[]> {
    return this.eventHandlers;
  }

  register(
    eventName: string,
    eventHandler: EventHandlerInterface<EventInterface>
  ): void {
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(eventHandler);
  }

  notify(event: EventInterface): void {
    throw new Error("Method not implemented.");
  }

  unregister(
    eventName: string,
    eventHandler: EventHandlerInterface<EventInterface>
  ): void {
    throw new Error("Method not implemented.");
  }

  unregisterAll(): void {
    throw new Error("Method not implemented.");
  }
}
