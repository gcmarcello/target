import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BaseEntity } from "../../utils/BaseEntity";

@Component({
  selector: "app-fibonacci",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./fibonacci.component.html",
})
export class FibonacciComponent extends BaseEntity {
  private numbers: number[] = [];

  getNumbers() {
    return this.numbers;
  }

  setNumbers(numbers: number[]) {
    this.numbers = numbers;
  }

  isNumberInSequence(number: string | number) {
    return this.getNumbers().find((value) => value === Number(number));
  }

  isPartOfSequence(number: number) {
    const sequence = this.getNumbers();
    return (
      sequence.filter((n) => n === number).length ||
      sequence[sequence.length - 1] === number
    );
  }

  findFibonacciSequence(number: String) {
    const parsedNumber = Number(number);
    if (parsedNumber === 0) return this.setNumbers([0]);
    if (parsedNumber === 1) return this.setNumbers([0, 1]);
    this.setNumbers([0, 1]);
    const numbers = this.getNumbers();
    for (let i = 2; i < parsedNumber; i++) {
      if (numbers[i - 1] + numbers[i - 2] > parsedNumber) return;
      this.numbers.push(this.numbers[i - 1] + this.numbers[i - 2]);
    }
  }
}
