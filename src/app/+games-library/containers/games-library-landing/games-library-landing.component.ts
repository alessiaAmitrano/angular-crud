import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../../core/services/library.service';

@Component({
  selector: 'app-games-library-landing',
  templateUrl: './games-library-landing.component.html',
  styleUrls: ['./games-library-landing.component.scss']
})
export class GamesLibraryLandingComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.libraryService.getLibrary();
  }

}
