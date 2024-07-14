import { provideRouter, Routes, Params } from '@angular/router';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ApplicationConfig, ErrorHandler, inject } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { GlobalErrorHandler } from './services/global-error-handler';

export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'crisis', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent, data: { title: 'Heroes List' } },
  //{ path: '', redirectTo: '/heroes', pathMatch: 'full' },

  {
    path: 'deprecated-hero',
    redirectTo: ({ queryParams }) => {
      const errorHandler = inject(GlobalErrorHandler);
      const heroId = queryParams['id'];
      if (heroId !== undefined) {
        return `/hero/${heroId}`;
      }
      else {
        //errorHandler.handleError(new Error('No hero id in URL'));
        throw new Error('No hero id in URL');
        return '/not-found';
      }
    }
  },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: '**', component: PageNotFoundComponent },
];
