import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './pages/student/student.component';
import {CoursePreviewComponent} from '../shared/course-preview/course-preview.component';


const routes: Routes = [
    {path: '', component: StudentComponent},
    {path: 'preview/:id', component: CoursePreviewComponent},
    ];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
})
export class StudentRoutingModule {
}
