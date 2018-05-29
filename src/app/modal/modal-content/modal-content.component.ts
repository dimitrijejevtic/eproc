import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ObjectInstance } from '../../m-models/object-instance';

@Component({
  selector: 'modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit, OnDestroy {


  instance: ObjectInstance;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  ngOnDestroy(): void {
  }
  returningInstance(event) {
    this.instance = event.value;
  }

}
