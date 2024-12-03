import readFile from "../../utils/readFile";
import getDifference from "../../utils/getDifference";

const checkRowValidity = (row: string[]): boolean => {
  let increasing: boolean = false;
  if (Number(row[0]) < Number(row[1])) increasing = true;
  for (let i = 1; i < row.length; i++) {
    if (
      Number(row[i]) == Number(row[i - 1]) ||
      (increasing && Number(row[i - 1]) > Number(row[i])) ||
      (!increasing && Number(row[i - 1]) < Number(row[i])) ||
      getDifference(Number(row[i]), Number(row[i - 1])) > 3 ||
      getDifference(Number(row[i]), Number(row[i - 1])) < -3
    ) {
      return false;
    }
  }
  return true;
};

async function main(part: number): Promise<void> {
  const data: string = await readFile(`src/2024/day_2/input.txt`);
  const dataArray: string[] = data.split("\n");
  let sum: number = 0;
  for (const row of dataArray) {
    const splitRow: string[] = row.split(" ");
    if (part === 1) {
      if (checkRowValidity(splitRow)) {
        sum += 1;
      }
    } else {
      if (checkRowValidity(splitRow)) {
        sum += 1;
      } else {
        for (let i = 0; i < splitRow.length; i++) {
          let filteredRow: string[] = splitRow.filter(
            (element: string, index: number) => index != i
          );
          if (checkRowValidity(filteredRow)) {
            sum += 1;
            break;
          }
        }
      }
    }
  }
  console.log(sum);
}
main(1);
main(2);
