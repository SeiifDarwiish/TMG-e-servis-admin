// import { LoginComponent } from './@features/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./@features/login/login.component').then(
        (component) => component.LoginComponent
      ),
  },
  // {
  //   path: 'login',
  //   loadComponent: () =>
  //     import('./@features/login/login.component').then(
  //       (component) => component.LoginComponent
  //     ),
  // },
  {
    path: 'home',
    loadComponent: () =>
      import('./@features/home/home.component').then(
        (component) => component.HomeComponent
      ),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./@features/home/header/header.component').then(
            (component) => component.HeaderComponent
          ),
      },
      {
        path: 'header',
        loadComponent: () =>
          import('./@features/home/header/header.component').then(
            (component) => component.HeaderComponent
          ),
      },
      {
        path: 'advertising',
        loadComponent: () =>
          import('./@features/home/advertising/advertising.component').then(
            (component) => component.AdvertisingComponent
          ),
      },
      {
        path: 'units',
        loadComponent: () =>
          import('./@features/home/units/units.component').then(
            (component) => component.UnitsComponent
          ),
          // children:[]
      },
      {
            path: 'units/viewRequests',
            loadComponent: () =>
              import(
                './@features/home/units/view-requests/view-requests.component'
              ).then((component) => component.ViewRequestsComponent),
      },
      {
        path: 'logout',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ],
  },
  //   path: 'unit',
  //   loadComponent: () =>
  //     import('./@features/home/units/units.component').then(
  //       (component) => component.UnitsComponent
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
