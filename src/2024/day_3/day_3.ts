import readFile from "../../utils/readFile";

const multiplyNumbers = (multiplications: string, enabled = true): number => {
  const numbersOnlyRegex: RegExp = /\d+/g;
  const numbers: RegExpMatchArray | null =
    multiplications.match(numbersOnlyRegex);
  if (numbers && enabled) {
    return Number(numbers[0]) * Number(numbers[1]);
  } else {
    return 0;
  }
};

async function main(part: number): Promise<void> {
  const data: string = await readFile(`src/2024/day_3/input.txt`);
  const dataArray: string[] = data.split("\n");
  let sum: number = 0;
  let regex: RegExp;
  if (part == 1) {
    for (const row of dataArray) {
      regex = /mul\((\d+),(\d+)\)/g;
      const cleanedRow: RegExpMatchArray | null = row.match(regex);
      if (cleanedRow)
        for (const command of cleanedRow) {
          sum += multiplyNumbers(command);
        }
    }
  } else {
    let enabled: boolean = true;
    for (const row of dataArray) {
      regex = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/g;
      const cleanedRow: RegExpMatchArray | null = row.match(regex);
      if (cleanedRow)
        for (const command of cleanedRow) {
          if (command === "do()") {
            enabled = true;
          } else if (command === "don't()") {
            enabled = false;
          } else {
            sum += multiplyNumbers(command, enabled);
          }
        }
    }
  }
  console.log(sum);
}
main(1);
main(2);
