import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/auth-user/auth-user.module').then(
        (m) => m.AuthUserModule
      ),
  },
  {
    path: 'instructor',
    loadChildren: () =>
      import('./modules/instructor/instructor.module').then(
        (m) => m.InstructorModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/public/public.module').then((m) => m.PublicModule),
  },

  //set routes above
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
