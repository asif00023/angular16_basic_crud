import { Component, Input, ViewChild } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { faTrashCan,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {SalutationsEnum} from 'src/app/model/salutations';
import { ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { ToastSuccessComponent } from '../../../containers/toast-success/toast-success.component';
import { ToastErrorComponent } from '../../../containers/toast-error/toast-error.component';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  faTrashCan = faTrashCan;
  faPenToSquare=faPenToSquare;
  newdata:any;
  salutationLst = SalutationsEnum;

  // placement = ToasterPlacement.TopEnd;

  @ViewChild(ToasterComponent) toasterSuccess!: ToasterComponent;
  @ViewChild(ToasterComponent) toasterError!: ToasterComponent;
  
  @Input() viewMode = false;
  @Input() currentContact: Contact = {
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

  // message = '';
  keys: any[];
  // salutationVal:string="";
  currentStatus: any;
  

  constructor(private contactService: ContactService,
    // private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.keys = Object.keys(this.salutationLst).filter(Number);    
  }
  
  ngOnInit(): void {
    if (!this.viewMode) {
      // this.message = '';
      this.getContact(this.route.snapshot.params['id']);
    }
    else{
      // alert("tt");
    }
  }
  getContact(id: Number): void {
    this.contactService.get(id).subscribe({
      next: (data) => {
          this.newdata=data;
          this.currentContact=JSON.parse(JSON.stringify(this.newdata.responseBody.objectVal));
          // this.salutationVal=this.getValueByKeyForNumberEnum(this.currentContact.salutation);
          // console.log(this.salutationVal);
      },
      error: (e) => console.error(e)
    });
  }

  getValueByKeyForNumberEnum(value: string) {
    return Object.entries(SalutationsEnum).find(([key, val]) => key === value)?.[1].toString()+"";
  }
  updateTutorial(): void {
    // this.message = '';

    this.contactService.update(this.currentContact.id, this.currentContact)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.newdata=res;
          this.currentStatus=JSON.parse(JSON.stringify(this.newdata.responseBody.statusCode));
          // this.message = res.message
          //   ? res.message
          //   : 'This tutorial was updated successfully!';
            if(this.currentStatus==="OK"){
              const componentRef = this.toasterSuccess.addToast(ToastSuccessComponent, { Option });
              // this.router.navigate(['/contact/contact-index']);
              // this.router.navigate(['/heroes']).then(() => {
              //   this.toasts.show('message');
              // })
            }
            else{
              const options = {
                postMessage:'i kill you',
                delay: 5000,
              }
              const componentRef = this.toasterError.addToast(ToastErrorComponent, { ...options });
            }
        },
        error: (e) =>{ 
          console.error(e);
          const options = {
            postMessage:'i kill you',
            delay: 5000,
          }
          const componentRef = this.toasterError.addToast(ToastErrorComponent, { ...options });
          
          
        }
      });
  }
  
}