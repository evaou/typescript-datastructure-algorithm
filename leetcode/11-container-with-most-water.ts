function maxArea(height: number[]): number {
    if (height.length < 2) {
        return 0;
    }

    let leftP = 0;
    let rightP = height.length - 1;
    let maxArea = 0;

    while (leftP !== rightP) {
        const width = rightP - leftP;
        const minHeight = Math.min(height[leftP], height[rightP]);
        const area = width * minHeight;

        if (area > maxArea) {
            maxArea = area;
        }

        if (height[leftP] < height[rightP]) {
            leftP++;
        } else {
            rightP--;
        }
    }

    return maxArea;
}

function maxArea2(height: number[]): number {
    if (height.length <= 1) {
        return 0;
    }

    let maxArea: number = 0;
    let tmpArea: number;

    for (let leftIndex = 0; leftIndex < height.length - 1; leftIndex++) {
        for (
            let rightIndex = leftIndex + 1;
            rightIndex < height.length;
            rightIndex++
        ) {
            tmpArea =
                (rightIndex - leftIndex) *
                Math.min(height[leftIndex], height[rightIndex]);
            maxArea = Math.max(maxArea, tmpArea);
        }
    }

    return maxArea;
}
