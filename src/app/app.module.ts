import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './common/home/home.component';
import { FeatureComponent } from './common/feature/feature.component';
import { InsureComponent } from './common/home/insurestrategy/insure/insure.component';
import { UsecaseComponent } from './common/home/usecase/usecase/usecase.component';
import { TrainingComponent } from './common/home/training/training/training.component';
import { ResourcesComponent } from './common/home/resources/resources/resources.component';
import { TestimonialComponent } from './common/home/testimonial/testimonial/testimonial.component';
import { SampleComponent } from './common/sample/sample.component';
import { SolutionComponent } from './solution/solution/solution.component';
import { ProductsComponent } from './products/products/products.component';
import { ServicesComponent } from './services/services/services.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FeatureComponent,
    InsureComponent,
    UsecaseComponent,
    TrainingComponent,
    ResourcesComponent,
    TestimonialComponent,
    SampleComponent,
    SolutionComponent,
    ProductsComponent,
    ServicesComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
