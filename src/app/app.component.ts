import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('leftSideDrawer') public leftSideDrawer: any;
  @ViewChild('rightSideDrawer') public rightSideDrawer: any;
  private rightSideDrawerImgSrc: string = 'livingroom';

  public toggleSideMenues() {
    this.leftSideDrawer.toggle();
    this.rightSideDrawer.toggle();
  }

  public onNavigationHover(key) {
    this.rightSideDrawerImgSrc = key;
  }
}
