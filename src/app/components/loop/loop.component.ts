import { Component } from "@angular/core";
import { BaseEntity } from "../../utils/BaseEntity";

@Component({
  selector: "app-loop",
  standalone: true,
  imports: [],
  templateUrl: "./loop.component.html",
})
export class LoopComponent extends BaseEntity {
  K: number = 1;
  SOMA: number = 0;
  INDICE = 12;
  cancel: boolean = false;

  setCancel(bool: boolean) {
    this.cancel = bool;
  }

  getCancel() {
    return this.cancel;
  }

  setK(number: number) {
    this.K = number;
  }

  getK() {
    return this.K;
  }

  setSOMA(number: number) {
    this.SOMA = number;
  }

  getSOMA() {
    return this.SOMA;
  }

  resetAndClear() {
    this.setSOMA(0);
    this.setK(1);
    this.setCancel(true);
  }

  loop() {
    this.setCancel(false);
    const increment = () => {
      if (this.K < this.INDICE && !this.cancel) {
        this.K = this.K + 1;
        this.SOMA = this.SOMA + this.K;
        console.log(this.SOMA);
        setTimeout(increment, 1000);
      }
    };
    increment();
  }
}
