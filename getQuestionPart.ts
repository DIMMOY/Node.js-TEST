function getQuestionPart(phrases: string[]):string[] {
    phrases = phrases.map((word) => word.toUpperCase());

    let commonSubstring: string = '';
    let i: number = 0;
    while (i < phrases[0].length) {
      if (phrases.slice(1).every((word) => word.includes(phrases[0][i]))) {
        let j: number = i + 1;
        // find the longest substring
        while (j < phrases[0].length && 
          phrases.slice(1).every((word) => word.includes(phrases[0].substring(i, j + 1)))
        ) {
          j++;
        }
        if (j - i > commonSubstring.length) {
          commonSubstring = phrases[0].substring(i, j);
        }
        i = j;
      } else {
        i++;
      }
    }

    // remove substring, whitespace from string in array
    return phrases.map((word) => word.replace(commonSubstring, '').replace(' ', ''));
}

console.log(getQuestionPart(['BATHROOM', 'BATH SALTS', 'BLOODBATH']));
console.log(getQuestionPart(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP']));
console.log(getQuestionPart(['CLASSROOM', 'DINING ROOM', 'ROOMMATE']));
console.log(getQuestionPart(['RUNAWAY', 'RUNDOWN', 'RUNOFF']));
console.log(getQuestionPart(['CASE STUDY', 'SHOWCASE', 'BOOKCASE']));
console.log(getQuestionPart(['GUARDHOUSE', 'LIFEGUARD', 'BODYGUARD']));
console.log(getQuestionPart(['ZIP CODE', 'BAR CODE', 'AREA CODE']));