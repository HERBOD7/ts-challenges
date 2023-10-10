// https://exercism.org/tracks/typescript/exercises/resistor-color-duo/edit

enum Colors {
    black,
    brown,
    red,
    orange,
    yellow,
    green,
    blue,
    violet,
    grey,
    white
}

export function decodedValue([firstColor, secondColor]: Colors[]): number {
    const sum = String(Colors[firstColor]) + String(Colors[secondColor]);
    return Number(sum)
}
