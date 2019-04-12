import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomePageModule } from './home/home.module';
import { PeoplePageModule} from './pages/people/people.module';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  {
    path: 'account',
    component: AccountComponent
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'people', loadChildren: './pages/people/people.module#PeoplePageModule' },
  { path: 'people/:id', loadChildren: './pages/people-details/people-details.module#PeopleDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      { preloadingStrategy: PreloadAllModules },
      ),
    HomePageModule,
    PeoplePageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
