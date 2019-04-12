import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PeoplePageModule } from './pages/people/people.module'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'people', loadChildren: './pages/people/people.module#PeoplePageModule' },
  { path: 'people/:id', loadChildren: './pages/people-details/people-details.module#PeopleDetailsPageModule' },
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
