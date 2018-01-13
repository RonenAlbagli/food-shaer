
import { DropdownDirective } from './shared/ddl.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './router/app-router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { FeedComponent } from './feed/feed.component';
import { FeedListComponent } from './feed/feed-list/feed-list.component';
import { FeedItemComponent } from './feed/feed-item/feed-item.component';
import { FeedService } from './feed/feed-service';
import { CardComponent } from 'ng2-bootstrap-card/ng2-bootstrap-card';
import {FormsModule ,ReactiveFormsModule } from '@angular/forms'


import { ProfileComponent } from './profile/profile.component';
// import { CommunitiesComponent } from './';
import { 
          MatAutocompleteModule,
          MatButtonModule,
          MatButtonToggleModule,
          MatCardModule,
          MatCheckboxModule,
          MatChipsModule,
          MatStepperModule,
          MatDatepickerModule,
          MatDialogModule,
          MatExpansionModule,
          MatGridListModule,
          MatIconModule,
          MatInputModule,
          MatListModule,
          MatMenuModule,
          MatNativeDateModule,
          MatPaginatorModule,
          MatProgressBarModule,
          MatProgressSpinnerModule,
          MatRadioModule,
          MatRippleModule,
          MatSelectModule,
          MatSidenavModule,
          MatSliderModule,
          MatSlideToggleModule,
          MatSnackBarModule,
          MatSortModule,
          MatTableModule,
          MatTabsModule,
          MatToolbarModule,
          MatTooltipModule, } from '@angular/material';
import { LiveComponent } from './live/live.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { HttpModule } from '@angular/http';
import { AddRecipeComponent } from './feed/add-recipes/add-recipes.component';


@NgModule({
  // exports:[
  //   MatCardModule,
  //   MatButtonModule,
  //   MatButtonToggleModule,
  // ],

  declarations: [
    AppComponent,
    NavBarComponent,
    FeedComponent,
    FeedListComponent,
    FeedItemComponent,
    CardComponent,
    DropdownDirective,
    ProfileComponent,
    AddRecipeComponent,
    // CommunitiesComponent,
    LiveComponent,
    FavoriteComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    routing,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [FeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
