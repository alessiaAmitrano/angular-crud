import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from 'core/models/game';

@Component({
  selector: 'app-game-item-card',
  templateUrl: './game-item-card.component.html',
  styleUrls: ['./game-item-card.component.scss']
})
export class GameItemCardComponent implements OnInit {
@Input() gameItem: Game;
@Output() cardClicked = new EventEmitter();
isBtnGreen = true;

  constructor() { }

  ngOnInit() {
  }

  toggleAppBtn() {
    this.isBtnGreen = !this.isBtnGreen;
  }

}
