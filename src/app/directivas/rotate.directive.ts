import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: 'img[rotate]'  // Solo aplicamos la directiva a elementos <img>
})
export class RotateDirective implements OnInit {
  @Input() rotate: number = 0;  // Rotación inicial
  @Input() step: number = 10;   // Pasos de rotación

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.applyRotation();
  }

  applyRotation() {
    this.el.nativeElement.style.transform = `rotate(${this.rotate}deg)`;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (event.shiftKey) {
      this.rotate -= this.step;  // Rota en sentido contrario si Shift está presionado
    } else {
      this.rotate += this.step;  // Rota normalmente
    }
    this.applyRotation();
  }
}
