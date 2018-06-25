import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game } from 'core/models/game';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})

export class GameFormComponent implements OnInit {
  @Output() gameSubmitted = new EventEmitter();
  newGame: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.newGame = this.formBuilder.group({
      name: '',
      year: '',
      image: ''
    });
  }
  ngOnInit() {
  }

  addGame() {
    const game = this.newGame.value;
    this.gameSubmitted.emit(game);
  }
}
