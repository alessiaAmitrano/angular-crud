import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../../core/services/library.service';

@Component({
  selector: 'app-games-landing',
  templateUrl: './games-landing.component.html',
  styleUrls: ['./games-landing.component.scss']
})
export class GamesLandingComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.libraryService.getLibrary();
  }

}
