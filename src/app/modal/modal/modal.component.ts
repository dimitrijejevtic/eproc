import { Component } from '@angular/core';

import { ModalContentComponent } from '../modal-content/modal-content.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {

  closeResult: string;
  constructor(private modalService: BsModalService) { }

  open() {
    const modal = this.modalService.show(ModalContentComponent, {class: 'modal-lg'});
   // modal.componentInstance.instance = this.instance;
  }

}
