import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {

  nombres:string[]=[
    'ezequiel',
    'ruben',
    'jesus',
    'alejandro',
    'pepe',
    'angel',
    'teresa',
    'luisa',
    'adrian'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
