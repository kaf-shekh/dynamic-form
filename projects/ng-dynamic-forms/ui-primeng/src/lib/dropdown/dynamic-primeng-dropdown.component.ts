import { Component, EventEmitter, Input, Output, QueryList, ViewChild } from "@angular/core";
import { UntypedFormGroup } from "@angular/forms";
import { Dropdown } from "primeng/dropdown";
import {
    DynamicFormControlLayout,
    DynamicFormLayout,
    DynamicFormLayoutService,
    DynamicFormValidationService,
    DynamicSelectModel,
    DynamicTemplateDirective
} from "@ng-dynamic-forms/core";
import { PRIME_NG_TEMPLATE_DIRECTIVES } from "../dynamic-primeng-form.const";
import { DynamicPrimeNGFormControlWithTemplateComponent } from "../dynamic-primeng-form-control-with-template.component";

@Component({
    selector: "dynamic-primeng-dropdown",
    templateUrl: "./dynamic-primeng-dropdown.component.html"
})
export class DynamicPrimeNGDropdownComponent extends DynamicPrimeNGFormControlWithTemplateComponent {
    readonly templateDirectives = PRIME_NG_TEMPLATE_DIRECTIVES;

    @Input() formLayout?: DynamicFormLayout;
    @Input() group!: UntypedFormGroup;
    @Input() layout?: DynamicFormControlLayout;
    @Input() model!: DynamicSelectModel<string>;
    @Input() templates?: QueryList<DynamicTemplateDirective> | DynamicTemplateDirective[];

    @Output() blur: EventEmitter<any> = new EventEmitter();
    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() focus: EventEmitter<any> = new EventEmitter();

    @ViewChild("pDropdown", {static: true}) pDropdown!: Dropdown;

    constructor(protected layoutService: DynamicFormLayoutService, protected validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }

    get viewChild(): Dropdown {
        return this.pDropdown;
    }
}
