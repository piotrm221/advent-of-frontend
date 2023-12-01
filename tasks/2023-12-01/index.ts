

export class GiftRegistry {
    private giftsByChildId: { [key: number]: string[] } = {}

    addGift(childId: number, gift: string): void {
        if (!this.giftsByChildId[childId]) {
            this.giftsByChildId[childId] = [];
        }
        this.giftsByChildId[childId].push(gift);
    }

    getGiftsForChild(childId: number): string[] {
        return this.giftsByChildId[childId];
    }

    removeGift(childId: number, gift: string): void {
        const indexOfGiftToRemove: number = this.giftsByChildId[childId].findIndex(giftName => giftName === gift);
        if (indexOfGiftToRemove === -1) {
            throw new Error('Gift not found')
        }
        this.giftsByChildId[childId].splice(indexOfGiftToRemove, 1);
    }

}