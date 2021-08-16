import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Prospect } from '../model/prospect';
import { ProspectService } from '../Service/prospect.service';

@Component({
  selector: 'app-ajout-prospect',
  templateUrl: './ajout-prospect.component.html',
  styleUrls: ['./ajout-prospect.component.scss']
})
export class AjoutProspectComponent implements OnInit {
  @ViewChild('largeModal') public largeModal: ModalDirective;
  prospect: Prospect = new Prospect() ;
  prospectModif: Prospect = new Prospect() ;
  listProspects: Prospect[] = [];
  listProspectsUpdate: Prospect[] = [];
  position: number ;

  constructor(private prospectService: ProspectService) { }

  ngOnInit(): void {
   this.getListProspect();
  }
  getListProspect() {
        this.prospectService.getProspects().subscribe(
            result =>  {this.listProspects = result ; console.log(result); }
        );
    }
  addProspect() {
    console.log(this.prospect)
    this.prospectService.addProspects(this.prospect).subscribe(
       result =>   this.getListProspect()
   );
 }
 editProspect(prospectEdit) {
  this.listProspectsUpdate = this.listProspects.slice();
  this.position = this.listProspectsUpdate.indexOf(prospectEdit)
  this.prospectModif  = Object.assign({}, prospectEdit);
 }
 saveChange() {
      const deleteCount = 1;
   this.listProspectsUpdate.splice(this.position, deleteCount, this.prospectModif);
   this.listProspects = this.listProspectsUpdate.slice();
  }
}
