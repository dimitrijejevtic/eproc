import { Component, OnInit, Type, OnDestroy, Input } from '@angular/core';
import { ListInput } from '../../m-models/attributes/list-input';
import { PropertyResolver } from '../../m-resolvers/property-resolver';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { FormGroup } from '@angular/forms';
import { ModalContentComponent } from '../../modal/modal-content/modal-content.component';
import { ObjectInstanceService } from '../../services/object-instance.service';
import { ObjectInstance } from '../../m-models/object-instance';
import { Extensions } from '../../utils/extensions';
import { BsModalService } from 'ngx-bootstrap/modal';

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
  constructor(private resolver: PropertyResolver<ListInput>, private modalService: BsModalService) {

  }

  ngOnInit() {

    this.ngxData = this.data.getNgxData();
  }
  addItem() {
    const initState = {passtrough: this.data.Value[0]};

    const modal = this.modalService.show(ModalContentComponent, {class: 'modal-lg', initialState: initState});

    modal.content.onHide.subscribe((result) => {
      console.log('caught result');
      console.log(result);
      if (result !== null) {
        console.log('res not nul');
        this.data.Value.push(result);
        const newrows = Extensions.getNgxData([result], this.data.columnDefinition);
        console.log(newrows);
        this.ngxData = this.ngxData.concat(newrows);

        this.ngxData = [...this.ngxData];
      }
    });

  }

}
