import { Routes } from "@angular/router";
import {Resources} from "@app/resources";

export const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.routing')},
  { path: '', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule) },
  { path: '', loadChildren: () => import('./modules/contests/contests.routing') },
  { path: Resources.Problems, loadComponent: () => import('./modules/problems/problems.component').then(c => c.ProblemsComponent) },
  { path: 'problem/:id', loadComponent: () => import('./modules/problems/pages/problem.component').then(c => c.ProblemComponent) },
  { path: '**', loadComponent: () => import('./modules/pages/miscellaneous/error/error.component').then(c => c.ErrorComponent) },
];
