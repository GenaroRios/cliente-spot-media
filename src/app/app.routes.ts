import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { PlayaSectionComponent } from './components/playa-section/playa-section.component';
import { NosotrosPageComponent } from './components/nosotros-page/nosotros-page.component';
import { ServicioPageComponent } from './components/servicio-page/servicio-page.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';

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
                path:'nosotros',
                component: NosotrosPageComponent
            },
            {
                path:'',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: 'servicios',
        component: ServicioPageComponent,
        children:[
            {
                path: ':id',
                component: UbicacionComponent
            },
            {
                path: '',
                redirectTo: '1',
                pathMatch: 'full'
            }

            /*{
                path: 'playa-grande',
                component: PlayaGrandeComponent
            },
            {
                path: 'playa-varese',
                component: PlayaVareseComponent
            },
            {
                path: 'playas-del-sur',
                component: PlayasSurComponent
            },
            {
                path: 'playas-la-perla',
                component: PlayaPerlaComponent
            },
            {
                path: '',
                redirectTo: 'playa-grande',
                pathMatch: 'full'
            }*/
        ]
    },
    {
        path: '**',
        component: HomeComponent
    }
];
