function trap(height: number[]): number {
    let leftmostIdx = 0;
    let rightmostIdx = height.length - 1;
    let areaSum = 0;
    let tmpIdx;

    while (leftmostIdx < rightmostIdx - 1) {
        if (height[leftmostIdx] <= height[rightmostIdx]) {
            tmpIdx = leftmostIdx + 1;

            while (
                tmpIdx < rightmostIdx &&
                height[leftmostIdx] >= height[tmpIdx]
            ) {
                areaSum += height[leftmostIdx] - height[tmpIdx];
                tmpIdx++;
            }

            leftmostIdx = tmpIdx;
        } else {
            tmpIdx = rightmostIdx - 1;

            while (
                tmpIdx > leftmostIdx &&
                height[rightmostIdx] >= height[tmpIdx]
            ) {
                areaSum += height[rightmostIdx] - height[tmpIdx];
                tmpIdx--;
            }

            rightmostIdx = tmpIdx;
        }
    }

    return areaSum;
}

function getTrappedWater(area: number[][], height: number[]): number {
    let sum = 0;

    for (let pairP of area) {
        const p1 = pairP[0];
        const p2 = pairP[1];
        const areaHeight = Math.min(height[p1], height[p2]);

        for (
            let index = Math.min(p1, p2) + 1;
            index < Math.max(p1, p2);
            index++
        ) {
            sum += areaHeight - height[index];
        }
    }

    return sum;
}

function trap2(height: number[]): number {
    let waterArea: number[][] = [];
    let leftP = 0;
    let rightP = height.length - 1;

    while (leftP < rightP) {
        if (height[leftP] <= height[rightP]) {
            for (let tmpP = leftP + 1; tmpP <= rightP; tmpP++) {
                if (height[tmpP] >= height[leftP]) {
                    if (tmpP > leftP + 1) {
                        waterArea.push([leftP, tmpP]);
                    }
                    leftP = tmpP;
                    break;
                }
            }
        } else {
            for (let tmpP = rightP - 1; tmpP >= leftP; tmpP--) {
                if (height[tmpP] >= height[rightP]) {
                    if (rightP > tmpP + 1) {
                        waterArea.push([rightP, tmpP]);
                    }
                    rightP = tmpP;
                    break;
                }
            }
        }
    }

    return getTrappedWater(waterArea, height);
}
