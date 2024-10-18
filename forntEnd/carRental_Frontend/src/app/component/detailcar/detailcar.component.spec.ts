import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcarComponent } from './detailcar.component';

describe('DetailcarComponent', () => {
  let component: DetailcarComponent;
  let fixture: ComponentFixture<DetailcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailcarComponent]
    });
    fixture = TestBed.createComponent(DetailcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
