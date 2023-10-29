import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Renderer2 } from '@angular/core';

import { ToastComponent, ToasterService } from '@coreui/angular';

// @Component({
//   selector: 'app-toast-success',
//   templateUrl: './toast-success.component.html',
//   styleUrls: ['./toast-success.component.scss']
// })
@Component({
  selector: 'app-toast-success',
  templateUrl: './toast-success.component.html',
  styleUrls: ['./toast-success.component.scss'],
  providers: [{ provide: ToastComponent, useExisting: forwardRef(() => ToastSuccessComponent) }]
})
export class ToastSuccessComponent extends ToastComponent {
  @Input() closeButton = true;
  @Input() title = '';
  position = 'top-end';
  visibl:boolean = false;
  percentage = 0;

  constructor(
    public override hostElement: ElementRef,
    public override renderer: Renderer2,
    public override toasterService: ToasterService,
    public override changeDetectorRef: ChangeDetectorRef
  ) {
    super(hostElement, renderer, toasterService, changeDetectorRef);
  }
}







