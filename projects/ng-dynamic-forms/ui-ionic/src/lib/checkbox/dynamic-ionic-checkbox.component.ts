import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { IonCheckbox } from "@ionic/angular";
import { UntypedFormGroup } from "@angular/forms";
import {
    DynamicCheckboxModel,
    DynamicFormControlLayout,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicFormControlComponent
} from "@ng-dynamic-forms/core";

@Component({
    selector: "dynamic-ionic-checkbox",
    templateUrl: "./dynamic-ionic-checkbox.component.html"
})
export class DynamicIonicCheckboxComponent extends DynamicFormControlComponent {
    @Input() formLayout?: DynamicFormLayout;
    @Input() group!: UntypedFormGroup;
    @Input() layout?: DynamicFormControlLayout;
    @Input() model!: DynamicCheckboxModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("ionCheckbox", {static: true}) ionCheckbox!: IonCheckbox;

    constructor(protected layoutService: DynamicFormLayoutService, protected validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }
}
