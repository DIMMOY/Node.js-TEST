function getHandScore(input: string): number {
    const score: { [key: string]: number } = {'S': 0, 'H': 0, 'D': 0, 'C': 0};
    // split card from input
    const cards = input.split(' ');
    const firstRank = cards[0].length > 2 ? cards[0].slice(1) : cards[0][1];
    let isSameRank: boolean = true;

    cards.forEach((card) => {
        const suit: string = card[0];
        const rank: string = card.length > 2 ? card.slice(1) : card[1]; // S10 length = 3

        // check same rank
        isSameRank = isSameRank ? firstRank === rank : isSameRank;

        const isNumber = parseInt(rank)
        if (!isNaN(isNumber) && isNumber >= 2 ) {
            // 2 - 10
            score[suit] += isNumber;
        } else if (rank === 'J' || rank === 'Q' || rank === 'K') {
            score[suit] += 10;
        } else if (rank === 'A') {
            score[suit] += 11;
        }
    })

    if (isSameRank) {
        console.log(`Three cards with the same rank (${firstRank})`);
        return firstRank === 'A' ? 35 : 32.5;

    } else {
        console.log(score)
        const arr = Object.values(score)
        return Math.max(...arr);
    }

    
}

console.log(getHandScore('S8 S10 CA') === 18);
console.log(getHandScore('D7 H5 C10') === 10);
console.log(getHandScore('H10 S10 C10') === 32.5);
console.log(getHandScore('HA SA CA') === 35);