import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesListLoaderComponent } from './files-list-loader.component';

describe('FilesListLoaderComponent', () => {
  let component: FilesListLoaderComponent;
  let fixture: ComponentFixture<FilesListLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesListLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesListLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
