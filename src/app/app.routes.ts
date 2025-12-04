import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ProductsComponent } from './pages/products/products';
import { GalleryComponent } from './pages/gallery/gallery';
import { MenuComponent } from './pages/menu/menu';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:  'nosotros', component: AboutComponent},
  {path: 'productos', component: ProductsComponent},
  {path: 'galeria', component: GalleryComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'contact', component: Contact},
  {path: '**', redirectTo: ''}
]; 