import { Directive, ElementRef} from '@angular/core';
import { Button } from 'protractor';
@Directive({
  selector: '[appPassword]'
})
export class AppPasswordDirective {
 private _shown = false;
constructor(private el: ElementRef) {
    this.setup();
  }
toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = '<button class="btn btn-info btn-block">HIDE PASSWORD</button>';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = '<button class="btn btn-info btn-block">SHOW  PASSWORD</button>';
    }
  }
setup() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.innerHTML = '<button class="btn btn-info btn-block">SHOW PASSWORD</button>';
    span.addEventListener('click', (event) => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }
}
