import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectRoutingModule } from './prospect-routing.module';
import { AjoutProspectComponent } from './ajout-prospect/ajout-prospect.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AjoutProspectComponent
  ],
  imports: [
    CommonModule,
    ProspectRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule
  ]
})
export class ProspectModule { }
