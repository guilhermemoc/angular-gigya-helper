class Word {
  constructor(public string: string, public index: number = 0) {}
}

function DuplicateArr(string: string[], size: number): Word[] {
  let dupArr: Word[] = [];
  for (let i = 0; i < size; i++) {
    dupArr.push(new Word(string[i], i));
  }
  return dupArr;
}

function printAnagrams(wordArr: string[], size: number) {
  let dupArr = DuplicateArr(wordArr, size);

  let originalPositions = new Array(size);
  for (let i = 0; i < size; i++) {
    originalPositions[i] = dupArr[i].index;
  }
  dupArr = dupArr.sort((a, b) => a.string.localeCompare(b.string));

  for (let i = 0; i < size; i++) {
    console.log(wordArr[originalPositions[i]]);
  }
}


let wordArr = ["cat", "dog", "tac", "god", "act"];
let size = wordArr.length;
printAnagrams(wordArr, size);
