import { TestBed } from '@angular/core/testing';

import { TemplateHttpLoaderService } from './template-http-loader.service';

describe('TemplateHttpLoaderService', () => {
  let service: TemplateHttpLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateHttpLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
