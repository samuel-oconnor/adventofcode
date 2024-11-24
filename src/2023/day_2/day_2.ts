import readFile from "../../utils/readFile";

interface colourTypes {
  [key: string]: number;
}

const colours: colourTypes = {
  red: 12,
  green: 13,
  blue: 14,
};

async function part1(): Promise<void> {
  const data: string = await readFile(`src/2023/day_2/input.txt`);
  const dataArray: string[] = data.split("\n");
  let sum = 0;
  let possible: boolean;

  dataArray.forEach(function callback(line, index) {
    possible = true;
    for (let set of line.split(";")) {
      const strippedCubes = set.substring(set.indexOf(":") + 1).split(",");
      for (let cube of strippedCubes) {
        for (const colour in colours) {
          if (cube.includes(colour) && parseInt(cube) > colours[colour]) {
            possible = false;
            break;
          }
        }
      }
    }
    if (possible) {
      sum += index + 1;
    }
  });
  console.log(sum);
}

part1();
