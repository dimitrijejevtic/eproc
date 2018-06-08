import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Section } from '../../m-models/section';
import { StepContentTargetDirective } from '../../step/step-content-target.directive';
import { environment } from '../../../environments/environment';
import { PropertyResolver } from '../../m-resolvers/property-resolver';
import { FormGroup } from '@angular/forms';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { ObjectInstanceService } from '../../services/object-instance.service';
import { ObjectInstance } from '../../m-models/object-instance';
import { AttributeToPropertyField } from '../../m-resolvers/attribute-to-propertyfield';
import { PropertyField } from '../../m-interfaces/property-field';
import { TextInput } from '../../m-models/attributes/text-input';
import { DictionaryAttribute } from '../../m-models/dictionary-attribute';
import { FormServiceService } from '../../services/form-service.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [PropertyResolver]
})
export class SectionComponent implements OnInit {

  @Input() section: Section;
  form: FormGroup;
  @ViewChild(StepContentTargetDirective) contentTarget: StepContentTargetDirective;

  constructor(private componentResolver: ComponentFactoryResolver, private formService: FormServiceService) { }

  ngOnInit() {
    this.formService.activeForm.subscribe(f => this.form = f);
    const target = this.contentTarget.viewContainerRef;
    let vals: PropertyField[] = null;

    vals = AttributeToPropertyField.Resolve(this.section.DictionaryDataUnitParent.DicionaryAttributInDataUnitChildren);

    if (this.section !== null) {
      if (vals !== undefined && vals !== null && vals.length > 0) {
        for (let i = 0; i < vals.length; i++) {
          const tp = vals[i].getType();
          const resolver = new PropertyResolver<typeof tp>();
          const c = resolver.getComponent(this.componentResolver, vals[i]);
          const cd = target.createComponent(c);
          (<BuilderComponent<any>>cd.instance).data = vals[i];
          (<BuilderComponent<any>>cd.instance).form = this.form;
        }
        vals.forEach((element: PropertyField) => {

        });
      }
    }
  }
}
