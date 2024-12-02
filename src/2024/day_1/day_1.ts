import readFile from "../../utils/readFile";

async function main(part: number): Promise<void> {
  const data: string = await readFile(`src/2024/day_1/input.txt`);
  const dataArray: string[] = data.split("\n");
  const leftArray: number[] = [];
  const rightArray: number[] = [];
  let sum = 0;
  for (const row of dataArray) {
    const newRow: string = row.replace(/\s/g, "");
    leftArray.push(Number(newRow.slice(0, 5)));
    rightArray.push(Number(newRow.slice(5, 10)));
  }
  leftArray.sort((a, b) => a - b);
  rightArray.sort((a, b) => a - b);
  if (part == 1) {
    for (let i = 0; i < dataArray.length; i++) {
      const leftArrayElement: number = leftArray[i];
      const rightArrayElement: number = rightArray[i];
      let difference: number;
      if (leftArrayElement < rightArrayElement) {
        difference = rightArrayElement - leftArrayElement;
      } else {
        difference = leftArrayElement - rightArrayElement;
      }
      sum += difference;
    }
  } else {
    for (let i = 0; i < dataArray.length; i++) {
      const leftArrayElement: number = leftArray[i];
      const amountAppears = rightArray.filter(
        (x) => x === leftArrayElement
      ).length;
      sum += leftArrayElement * amountAppears;
    }
  }
  console.log(sum);
}
console.log("Part 1");
main(1);
console.log("Part 2");
main(2);
