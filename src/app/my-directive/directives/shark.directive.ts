import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ selector: '[appShark]' })

/*
@Directive({
  selector: '[appShark]',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
*/
export class SharkDirective {
  creature = 'Дельфин'; // Это значение получим во внешнем компоненте
  private text: any;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementRef.nativeElement.style.fontWeight = 'bold';

    const shark = this.renderer.createText('Акула');
    renderer.appendChild(this.elementRef.nativeElement, shark);

    renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  /*
  onMouseEnter() {
    this.setFontWeight('bold');
  }
  onMouseLeave() {
    this.setFontWeight('normal');
  }
  private setFontWeight(val: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', val);
  }
  */

  /*
  @HostListener('mouseenter') onMouseEnter() {
    this.setFontWeight('bold');
    this.text = this.renderer.createText(
      `Декоратор @HostListener позволяет связать событие DOM ('mouseenter'/'mouseleave') и методы директивы`
    );
    this.renderer.appendChild(this.elementRef.nativeElement, this.text);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontWeight('normal');
    this.renderer.removeChild(this.elementRef.nativeElement, this.text);
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', val);
  }
  */

  /*
  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }
  */

  /*
  private fontWeight = 'normal';

  @HostBinding('style.fontWeight') get getFontWeight() {
    return this.fontWeight;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontWeight = 'normal';
  }
  */
}
