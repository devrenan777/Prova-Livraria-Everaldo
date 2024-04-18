import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DesejoPage } from './desejo.page';

describe('DesejoPage', () => {
  let component: DesejoPage;
  let fixture: ComponentFixture<DesejoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DesejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
