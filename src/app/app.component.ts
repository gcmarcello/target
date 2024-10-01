import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FibonacciComponent } from "./components/fibonacci/fibonacci.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, FibonacciComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
