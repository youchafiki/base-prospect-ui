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
  prospect : Prospect = new Prospect() ;
  prospectModif : Prospect = new Prospect() ;
  prospectModifItem : Prospect = new Prospect() ;
  displayTableList : boolean = false ;
  listProspects : Prospect[] = [];
  listProspectsUpdate : Prospect[] = [];
  position : number ;

  constructor(private prospectService:ProspectService) { }

  ngOnInit(): void {
    this.prospectService.getProspects().subscribe(
      result=>  this.listProspects=result
    )
   // this.prospect= {lastname :'tedrhi',activity:'informatique',firstname:'youness',identifier:"ident",id:1} ;
  }
  addProspect() {
 
    console.log(this.prospect)
    this.listProspects.push(this.prospect);
    this.prospect=new Prospect();
    this.displayTableList=true;
    //this.prospect.nombreEnfant= data.nombreEnfantS ;
console.log(this.prospect)
 }
 
 editProspect(prospectEdit){
  this.listProspectsUpdate = this.listProspects.slice();
  this.position = this.listProspectsUpdate.indexOf(prospectEdit)
 // this.listProspectsUpdate.splice(this.position ,1)
  this.prospectModif  = Object.assign({}, prospectEdit);
 
 // this.listProspects = this.listProspects.filter(x=>x.nom != this.prospectModifItem.nom)
 }
 saveChange(){
   this.listProspectsUpdate.splice(this.position,1,this.prospectModif);
   this.listProspects = this.listProspectsUpdate.slice()
 
  }
}
