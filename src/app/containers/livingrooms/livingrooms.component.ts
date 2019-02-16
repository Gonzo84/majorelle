import {Component} from '@angular/core';

@Component({
  selector: 'app-livingrooms',
  templateUrl: './livingrooms.component.html',
  styleUrls: ['./livingrooms.component.scss']
})
export class LivingroomsComponent {

  private headerConfig: any = {
    backgroungImgUrl: 'assets/img/livingrooms/livingroom_01_opt.png',
    title: 'Living rooms bla bla..',
    subTitle: 'subtitle bla bla bla...',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum ut nulla id dictum.'
  };
}
