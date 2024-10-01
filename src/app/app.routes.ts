import { RouterModule, Routes } from "@angular/router";
import { FibonacciComponent } from "./components/fibonacci/fibonacci.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { NgModule } from "@angular/core";
import { CharacterLocationComponent } from "./components/character-location/character-location.component";
import { LoopComponent } from "./components/loop/loop.component";
import { SequencesComponent } from "./components/sequences/sequences.component";
import { LightbulbsComponent } from "./components/lightbulbs/lightbulbs.component";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "fibonacci", component: FibonacciComponent },
      { path: "verificar", component: CharacterLocationComponent },
      { path: "loop", component: LoopComponent },
      { path: "sequencias", component: SequencesComponent },
      { path: "lampadas", component: LightbulbsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
