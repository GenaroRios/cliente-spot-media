import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { PlayaSectionComponent } from './components/playa-section/playa-section.component';
import { NosotrosPageComponent } from './components/nosotros-page/nosotros-page.component';
import { ServicioPageComponent } from './components/servicio-page/servicio-page.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        component: PlayaSectionComponent
    },
    {
        path: 'nosotros',
        component: NosotrosPageComponent
    },
    {
        path: 'contacto',
        component: ContactPageComponent
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
        ]
    },
    {
        path: '**',
        component: PlayaSectionComponent
    }
];