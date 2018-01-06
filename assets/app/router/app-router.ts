import { LiveComponent } from './../live/live.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from '../feed/feed.component';
import { ProfileComponent } from '../profile/profile.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';


const appRoutes: Routes= [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: FeedComponent  },
    { path: 'live', component: LiveComponent  },
    { path: 'profile', component: ProfileComponent  },
    { path: 'favorite', component: FavoriteComponent  },
    { path: 'logout', component: LoginComponent  },
    { path: 'register', component: RegisterComponent  },

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }