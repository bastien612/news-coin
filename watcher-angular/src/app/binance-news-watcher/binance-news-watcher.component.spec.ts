import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinanceNewsWatcherComponent } from './binance-news-watcher.component';

describe('BinanceNewsWatcherComponent', () => {
  let component: BinanceNewsWatcherComponent;
  let fixture: ComponentFixture<BinanceNewsWatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinanceNewsWatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinanceNewsWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
