import readFile from "../../utils/readFile";

interface numbersType {
  [key: number | string]: string;
}

const numbers: numbersType = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

async function main(): Promise<void> {
  const data: string = await readFile(`src/2023/day_1/input.txt`);
  const dataArray: string[] = data.split("\n");

  let sum = 0;
  let firstNumber: string;
  let lastNumber: string;

  // Work through each line from start to finish (conversly for each) to find them
  for (const line of dataArray) {
    let firstIndex = line.length;
    let lastIndex = -1;
    firstNumber = "0"
    lastNumber = "0"
    for (const number in numbers) {
      // If the line has an index of number and is less than the current first
      if (line.indexOf(number) !== -1 && line.indexOf(number) < firstIndex) {
        firstNumber = numbers[number];
        firstIndex = line.indexOf(number);
      }
      // If the line has an index of number and is higher than the current last
      if (
        line.lastIndexOf(number) !== -1 &&
        line.lastIndexOf(number) > lastIndex
      ) {
        lastNumber = numbers[number];
        lastIndex = line.lastIndexOf(number);
      }
    }
    sum += Number(firstNumber + lastNumber);
  }
  console.log(sum);
}

main();
