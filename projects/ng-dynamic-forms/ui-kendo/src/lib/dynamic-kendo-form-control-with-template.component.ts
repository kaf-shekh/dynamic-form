import { TemplateRef } from "@angular/core";
import { DynamicFormControlWithTemplateComponent, DynamicTemplateDirective } from "@ng-dynamic-forms/core";

export abstract class DynamicKendoFormControlWithTemplateComponent extends DynamicFormControlWithTemplateComponent {
    mapTemplate(template: DynamicTemplateDirective): DynamicTemplateDirective | TemplateRef<any> {
        return template;
    }
}
