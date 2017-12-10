import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GraphComponent } from './common/components/graph/graph.component';
import { RecommendationListComponent } from './components/recommendation-list/recommendation-list.component';
import {HttpClientModule} from '@angular/common/http';
import { MostUrgentComponent } from './components/most-urgent/most-urgent.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { SpinnerDirective } from './directives/spinner.directive';
import { MenuComponent } from './common/components/menu/menu.component';
import { RecommendationViewComponent } from './components/recommendation-view/recommendation-view.component';
import {AuthGuard} from './common/guards/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'recommendation-view', component: RecommendationViewComponent, canActivate: [AuthGuard]   },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

export declare let require: any;

export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);

  return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    RecommendationComponent,
    SettingsComponent,
    GraphComponent,
    RecommendationListComponent,
    MostUrgentComponent,
    SpinnerDirective,
    MenuComponent,
    RecommendationViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ChartModule,
    HttpClientModule,
    MultiselectDropdownModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-GB' },
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
