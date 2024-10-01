import { Component } from "@angular/core";
import { BaseEntity } from "../../utils/BaseEntity";

@Component({
  selector: "app-sequences",
  standalone: true,
  imports: [],
  templateUrl: "./sequences.component.html",
})
export class SequencesComponent extends BaseEntity {
  showEveryOddNumber(number: number = 100) {
    const array = [];
    for (let index = 1; index < number; index++) {
      if (index % 2 !== 0) array.push(index);
    }
    return array;
  }

  showEveryPowerOfTwo(number: number = 100) {
    const array = [];
    for (let index = 1; index < number; index++) {
      array.push(2 ** index);
    }
    return array;
  }

  showEverySquaredNumber(number: number = 100) {
    const array = [];
    for (let index = 1; index < number; index++) {
      array.push((index - 1) ** 2);
    }
    return array;
  }

  showEveryEvenNumberSquared(number: number = 100) {
    const array = [];
    for (let index = 2; index < number; index++) {
      if (index % 2 === 0) array.push(index ** 2);
    }
    return array;
  }

  showEveryFibonacciNumber(number: number = 100) {
    const array: number[] = [1, 1];
    for (let i = 2; i < number; i++) {
      array.push(array[i - 1] + array[i - 2]);
    }
    return array;
  }

  showEveryDNumber() {
    return "200!";
  }

  alert(fn: Function) {
    window.alert(fn.toString() + "\n\n" + fn());
  }
}
