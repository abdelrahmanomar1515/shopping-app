import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') private isOpen: boolean = false;
  constructor(private selectedElement: ElementRef) {}

  @HostListener('click') toggleOpen() {
    if (this.isOpen) {
      this.selectedElement.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
    } else {
      this.selectedElement.nativeElement.querySelector('.dropdown-menu').classList.add('show')
    }
    this.isOpen = !this.isOpen;
  }
  @HostListener('document:click', ['$event.target']) close(targetElement) {
    let inside: boolean = this.selectedElement.nativeElement.contains(targetElement);
    if (!inside) {
      this.isOpen = false;
      this.selectedElement.nativeElement.querySelector('.dropdown-menu').classList.remove('show')
    }
  }
}
