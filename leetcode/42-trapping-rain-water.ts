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

function trap(height: number[]): number {
    let waterArea: number[][] = [];
    let leftP = 0;
    let rightP = height.length - 1;

    while (leftP < rightP) {
        if (height[leftP] <= height[rightP]) {
            for (let tmpP = leftP + 1; tmpP <= rightP; tmpP++) {
                if (height[tmpP] >= height[leftP]) {
                    waterArea.push([leftP, tmpP]);
                    leftP = tmpP;
                    break;
                }
            }
        } else {
            for (let tmpP = rightP - 1; tmpP >= leftP; tmpP--) {
                if (height[tmpP] >= height[rightP]) {
                    waterArea.push([rightP, tmpP]);
                    rightP = tmpP;
                    break;
                }
            }
        }
    }

    return getTrappedWater(waterArea, height);
}
