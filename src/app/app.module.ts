import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireModule } from 'angularfire2'

import { AppComponent } from './app.component'
import { environment } from 'src/environments/environment'

import { MaterialModule } from './shared/material.module'
import { AppRoutingModule } from './shared/app-routing.module'

import { PostListComponent } from './post-list/post-list.component'
import { PostListItemComponent } from './post-list/post-list-item/post-list-item.component'
import { PostDetailComponent } from './post-detail/post-detail.component'

@NgModule({
    declarations: [
        AppComponent,

        PostListComponent,
        PostListItemComponent,
        PostDetailComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,

        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,

        MaterialModule,
        FlexLayoutModule,

        AppRoutingModule
    ],
    providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
