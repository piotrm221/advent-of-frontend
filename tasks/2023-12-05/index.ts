// Tutaj skopiuj kod zadania
type EventName = string;
type EventCallback = () => any;

export class ChristmasEmitter {

    events: { [key: EventName]: EventCallback[] } = {}

    on(eventName: EventName, callback: EventCallback): void {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }

        this.events[eventName].push(callback);
    }

    emit(eventName: EventName): void {
        this.events[eventName].forEach(callback => callback());
    }

    off(eventName: EventName, callbackToRemove: EventCallback): void {
        const indexOfCallbackToRemove = this.events[eventName].findIndex(callback => callback === callbackToRemove);
        this.events[eventName].splice(indexOfCallbackToRemove, 1);
    }

}