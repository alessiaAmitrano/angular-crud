import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'core/models/game';

@Component({
  selector: 'app-game-item-card',
  templateUrl: './game-item-card.component.html',
  styleUrls: ['./game-item-card.component.scss']
})
export class GameItemCardComponent implements OnInit {
@Input() gameItem: Game;

  constructor() { }

  ngOnInit() {
  }

}
