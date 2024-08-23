import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective implements OnInit {
  constructor(private el: ElementRef, private rend: Renderer2) {
  }

  @Input() coolInputDefaultBgColor: string = 'white'
  @Input() coolInputFocusBgColor: string = 'orange'

  private _backgroundColor: string = ''
  @HostBinding('style.backgroundColor')
  get getBgColor() {
    return this._backgroundColor
  }

  private _isOnFocus: boolean = false
  @HostBinding('class.isOnFocus')
  get getOnFocus() {
    return this._isOnFocus
  }

  @HostListener('focus')
  onFocus(): void {
    this.chengeElementBgColor(this.coolInputFocusBgColor)
    this._isOnFocus = true
  }

  @HostListener('blur')
  onBlur(): void {
    this.chengeElementBgColor(this.coolInputDefaultBgColor)
    this._isOnFocus = false
  }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement): void {
    console.log(target)
  }

  ngOnInit(): void {
    this.chengeElementBgColor(this.coolInputDefaultBgColor)
    this.rend.setAttribute(this.el.nativeElement, 'placeholder',
      this.el.nativeElement.getAttribute('placeholder') + '***')
  }

  chengeElementBgColor(color: string): void {
    this._backgroundColor = color
  }

}
