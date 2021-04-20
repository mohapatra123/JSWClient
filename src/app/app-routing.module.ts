import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './common/home/home.component';
import { ProductsComponent } from './products/products/products.component';
import { ServicesComponent } from './services/services/services.component';
import { SolutionComponent } from './solution/solution/solution.component';
import { TrainingComponent } from './training/training/training.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'solutions', component: SolutionComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'training', component: TrainingComponent},
  { path: 'aboutus', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
