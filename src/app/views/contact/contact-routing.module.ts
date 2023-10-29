import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactIndexComponent } from './contact-index/contact-index.component';

import { ContactAddComponent } from './contact-add/contact-add.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const routes: Routes = [
  {
    path: 'contact-index',
    component: ContactIndexComponent,
    data: {
      title: 'index'
    }
  },
  {
    path: 'contact-add',
    component: ContactAddComponent,
    data: {
      title: 'Create'
    }
  },
  {
    
    path: 'contact-details/:id',
    component: ContactDetailsComponent,
    data: {
      title: 'Details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
