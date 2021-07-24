import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutProspectComponent } from './ajout-prospect/ajout-prospect.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Prospect'
    },
    children: [
      {
        path: '',
        redirectTo: 'AjoutProspect',
        pathMatch: 'full'
      },
      {
        path: 'AjoutProspect',
        component: AjoutProspectComponent,
        data: {
          title: 'AjoutProspect'
        }
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectRoutingModule { }
