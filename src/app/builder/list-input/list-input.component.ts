import { Component, OnInit, Type, OnDestroy, Input } from '@angular/core';
import { ListInput } from '../../m-models/attributes/list-input';
import { PropertyResolver } from '../../m-resolvers/property-resolver';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from '../../modal/modal-content/modal-content.component';
import { ObjectInstanceService } from '../../services/object-instance.service';
import { ObjectInstance } from '../../m-models/object-instance';
import { Extensions } from '../../utils/extensions';

@Component({
  selector: 'list-input',
  templateUrl: './list-input.component.html',
  styleUrls: ['./list-input.component.css']
})
export class ListInputComponent implements OnInit, OnDestroy, BuilderComponent<ListInput> {

  form: FormGroup;
  data: ListInput;
  ngxData = [];
  ngOnDestroy(): void {
  }
  constructor(private resolver: PropertyResolver<ListInput>, private modalService: NgbModal) {

  }

  ngOnInit() {

    this.ngxData = this.data.getNgxData();
  }
  addItem() {
    const modal = this.modalService.open(ModalContentComponent, { size: 'lg' });
    modal.componentInstance.instance = this.data.value[0];
    modal.result.then((result) => {
      console.log('caught result');
      console.log(result);
      if (result !== null) {
        console.log('res not nul');
        this.data.value.push(result);
        const newrows = Extensions.getNgxData([result], this.data.columnDefinition);
        console.log(newrows);
        this.ngxData = this.ngxData.concat(newrows);

        this.ngxData = [...this.ngxData];
      }
    });

  }

}
