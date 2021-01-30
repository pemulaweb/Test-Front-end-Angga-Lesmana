import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplevideoComponent } from './peoplevideo.component';

describe('PeoplevideoComponent', () => {
  let component: PeoplevideoComponent;
  let fixture: ComponentFixture<PeoplevideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplevideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplevideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
