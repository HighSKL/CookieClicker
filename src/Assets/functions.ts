import { CellType } from "./Types/types";

export let random = () => Math.floor(Math.random()*99999999)

export function shuffle<T>(array: T[]):T[]{
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
}

export let setBombs = (array: Array<CellType>, bombQuality: number) => {
    return array
}