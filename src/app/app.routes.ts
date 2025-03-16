import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TypeCheckerComponent } from './type-checker/type-checker.component';

export const routes: Routes = [
  {
    path: 'passgen',
    loadComponent: () => import('./pw/pw.component').then((x) => x.PwComponent),
    children: [{ path: 'typing', component: TypeCheckerComponent }],
  },
  {
    path: 'typing',
    loadComponent: () =>
      import('./type-checker/type-checker.component').then(
        (x) => x.TypeCheckerComponent
      ),
  },
  { path: '', component: HomeComponent },
];
