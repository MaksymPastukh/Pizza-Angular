import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[isChicken]'
})
export class IsChickenDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }
  @Input()
  set isChicken(subTitle: string) {
    if(subTitle.toLowerCase().includes('chic')) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else  {
      this.viewContainer.clear()
    }
  }
}
