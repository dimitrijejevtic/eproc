import { Component, OnInit, OnDestroy } from '@angular/core';
import { ObjectInstance } from '../../m-models/object-instance';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit, OnDestroy {

  passtrough: any;
  instance: ObjectInstance;
  constructor(public activeModal: BsModalRef) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }
  returningInstance(event) {
    this.instance = event.value;
  }
  closeModal(param: any) {
    console.log('closemodal');
    this.activeModal.hide();
  }

}
