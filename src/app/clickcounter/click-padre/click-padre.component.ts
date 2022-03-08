import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-padre',
  templateUrl: './click-padre.component.html'
})
export class ClickPadreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notificar(){
    alert('Enhorabuena! Has encontrado el número secreto');
  }
}
