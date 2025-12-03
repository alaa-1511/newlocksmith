import { Routes } from '@angular/router';
import { Home } from './feature/home/home';
import { Service } from './feature/service/service';
import { About } from './feature/about/about';
import { Faq } from './feature/faq/faq';
import { Footform } from './feature/home/footform/footform';
import { Automotive } from './feature/home/ourservice/automotive/automotive';
import { Residential } from './feature/home/ourservice/residential/residential';
import { Commercial } from './feature/home/ourservice/commercial/commercial';
import { Emergency } from './feature/home/ourservice/emergency/emergency';


export const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: "full"  },
{path:'home' ,component:Home},
{path:'service' ,component:Service},
{path:'about' ,component:About},
{path:'faq' ,component:Faq},
{path:'footform' ,component:Footform},
{path:'automotive' ,component: Automotive},
{path:'residential' ,component: Residential},
{path:'commercial' ,component: Commercial},
{path:'emergency' ,component: Emergency},



];
