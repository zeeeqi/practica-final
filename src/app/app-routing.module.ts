import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickPadreComponent } from './clickcounter/click-padre/click-padre.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GifsAppComponent } from './gifsapp/gifs-app.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path: 'gifsapp',
    component: GifsAppComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'clicks',
    component: ClickPadreComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
