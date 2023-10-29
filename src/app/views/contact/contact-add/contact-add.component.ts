import { Component,OnInit } from '@angular/core';
import {Contact} from 'src/app/model/contact';
import {ContactService} from 'src/app/service/contact.service';
import { Router } from '@angular/router';
import {SalutationsEnum} from 'src/app/model/salutations';


@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.scss']
})
export class ContactAddComponent implements OnInit {
  
  salutationLst = SalutationsEnum;
  
  keys: any[];

  contact: Contact = {
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
  newdata: any;
  currentStatus: any;
  
  constructor(private contactService: ContactService,
    private router: Router) {
      this.keys = Object.keys(this.salutationLst).filter(Number);    
     }

  ngOnInit(): void {
  }



  saveContact(): void {
    this.contactService.create(this.contact).subscribe({
      next: (res) => {
        console.log(res);
        this.newdata=res;
          this.currentStatus=JSON.parse(JSON.stringify(this.newdata.responseBody.statusCode));
          if(this.currentStatus==="OK"){
            this.router.navigate(['/contact/contact-index']);
          }
      },
      error: (e) => console.error(e)
    });
  }

}