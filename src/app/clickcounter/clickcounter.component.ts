import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clickcounter',
  templateUrl: './clickcounter.component.html'
})
export class ClickcounterComponent implements OnInit {

  @Input() clicks: number = 0;

  @Output() hasGanado = new EventEmitter();;

  private premio: number = Math.floor(Math.random() * 50 - Math.random() * 100);

  constructor() {
  }

  ngOnInit(): void {

  }

  aumentar() {
    if (this.clicks < 50) {
      this.clicks++;
      if (this.clicks == this.premio) {
        this.hasGanado.emit();
      }
    }
  }

  disminuir() {
    if (this.clicks > -50) {
      this.clicks--;
      if (this.clicks == this.premio) {
        this.hasGanado.emit();
      }
    }
  }

}
