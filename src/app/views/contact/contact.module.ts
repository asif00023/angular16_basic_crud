import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactIndexComponent } from './contact-index/contact-index.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ToastModule } from '@coreui/angular';
// import { ProgressModule } from '@coreui/angular';

@NgModule({
  declarations: [
    ContactIndexComponent,
    ContactAddComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastModule,
    // ProgressModule
    // ContactModule
  ]
})
export class ContactModule { }
