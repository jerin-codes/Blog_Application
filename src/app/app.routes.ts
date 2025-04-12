import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { DetailsPostComponent } from './components/details-post/details-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
        
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'addblog',
        component:AddPostComponent

    },
    {
        path:'blogs/:id',component:DetailsPostComponent
    },
    {
        path:'editblog/:id',component:EditPostComponent
    }
];
