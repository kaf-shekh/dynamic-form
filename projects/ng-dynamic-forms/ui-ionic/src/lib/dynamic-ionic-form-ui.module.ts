import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";
import {
    DynamicIonicFormArrayComponent,
    DynamicIonicFormControlContainerComponent,
    DynamicIonicFormGroupComponent
} from "./dynamic-ionic-form-control-container.component";
import { DynamicIonicFormComponent } from "./dynamic-ionic-form.component";
import { DynamicIonicCheckboxComponent } from "./checkbox/dynamic-ionic-checkbox.component";
import { DynamicIonicDateTimeComponent } from "./datetime/dynamic-ionic-datetime.component";
import { DynamicIonicInputComponent } from "./input/dynamic-ionic-input.component";
import { DynamicIonicRadioGroupComponent } from "./radio-group/dynamic-ionic-radio-group.component";
import { DynamicIonicRangeComponent } from "./range/dynamic-ionic-range.component";
import { DynamicIonicSelectComponent } from "./select/dynamic-ionic-select.component";
import { DynamicIonicTextAreaComponent } from "./textarea/dynamic-ionic-textarea.component";
import { DynamicIonicToggleComponent } from "./toggle/dynamic-ionic-toggle.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        DynamicFormsCoreModule
    ],
    declarations: [
        DynamicIonicCheckboxComponent,
        DynamicIonicDateTimeComponent,
        DynamicIonicFormArrayComponent,
        DynamicIonicFormComponent,
        DynamicIonicFormControlContainerComponent,
        DynamicIonicFormGroupComponent,
        DynamicIonicInputComponent,
        DynamicIonicRadioGroupComponent,
        DynamicIonicRangeComponent,
        DynamicIonicSelectComponent,
        DynamicIonicTextAreaComponent,
        DynamicIonicToggleComponent
    ],
    exports: [
        DynamicFormsCoreModule,
        DynamicIonicCheckboxComponent,
        DynamicIonicDateTimeComponent,
        DynamicIonicFormArrayComponent,
        DynamicIonicFormComponent,
        DynamicIonicFormControlContainerComponent,
        DynamicIonicFormGroupComponent,
        DynamicIonicInputComponent,
        DynamicIonicRadioGroupComponent,
        DynamicIonicRangeComponent,
        DynamicIonicSelectComponent,
        DynamicIonicTextAreaComponent,
        DynamicIonicToggleComponent
    ]
})
export class DynamicFormsIonicUIModule {
}
