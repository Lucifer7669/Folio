import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import {SkillsComponent} from './skills/skills.component';
import {ContactComponent} from './contact/contact.component';
import {HeaderComponent} from './header/header.component';
import {ServiceComponent} from './service/service.component';


const routes: Routes = [
  {
    path: '', redirectTo:'/home', pathMatch: 'full'
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"home",  
    component:HomeComponent
  },
  {
    path:"resume",
    component:ResumeComponent
  },
  {
    path:"skills",
    component:SkillsComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"heder",
    component:HeaderComponent
  },
  {
    path:"service",
    component:ServiceComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,ResumeComponent,SkillsComponent,ContactComponent,HeaderComponent,ServiceComponent]
