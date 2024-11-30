import readFile from "../../utils/readFile";

async function main(): Promise<void> {
  const data: string = await readFile(`src/2024/day_1/input.txt`);
  const dataArray: string[] = data.split("\n");
}

main();
