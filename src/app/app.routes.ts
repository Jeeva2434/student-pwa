import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: ()=>import('./components/dashboard/dashboard.component').then(m=>m.DashboardComponent)
    },
    {
        path:'subjects/:subjectName',
        loadComponent: ()=>import('./components/subjects/subjects.component').then(m=>m.SubjectsComponent)
    },
    {
        path:'allStudents',
        loadComponent: ()=>import('./components/all-students/all-students.component').then(m=>m.AllStudentsComponent)
    },
    {
        path:"**",
        redirectTo:""
    }
];
