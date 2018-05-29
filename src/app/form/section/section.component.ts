import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Section } from '../../m-models/section';
import { StepContentTargetDirective } from '../../step/step-content-target.directive';
import { environment } from '../../../environments/environment';
import { PropertyResolver } from '../../m-resolvers/property-resolver';
import { FormGroup } from '@angular/forms';
import { BuilderComponent } from '../../m-interfaces/builder-component';
import { ObjectInstanceService } from '../../services/object-instance.service';
import { ObjectInstance } from '../../m-models/object-instance';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [PropertyResolver]
})
export class SectionComponent implements OnInit {

  @Input() section: Section;
  @Input() form: FormGroup;
  @ViewChild(StepContentTargetDirective) contentTarget: StepContentTargetDirective;

  constructor(private componentResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const target = this.contentTarget.viewContainerRef;
    let vals = null;
    if (!environment.production) {
      // vals = this.section.getValues();
      vals  = this.section.getValues();
    }

    if (this.section !== null) {
      if (vals !== null)
      console.log(vals);
        vals.forEach(element => {
          const tp = element.getType();
          const resolver = new PropertyResolver<typeof tp>();
          const c = resolver.getComponent(this.componentResolver, element);
          const cd = target.createComponent(c);
          (<BuilderComponent<any>>cd.instance).data = element;
          (<BuilderComponent<any>>cd.instance).form = this.form;
        });
    }
  }

}
