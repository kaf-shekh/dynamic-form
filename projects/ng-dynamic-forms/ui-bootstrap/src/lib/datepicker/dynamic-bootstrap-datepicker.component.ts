import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { BsDatepickerDirective } from "ngx-bootstrap/datepicker";
import {
    DynamicDatePickerModel,
    DynamicFormControlComponent,
    DynamicFormControlCustomEvent,
    DynamicFormControlLayout,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService
} from "@ng-dynamic-forms/core";

@Component({
    selector: "dynamic-bootstrap-datepicker",
    templateUrl: "./dynamic-bootstrap-datepicker.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicBootstrapDatePickerComponent extends DynamicFormControlComponent {
    @Input() formLayout?: DynamicFormLayout;
    @Input() group!: UntypedFormGroup;
    @Input() layout?: DynamicFormControlLayout;
    @Input() model!: DynamicDatePickerModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild(BsDatepickerDirective, {static: true}) bsDatePicker!: BsDatepickerDirective;

    constructor(protected layoutService: DynamicFormLayoutService, protected validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }
}
