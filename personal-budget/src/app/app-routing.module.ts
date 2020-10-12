import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
{
  path: '',
  component: HomepageComponent,
  pathMatch: 'full'
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'login',
  component: LoginComponent
},

{
  path: 'contact',
  component: ContactComponent
},
{
  path: '**',
  component: P404Component
},
{
  path: 'Hero',
  component: ContactComponent
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
