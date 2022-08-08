import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinaNewsComponent } from './china-news.component';

describe('ChinaNewsComponent', () => {
  let component: ChinaNewsComponent;
  let fixture: ComponentFixture<ChinaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChinaNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChinaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
