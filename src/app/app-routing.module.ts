import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopComponent } from './view/top/top.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      // {
      //   path: 'users/:userId',
      //   component: UserDetailPageComponent
      // },
      {
        path: '',
        component: TopComponent,
        data: { file: 'photo1.png' },
      },
      {
        path: 'photo1',
        component: TopComponent,
        data: { file: 'photo1.png' },
      },
      {
        path: 'photo2',
        component: TopComponent,
        data: { file: 'photo2.png' },
      },
    ], { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
