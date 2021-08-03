import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './common/home/home.component';
import { ProductsComponent } from './products/products/products.component';
import { ServicesComponent } from './services/services/services.component';
import { SolutionComponent } from './solution/solution/solution.component';
import { TrainingComponent } from './training/training/training.component';
import { InsureaiComponent } from './common/solution/insureAI/insureai/insureai.component';
import { PrivacypoliciesComponent } from './policies/privacypolicies/privacypolicies.component';
import { TermsandconditionsComponent} from './policies/termsandconditions/termsandconditions.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import {ThankYouComponent} from './thankYou/thank-you/thank-you.component';
import { CareerComponent } from './career/career/career.component';
import { CreateCareerComponent } from './career/create-career/create-career.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'solutions', component: SolutionComponent},
  { path: 'solutions/insureAi', component: InsureaiComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'training', component: TrainingComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'privacypolicies', component: PrivacypoliciesComponent},
  { path: 'termsandconditions', component: TermsandconditionsComponent},
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'thankyou', component:ThankYouComponent},
  { path: 'career', component:CareerComponent},
  { path: 'careers/:id', component:CreateCareerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
