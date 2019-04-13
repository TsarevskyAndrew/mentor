import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CourseCardComponent} from './course-card/course-card.component';
import {CoursePreviewComponent} from './course-preview/course-preview.component';

@NgModule({
    declarations: [CourseCardComponent, CoursePreviewComponent],
    imports: [
        CommonModule
    ],
    exports: [
        CourseCardComponent,
        CoursePreviewComponent
    ]
})
export class SharedModule {
}
