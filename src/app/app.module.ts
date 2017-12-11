import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GraphComponent } from './common/components/graph/graph.component';
import { RecommendationListComponent } from './components/recommendation-list/recommendation-list.component';
import {HttpClientModule} from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { SpinnerDirective } from './directives/spinner.directive';
import { MenuComponent } from './common/components/menu/menu.component';
import {AuthGuard} from './common/guards/auth.guard';
import { RecommendationsComponent } from './components/pages/recommendations/recommendations.component';
import {ToastModule, ToastOptions} from 'ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'recommendations', component: RecommendationsComponent, canActivate: [AuthGuard]   },
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

export class CustomToastOptions extends ToastOptions {
  animate = 'fade'; // you can override any options available
  positionClass = 'toast-bottom-center';
  newestOnTop = false;
  showCloseButton = false;
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
    SpinnerDirective,
    MenuComponent,
    RecommendationsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only TODO: Remove when dev complete.
    ),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ChartModule,
    HttpClientModule,
    MultiselectDropdownModule
  ],
  providers: [
   // { provide: LOCALE_ID, useValue: 'en-GB' }, TODO: Look at passing in locale as a user setting.
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    {provide: ToastOptions, useClass: CustomToastOptions},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


