import readFile from "../../utils/readFile";
import getDifference from "../../utils/getDifference";

async function main(part: number): Promise<void> {
  const data: string = await readFile(`src/2024/day_2/input.txt`);
  const dataArray: string[] = data.split("\n");
  let sum: number = 0;
  for (const row of dataArray) {
  }
  console.log(sum);
}
main(1);
// main(2);
