import { NgModule } from '@angular/core'
import { 
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule,
    MatIconModule, MatSnackBarModule
} from '@angular/material'

@NgModule({
    declarations: [
        
    ],
    imports: [
        MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule
    ],
    providers: [],
})
export class MaterialModule { }
