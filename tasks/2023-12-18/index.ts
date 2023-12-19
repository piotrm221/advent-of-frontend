// Tutaj skopiuj kod zadania
export class RateLimiter {
    private maxRequests: number;
    private intervalMs: number;

    private attemptsCount: number = 0;
    private isWaitingToUnblock = false;

    constructor(maxRequests: number, intervalMs: number) {
        this.maxRequests = maxRequests;
        this.intervalMs = intervalMs;
    }

    attemptAccess(): boolean {
        this.attemptsCount++;
        if (this.isWaitingToUnblock) return false;

        if (this.attemptsCount == this.maxRequests) {
            this.waitToUnblockRequests();
        }
        return true;
    }

    private waitToUnblockRequests(): void {
        this.isWaitingToUnblock = true;
        setTimeout(() => {
            this.attemptsCount = 0;
            this.isWaitingToUnblock = false;
        }, this.intervalMs)
    }

}