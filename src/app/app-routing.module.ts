import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Tabs } from './tabs/tabs';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: Tabs,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: './tabs/tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: './tabs/tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: './tabs/tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
