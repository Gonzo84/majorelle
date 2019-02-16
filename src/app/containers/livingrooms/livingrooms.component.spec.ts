import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingroomsComponent } from './livingrooms.component';

describe('LivingroomsComponent', () => {
  let component: LivingroomsComponent;
  let fixture: ComponentFixture<LivingroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivingroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
