import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { PlayaSectionComponent } from './components/playa-section/playa-section.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        children:[
            {
                path: 'contacto',
                component: ContactPageComponent
            },
            {
                path: 'home',
                component: PlayaSectionComponent
            },
            {
                path:'',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        component: HomeComponent
    }
];
