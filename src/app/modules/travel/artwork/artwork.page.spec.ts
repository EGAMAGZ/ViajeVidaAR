import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtworkPage } from './artwork.page';

describe('ArtworkPage', () => {
  let component: ArtworkPage;
  let fixture: ComponentFixture<ArtworkPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArtworkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
