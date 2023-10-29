import { Component } from '@angular/core';
import { faTrashCan,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {Contact} from 'src/app/model/contact';
import {ContactService} from 'src/app/service/contact.service';
import {SalutationsEnum} from 'src/app/model/salutations';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent {
  faTrashCan = faTrashCan;
  faPenToSquare=faPenToSquare;
  contacts?: Contact[];
  newdata:any;
  salutationLst = SalutationsEnum;
  keys: any[];
  
  currentContact: Contact = {
    id:0,
    salutation: '',
    firstName: '',
    // lastname: '',
    lastName: '',
    displayName:'',    
    email:'',
    phoneNumber:'',
    birthDate: new Date()
  };
  currentIndex = -1;
  
  // title = '';
  constructor(private contactService: ContactService) {
    this.keys = Object.keys(this.salutationLst).filter(Number);
    
    console.log(this.keys);
   }

  ngOnInit(): void {
    this.retrieveTutorials();
    
  }

  retrieveTutorials(): void {
    this.contactService.getAll()
      .subscribe({
        next: (data) => {
          // this.contacts = data;
          this.newdata=data;
          this.contacts=this.newdata.responseBody.objectVal;
          console.log(this.newdata.responseBody.objectVal);
          
        },
        error: (e) => console.error(e)
      });
  }
  getValueByKeyForNumberEnum(value: string) {
    return Object.entries(SalutationsEnum).find(([key, val]) => key === value)?.[1].toString()+"";
  }
  refreshList(): void {
    this.retrieveTutorials();
    this.currentContact = {
      id:0,
      salutation: '',
    firstName: '',
    lastName: '',
    // lastname: '',
    displayName:'',    
    email:'',
    phoneNumber:'',
    birthDate: new Date()
    };
    this.currentIndex = -1;
  }

  setActiveContact(contact: Contact, index: number): void {
    this.currentContact = contact;
    this.currentIndex = index;
  }
}
