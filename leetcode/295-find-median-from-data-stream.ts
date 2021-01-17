class MedianFinder {
    numArr: number[];

    constructor() {
        this.numArr = [];
    }

    _sortWithLastItem(): void {
        if (this.numArr.length <= 1) {
            return;
        }

        let lastVal = this.numArr[this.numArr.length - 1];

        for (let index = this.numArr.length - 2; index >= 0; index--) {
            let curVal = this.numArr[index];

            if (curVal <= lastVal) {
                this.numArr[index + 1] = lastVal;
                break;
            } else {
                let tmpVal = this.numArr[index + 1];
                this.numArr[index + 1] = curVal;
                this.numArr[index] = tmpVal;
            }
        }

        return;
    }

    addNum(num: number): void {
        this.numArr.push(num);
        this._sortWithLastItem();
    }

    findMedian(): number {
        let arrSize = this.numArr.length;

        if (arrSize % 2 !== 0) {
            return this.numArr[(arrSize - 1) / 2];
        } else {
            return (
                (this.numArr[arrSize / 2 - 1] + this.numArr[arrSize / 2]) / 2
            );
        }
    }
}
