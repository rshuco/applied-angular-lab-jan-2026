import { Routes } from '@angular/router';
import { Home } from './internal/home';
import { HomePage } from './internal/pages/home';
import { OldSkoolPage } from './internal/pages/old-skool';

export const countingFeatureRoutes: Routes = [
  {
    path: '',
    providers: [],
    component: Home,
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'old-skool',
        component: OldSkoolPage,
      },
    ],
  },
];
