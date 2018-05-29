import { Injectable } from '@angular/core';
import { TextInput } from '../m-models/attributes/text-input';
import { CheckboxInput } from '../m-models/attributes/checkbox-input';
import { PropertyField } from '../m-interfaces/property-field';
import { RadioButton } from '../m-models/attributes/radio-button';
import { TextareaInput } from '../m-models/attributes/textarea-input';
import { ObjectInstance, ListColumnDisplay } from '../m-models/object-instance';
import { DataType } from '../m-models/data-type.enum';
import { SelectInput } from '../m-models/attributes/select-input';
import { LookupInput } from '../m-models/attributes/lookup-input';
import { Datetimepicker } from '../m-models/attributes/datetimepicker';
import { Datepicker } from '../m-models/attributes/datepicker';
import { ListInput } from '../m-models/attributes/list-input';
import { ObjectInstanceService } from './object-instance.service';
import { Section } from '../m-models/section';
import { Step } from '../m-models/step';

@Injectable({
  providedIn: 'root'
})
export class MockupDataService {

  objectInstance: ObjectInstance = new ObjectInstance();
  mockdata: PropertyField[] = [];
  constructor(private objectService: ObjectInstanceService) {
    const t1 = new TextInput();
    const section1 = new Section();
    section1.name = 'mockse';
    section1.caption = 'mockse';
    t1.name = 'ime';
    t1.value = 'vrednost';
    t1.expressionVisibility = true;
    section1.setValue('ime', t1);
    this.mockdata.push(t1);

    const t2 = new CheckboxInput();
    t2.name = 'da_li';
    t2.value = true;
    section1.setValue('da_li', t2);
    this.mockdata.push(t2);

    const t3 = new RadioButton();
    t3.name = 'da_li2';
    t3.value = true;
    section1.setValue('da_li2', t3);
    this.mockdata.push(t3);

    const t4 = new TextareaInput();
    t4.name = 'da_li3';
    t4.value = 'asf ad fasdf as fasd ';
    section1.setValue('da_l3', t4);
    this.mockdata.push(t4);

    this.objectInstance.sections.push(section1);

   }
   getMockData() {
     return this.mockdata;
   }
   getMockObjInstance() {
    const instance = new ObjectInstance();

    const section1 = new Section();
    section1.name = 'section1';
    section1.caption = 'section1';
    section1.objectInstanceId = instance.id;
    let t1 = new TextInput();
    t1.name = 'ime';
    t1.value = 'vrednost';
    t1.expressionVisibility = true;
    t1.expressionReadOnly = false;
    t1.caption = 'caption polja';

    section1.setValue('ime', t1);

    t1 = new TextInput();
    t1.name = 'broj';
    t1.value = 44;
    t1.expressionVisibility = true;
    t1.caption = 'caption polja';
    t1.dataType = DataType.integer;
    section1.setValue('broj', t1);

    t1 = new TextInput();
    t1.name = 'broj2';
    t1.value = 0.47;
    t1.expressionVisibility = true;
    t1.caption = 'caption polja';
    t1.dataType = DataType.decimal;
    t1.decimalStep = '.01';
    section1.setValue('broj2', t1);

    t1 = new TextInput();
    t1.name = 'broj3';
    t1.value = 0.11;
    t1.expressionVisibility = true;
    t1.expressionReadOnly = false;
    t1.caption = 'caption polja';
    t1.dataType = DataType.decimal;
    t1.decimalStep = '.01';
    section1.setValue('broj3', t1);

    const t2 = new CheckboxInput();
    t2.name = 'da_li';
    t2.value = true;
    t2.expressionVisibility = true;
    t2.caption = 'opis ckecbox';
    section1.setValue('da_li', t2);

    const t3 = new RadioButton();
    t3.name = 'da_li2';
    t3.value = true;
    t3.expressionVisibility = true;
    section1.setValue('da_li2', t3);

    const t4 = new TextareaInput();
    t4.name = 'da_li3';
    t4.value = 'asf ad fasdf as fasd ';
    t4.expressionVisibility = true;
    t4.caption = 'area';
    section1.setValue('da_li3', t4);

    const t5 = new SelectInput();
    t5.name = 'selectng';

    t5.expressionVisibility = true;
    t5.options = [];
    t5.value = 1;
    t5.options.push({'id': 1, 'name': 'opt1'});
    t5.options.push({'id': 3, 'name': 'opt2'});
    t5.options.push({'id': 2, 'name': 'opt5'});
    t5.caption = 'select';
    section1.setValue('selectng', t5);

    const t6 = new LookupInput();
    t6.name = 'lookup';
    t6.expressionVisibility = true;
    t6.caption = 'lookup';
    section1.setValue('lookup', t6);

    const dt1 = new Datetimepicker();
    dt1.name = 'datetime';
    dt1.caption = 'datetime';
    dt1.expressionVisibility = true;
    section1.setValue('datetime', dt1);

    const dt2 = new Datepicker();
    dt2.name = 'date';
    dt2.caption = 'date';
    dt2.expressionVisibility = true;
    section1.setValue('date', dt2);

    instance.sections.push(section1);

    const section2 = new Section();
    section2.name = 'section2';
    section2.caption = 'section2';
    section2.objectInstanceId = instance.id;


    // list instances
    const lin = new ObjectInstance();
    const secl = new Section();
    secl.name = 'listsec';

    const tl = new TextInput();
    tl.name = 'ime';
    tl.value = 'vrednost';
    tl.expressionVisibility = true;
    tl.expressionReadOnly = false;
    tl.caption = 'caption polja';

    secl.setValue('ime', tl);

    const tl2 = new TextInput();
    tl2.name = 'broj';
    tl2.value = 2;
    tl2.expressionVisibility = true;
    tl2.expressionReadOnly = false;
    tl2.caption = 'caption polja';

    secl.setValue('broj', tl2);

    lin.sections.push(secl);
    //
    const ls1 = new ListInput();
    ls1.name = 'listi';
    ls1.caption = 'listi';
    ls1.value = [];
    ls1.value.push(lin);
    ls1.value.push(lin);
    ls1.columnDefinition = [];
    ls1.expressionVisibility = true;
    this.objectService.setById(lin.id, lin);

    const cd = new ListColumnDisplay();
    cd.name = 'ime';
    const cd2 = new ListColumnDisplay();
    cd2.name = 'broj';

    ls1.columnDefinition.push(cd);
    ls1.columnDefinition.push(cd2);
    section2.setValue('listi', ls1);
    instance.sections.push(section2);

    this.objectService.setById(instance.id, instance);




    const liinner = new ObjectInstance();
    const secinner = new Section();
    secinner.name = 'listsec';
    secinner.objectInstanceId = liinner.id;

    const tinner = new TextInput();
    tinner.name = 'ime2';
    tinner.value = 'vrednost';
    tinner.expressionVisibility = true;
    tinner.expressionReadOnly = false;
    tinner.caption = 'caption polja';

    secinner.setValue('ime2', tinner);

    const tinner2 = new TextInput();
    tinner2.name = 'broj2';
    tinner2.value = 2;
    tinner2.expressionVisibility = true;
    tinner2.expressionReadOnly = false;
    tinner2.caption = 'caption polja';

    secinner.setValue('broj2', tinner2);

    liinner.sections.push(secinner);
    //
    const lsinner = new ListInput();
    lsinner.name = 'listinner';
    lsinner.caption = 'listinner';
    lsinner.value = [];
    lsinner.value.push(liinner);
    lsinner.value.push(liinner);
    lsinner.columnDefinition = [];
    lsinner.expressionVisibility = true;
    this.objectService.setById(liinner.id, liinner);

    const cdi = new ListColumnDisplay();
    cdi.name = 'ime2';
    const cdi2 = new ListColumnDisplay();
    cdi2.name = 'broj2';

    lsinner.columnDefinition.push(cdi);
    lsinner.columnDefinition.push(cdi2);

    secl.setValue('listinner', lsinner);

     return instance;
   }
   getMockSteps(): Step[] {
    const steps: Step[] = [];
    const s1 = new Step();
    s1.name = 'step1';
    s1.id = 1;

    s1.objectInstance = this.getMockObjInstance();
    s1.objectInstance.sections.forEach(sec => {
      sec.objectInstanceId = s1.objectInstance.id;
      s1.sections.push(sec);
    });

    steps.push(s1);
    const s2 = new Step();
    s2.name = 'step2';
    s2.id = 2;
    steps.push(s2);
    const s3 = new Step();
    s3.name = 'step3';
    s3.id = 3;
    steps.push(s3);
    return steps;
   }
}
