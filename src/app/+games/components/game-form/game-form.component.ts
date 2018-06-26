import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game } from 'core/models/game';
import { GamesService } from 'core/services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})

export class GameFormComponent implements OnInit {
  @Output() gameSubmitted = new EventEmitter();
  gameForm: FormGroup;
  gameItem = {
    name: '',
    year: '',
    image: ''
  };

  constructor(private formBuilder: FormBuilder,
              private gameApi: GamesService) {}

  ngOnInit() {
    if (this.gameApi.gameToEdit) {
      this.gameForm = this.formBuilder.group(this.gameApi.gameToEdit);
    } else {
      this.gameForm = this.formBuilder.group(this.gameItem);
    }
  }

  onSubmitClick(event: Event) {
    event.preventDefault();
    this.gameSubmitted.emit(this.gameForm.value);
  }
}
