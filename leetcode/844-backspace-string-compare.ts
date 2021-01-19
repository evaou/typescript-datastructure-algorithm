function getNewP(S: string, pS: number): number {
    if (S[pS] !== "#") {
        return pS;
    }

    let stepToMove = 2;
    while (stepToMove > 0) {
        pS--;
        stepToMove--;

        if (pS >= 0 && S[pS] === "#") {
            stepToMove += 2;
        }
    }

    return pS;
}

function backspaceCompare(S: string, T: string): boolean {
    let pS = S.length - 1;
    let pT = T.length - 1;

    while (pS >= 0 || pT >= 0) {
        if (S[pS] === "#" || T[pT] === "#") {
            pS = getNewP(S, pS);
            pT = getNewP(T, pT);
        } else {
            if (S[pS] !== T[pT]) {
                return false;
            } else {
                pS--;
                pT--;
            }
        }
    }

    return true;
}

function getStrWithoutBackspace(S: string): string {
    let newS: string[] = [];

    for (let index = 0; index < S.length; index++) {
        if (S[index] === "#") {
            if (newS.length > 0) {
                newS.pop();
            }
        } else {
            newS.push(S[index]);
        }
    }

    return newS.join("");
}

function backspaceCompare2(S: string, T: string): boolean {
    let newS = getStrWithoutBackspace(S);
    let newT = getStrWithoutBackspace(T);

    return newS === newT ? true : false;
}
