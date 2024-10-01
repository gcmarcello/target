import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { BaseEntity } from "../../utils/BaseEntity";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./layout.component.html",
})
export class LayoutComponent extends BaseEntity {
  title = "Teste Técnico Target";
  items = [
    {
      title: "Fibonacci",
      link: "./fibonacci",
      color: "bg-gradient-to-r from-red-600 to-red-500", // Solid red for the first button
    },
    {
      title: "Verificar String",
      link: "./verificar",
      color: "bg-gradient-to-r from-red-500 to-pink-600", // Gradient transitioning from red to pink
    },
    {
      title: "Loop",
      link: "./loop",
      color: "bg-gradient-to-r from-pink-600 to-pink-600", // Gradient transitioning from pink to green
    },
    {
      title: "Sequências",
      link: "./sequencias",
      color: "bg-gradient-to-r from-pink-600 to-purple-400", // Gradient transitioning from green to purple
    },
    {
      title: "Lâmpadas",
      link: "./lampadas",
      color: "bg-gradient-to-r from-purple-400 to-purple-700", // Solid violet for the last button
    },
  ];
}
