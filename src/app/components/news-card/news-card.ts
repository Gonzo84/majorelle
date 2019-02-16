import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.html',
  styleUrls: ['./news-card.scss']
})
export class NewsCardComponent {
  @Input() data: any;
}
