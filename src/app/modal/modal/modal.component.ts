import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../modal-content/modal-content.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  {


  closeResult: string;
  constructor(private modalService: NgbModal) { }

  open() {
    const modal = this.modalService.open(ModalContentComponent, {size: 'lg'});
   // modal.componentInstance.instance = this.instance;
  }

}
