import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaudiNewsComponent } from './saudi-news.component';

describe('SaudiNewsComponent', () => {
  let component: SaudiNewsComponent;
  let fixture: ComponentFixture<SaudiNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaudiNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaudiNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
