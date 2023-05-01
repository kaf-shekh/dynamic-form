import { Component, ViewEncapsulation } from "@angular/core";
import { UntypedFormGroup, UntypedFormArray } from "@angular/forms";
import {
    DynamicFormArrayModel,
    DynamicFormControlModel,
    DynamicFormGroupModel,
    DynamicFormLayout,
    DynamicFormService,
    DynamicFormValueControlModel,
    DynamicInputModel
} from "@ng-dynamic-forms/core";
import { NGX_BOOTSTRAP_SAMPLE_FORM_MODEL } from "./ngx-bootstrap-sample-form.model";
import { NGX_BOOTSTRAP_SAMPLE_FORM_LAYOUT } from "./ngx-bootstrap-sample-form.layout";
import { DynamicFormControlEvent } from "../../../projects/ng-dynamic-forms/core/src/lib/component/dynamic-form-control-event";

@Component({
    selector: "dynamic-ngx-bootstrap-sample-form",
    templateUrl: "./ngx-bootstrap-sample-form.component.html",
    encapsulation: ViewEncapsulation.None
})
export class NgxBootstrapSampleFormComponent {
    formModel: DynamicFormControlModel[] = NGX_BOOTSTRAP_SAMPLE_FORM_MODEL;
    formLayout: DynamicFormLayout = NGX_BOOTSTRAP_SAMPLE_FORM_LAYOUT;
    formGroup = this.formService.createFormGroup(this.formModel);

    sampleFormControlModel = this.formService.findModelById<DynamicInputModel>("bsInput", this.formModel) as DynamicInputModel;

    formArrayModel = this.formService.findModelById<DynamicFormArrayModel>("bsFormArray", this.formModel) as DynamicFormArrayModel;
    formArray = this.formService.findControlByModel<UntypedFormArray>(this.formArrayModel, this.formGroup) as UntypedFormArray;

    constructor(private formService: DynamicFormService) {
    }

    getFormArray(model: DynamicFormArrayModel, group: UntypedFormGroup): UntypedFormArray {
        return this.formService.findControlByModel(model, group) as UntypedFormArray;
    }

    insert(context: DynamicFormArrayModel, index: number) {
        this.formService.insertFormArrayGroup(index, this.getFormArray(context, this.formGroup), context);
    }

    remove(context: DynamicFormArrayModel, index: number) {
        this.formService.removeFormArrayGroup(index, this.getFormArray(context, this.formGroup), context);
    }

    move(context: DynamicFormArrayModel, index: number, step: number) {
        this.formService.moveFormArrayGroup(index, step, this.getFormArray(context, this.formGroup), context);
    }

    clear() {
        this.formService.clearFormArray(this.formArray, this.formArrayModel);
    }

    onBlur($event: DynamicFormControlEvent) {
        console.log(`BLUR event on ${$event.model.id}: `, $event);
    }

    onChange($event: DynamicFormControlEvent) {
        console.log(`CHANGE event on ${$event.model.id}: `, $event);
    }

    onFocus($event: DynamicFormControlEvent) {
        console.log(`FOCUS event on ${$event.model.id}: `, $event);
    }

    test() {
        this.sampleFormControlModel.disabled = !this.sampleFormControlModel.disabled;
        this.sampleFormControlModel.value = "Hello Hello";

        (this.formArrayModel.get(1).group[0] as DynamicFormValueControlModel<any>).value = "This is just a test";

        this.formService.moveFormArrayGroup(2, -1, this.formArray, this.formArrayModel);

        this.formService.addFormGroupControl(
            this.formGroup,
            this.formModel,
            new DynamicFormGroupModel({
                id: "bsFormGroup3",
                group: [new DynamicInputModel({id: "newInput"})]
            })
        );

        this.formService.addFormGroupControl(
            this.formGroup.get("bsFormGroup3") as UntypedFormGroup,
            this.formModel[2] as DynamicFormGroupModel,
            new DynamicInputModel({id: "newInput"})
        );

        this.formService.detectChanges();
    }
}
