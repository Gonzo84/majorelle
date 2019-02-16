import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild('whiteContainer') private whiteContainer: ElementRef;
  @ViewChild('videPlayer') private videPlayer: ElementRef;
  private state = 'hide';
  private newsConfig: any[] = [{
    imgUrl: 'assets/img/kitchens/kitchen_01_opt.png',
    title: 'Bla bla ..',
    content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    navigation: '/kitchens'
  }, {
    imgUrl: 'assets/img/kitchens/kitchen_02_opt.png',
    title: 'Bla bla opet..',
    content: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
    navigation: '/kitchens'
  }];

  public ngOnInit(): void {
    this.videPlayer.nativeElement.muted = 'muted';
  }


  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const viewHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset;
    const whiteContainerPosition = this.whiteContainer.nativeElement.offsetTop;
    const whiteContainerHeight = this.whiteContainer.nativeElement.clientHeight;
    const heightSum = viewHeight + scrollPosition;

    if (heightSum > whiteContainerPosition && scrollPosition < (whiteContainerPosition + whiteContainerHeight)) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }
}
