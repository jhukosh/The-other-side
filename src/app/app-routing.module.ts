import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';




const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { path: 'home', 
    loadChildren: './home/home.module#HomePageModule' 
  },
  {
    path: 'account',
    component: AccountComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      { preloadingStrategy: PreloadAllModules },

      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
