import { Component, OnInit } from '@angular/core';
import { Apis } from '../apis';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private apisService:ApisService) {
     
   }

  listaApis  = [] as Apis[]

  ngOnInit() {
   this.carregaApis()
  }

  
  carregaApis(){
    this.apisService.getApis().subscribe((apisRecebidas:Apis[])=>{
      this.listaApis  = apisRecebidas;
      console.log(this.listaApis)
    })
  }

  categoryApi(data){
    var api   = document.getElementById('api');
    for(let i=0; i < data.count; i++){
     console.log(data.entries[i].Category)
    }
  }

}
