import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { M1OutlinedInputComponent } from './components/m1-outlined-input/m1-outlined-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { M1AutoCompleteComponent } from './components/m1-autocomplete/m1-autocomplete.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { AvatarModule } from 'ngx-avatar';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { M1ChiplistComponent } from './components/m1-chiplist/m1-chiplist.component';
import { M1SearchComponent } from './components/m1-search/m1-search.component';
import { M1LinkComponent } from './components/m1-link/m1-link.component';
import { M1RadioComponent } from './components/m1-radio/m1-radio.component';
import { MatRadioModule } from '@angular/material/radio';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { M1InputComponent } from './components/m1-input/m1-input.component';

@NgModule({
  declarations: [
    M1OutlinedInputComponent,
    M1AutoCompleteComponent,
    M1ChiplistComponent,
    M1SearchComponent,
    M1LinkComponent,
    M1RadioComponent,
    M1InputComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    NgxMaskModule.forRoot(),
    FormlyModule.forRoot({
      types: [
        { name: 'input', component: M1InputComponent, wrappers: [] },
        {
          name: 'm1-outlined-input',
          component: M1OutlinedInputComponent,
          wrappers: [],
        }, 
        {
          name: 'm1-autocomplete',
          component: M1AutoCompleteComponent,
          wrappers: ['form-field'],
        },
        { name: 'm1-chiplist', component: M1ChiplistComponent },
        {
          name: 'm1-search',
          component: M1SearchComponent,
          wrappers: ['form-field'],
        },
        { name: 'm1-link', component: M1LinkComponent },
        { name: 'm1-radio', component: M1RadioComponent, wrappers: [] },
      ]
    }),
    FormlyMaterialModule,
    AvatarModule,
    MatChipsModule,
    MatListModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDatepickerModule,
    FormlyMatDatepickerModule,
  ],
  exports: [
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    M1AutoCompleteComponent,
    M1OutlinedInputComponent,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    NgxMaskModule,
    MatButtonModule,
    AvatarModule,
    MatChipsModule,
    MatListModule,
    M1ChiplistComponent,
    M1SearchComponent,
    M1LinkComponent,
    MatRadioModule,
    M1RadioComponent,
    M1InputComponent
  ]
})
export class NgxM1FormlyModule { }
