import { TestBed } from '@angular/core/testing';

import { CourseBuilderService } from './course-builder.service';

describe('CourseBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseBuilderService = TestBed.get(CourseBuilderService);
    expect(service).toBeTruthy();
  });
});
