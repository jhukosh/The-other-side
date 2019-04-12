import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PeoplePageModule } from './pages/people/people.module';


const routes: Routes = [
  { 
  path: '', 
  redirectTo: 'home', 
  pathMatch: 'full' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      { preloadingStrategy: PreloadAllModules },
      ),
      PeoplePageModule,
     

      
      
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
