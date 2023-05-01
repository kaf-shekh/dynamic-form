import { Component, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { Slider } from "primeng/slider";
import {
    DynamicFormControlCustomEvent,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicFormControlComponent,
    DynamicSliderModel,
    DynamicFormControlLayout
} from "@ng-dynamic-forms/core";

@Component({
    selector: "dynamic-primeng-slider",
    templateUrl: "./dynamic-primeng-slider.component.html"
})
export class DynamicPrimeNGSliderComponent extends DynamicFormControlComponent {
    @Input() formLayout?: DynamicFormLayout;
    @Input() group!: UntypedFormGroup;
    @Input() layout?: DynamicFormControlLayout;
    @Input() model!: DynamicSliderModel;

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() customEvent: EventEmitter<DynamicFormControlCustomEvent> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("pSlider", {static: true}) pSlider!: Slider;

    constructor(protected layoutService: DynamicFormLayoutService, protected validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }
}
