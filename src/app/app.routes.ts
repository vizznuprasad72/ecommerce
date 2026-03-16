import { Routes } from '@angular/router';
import { Product } from './product/product';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { Details } from './details/details';
export const routes: Routes = [
    {path:'', component: Home},  
    {path:'product/details/:id', component: Details},
    {path:'products', component: Product},
    {path:'contact', component: Contact},
    
];
