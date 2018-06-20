import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  /* data to be moved to a service later */
library: any[] = [
  {
    name: 'Dragon s Lair',
    year: 1983,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Dragons_lair.jpg/250px-Dragons_lair.jpg'
  },
  {
    name: 'Galaga',
    year: 1981,
    image: 'https://i.pinimg.com/236x/f7/0f/14/f70f1409fb710984d86a2ac495fde118--nes-collection-games-box.jpg'
  },
  {
    name: 'Super Mario',
    year: 1986,
    image: 'https://cdn-images-1.medium.com/max/1600/0*UQ3qf_cT8gsJWmgl.jpg'
  },
  {
    name: 'Ghosts n Goblins',
    year: 1985,
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/GhostsnGoblins_flyer.jpg/220px-GhostsnGoblins_flyer.jpg'
  },
  {
    name: 'Pacman',
    year: '1980',
    // tslint:disable-next-line:max-line-length
    image: 'https://shop.line-scdn.net/themeshop/v1/products/9a/e0/56/9ae0561f-3bc8-4851-81ed-a8d3c05419f6/38/WEBSTORE/icon_198x278.png?__=20161019'
  },
  {
    name: 'Tetris',
    year: '1984',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/NES_Tetris_Box_Front.jpg/220px-NES_Tetris_Box_Front.jpg'
  },
  {
    name: 'Avatar',
    year: 2009,
    image: 'http://t0.gstatic.com/images?q=tbn:ANd9GcQCfmvrE4fMo2cd8esc7mDZPtFSJThAujddMPkRtti1_ij6u-jp'
  },
  {
    name: 'Ready Player One',
    year: 2018,
    // tslint:disable-next-line:max-line-length
    image: 'https://static.wixstatic.com/media/4e9709_90bf8afc82984fa9b9ea06cae6a5a54b~mv2.jpg/v1/fill/w_320,h_474/4e9709_90bf8afc82984fa9b9ea06cae6a5a54b~mv2.jpg'
  },
  {
    name: 'Tron: Legacy',
    year: 2010,
    image: 'http://t1.gstatic.com/images?q=tbn:ANd9GcSchLICLsn0n_GlVBYmaIZjwcYDuqvb1fg4nVvr8WAh3FN8EqfY'
  },
  {
    name: 'Tron',
    year: 1982,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7XOgZVlpE-TZV0o0P6sjMFCQ0r4wQ1dcOkeBJcbhBpNamaDem'
  },
  {
    name: 'Back to the Future',
    year: '1985',
    // tslint:disable-next-line:max-line-length
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Back_to_the_Future.jpg/220px-Back_to_the_Future.jpg'
  },
  {
    name: 'Star Wars: the force awakens',
    year: '1984',
    image: 'https://a.ltrbxd.com/resized/sm/upload/t1/n6/d1/k6/g2mqdMU3jaz6uEosF5aqJgbw7e9-0-230-0-345-crop.jpg?k=79683d9a09'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
