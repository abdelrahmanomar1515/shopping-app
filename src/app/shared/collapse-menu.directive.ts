import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCollapseMenu]'
})
export class CollapseMenuDirective {
  @HostBinding('class.collapsed') public isOpen= false;

  constructor(private selectedElement: ElementRef) { }

  @HostListener('click') toggleMenu(){
    if (this.isOpen) {
      this.selectedElement.nativeElement.parentElement.querySelector('.navbar-collapse').classList.remove('show')
    } else {
      this.selectedElement.nativeElement.parentElement.querySelector('.navbar-collapse').classList.add('show')
    }
    this.selectedElement.nativeElement.setAttribute('aria-expanded', this.isOpen? false:true)
    this.isOpen = !this.isOpen;
  }
  @HostListener('document:click', ['$event.target']) close(targetElement) {
    let inside: boolean = this.selectedElement.nativeElement.contains(targetElement);
    if (!inside) {
      this.isOpen = false;
      this.selectedElement.nativeElement.parentElement.querySelector('.navbar-collapse').classList.remove('show')
      this.selectedElement.nativeElement.setAttribute('aria-expanded', false)
    }
  }

}
