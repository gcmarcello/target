import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BaseEntity } from "../../utils/BaseEntity";

@Component({
  selector: "app-character-location",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./character-location.component.html",
})
export class CharacterLocationComponent extends BaseEntity {
  private characterOcurrences: number | null = null;

  setOcurrences(number: number) {
    this.characterOcurrences = number;
  }

  getOcurrences() {
    return this.characterOcurrences;
  }

  characterLocation(str: string, query: string = "a") {
    if (str.length > 1000)
      return this.setError("Frase muito grande, máximo de 1000 caracteres");
    if (query.length > 1)
      return this.setError("Apenas um caractere de busca é permitido.");
    this.setOcurrences(0);
    this.setError(null);
    const occurrences = str
      .split("")
      .filter((letter) => letter === query).length;
    this.setOcurrences(occurrences);
  }
}
