import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { News } from './pages/news/news';
import { Donation } from './pages/donation/donation';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'news', component: News},
    { path: 'donation', component: Donation },
    { path: 'contact', component: Contact}
];
