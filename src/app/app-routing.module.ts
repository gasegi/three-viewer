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
        component: TopComponent
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
