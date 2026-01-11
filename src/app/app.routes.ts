import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { News } from './pages/news/news';
import { Donation } from './pages/donation/donation';
import { Events } from './pages/events/events';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'news', component: News },
    { path: 'donation', component: Donation },
    { path: 'events', component: Events },
    { path: 'contact', component: Contact }
];
