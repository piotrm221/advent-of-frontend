// Tutaj skopiuj kod zadania
type QueueElement<T> = {gift: T, priority: number};

export class ChristmasQueue<T> {

    private queueData: QueueElement<T>[] = [];

    enqueue(gift: T, priority: number): void {
        this.queueData.push({ gift, priority });
    }

    dequeue(): T {
        if(this.isEmpty()) {
            throw new Error('There are no letters in the queue!')
        }

        const elementToDequeue = this.getFirstElementOfHighestPriority();
        this.removeElementFromDataset(elementToDequeue);

        return elementToDequeue.gift;
    }

    isEmpty(): boolean {
        return this.queueData.length === 0;
    }

    private getFirstElementOfHighestPriority(): QueueElement<T> {
        const reversedQueue = [...this.queueData].reverse();
        const sortedReversedQueue = reversedQueue.sort((a, b) => {
            const result = b.priority - a.priority;
            if (result === 0) {
                return -1;
            }
            return result;
        });
        return sortedReversedQueue[0];
    }

    private removeElementFromDataset(elementToRemove: QueueElement<T>): void {
        const indexOfElementToDelete = this.queueData.findIndex((element) => JSON.stringify(element) === JSON.stringify(elementToRemove));
        this.queueData.splice(indexOfElementToDelete, 1);
    }
  
}