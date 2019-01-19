import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(-50%)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class HomeComponent {
  @ViewChild('whiteContainer') whiteContainer: ElementRef;
  state = 'hide';

  constructor() {
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const viewHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset;
    const whiteContainerPosition = this.whiteContainer.nativeElement.offsetTop;
    const heightSum = viewHeight + scrollPosition;

    if (heightSum > whiteContainerPosition && scrollPosition < viewHeight) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }
}
