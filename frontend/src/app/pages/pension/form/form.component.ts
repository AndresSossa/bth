import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Http } from '@angular/http'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponentPens implements OnInit {

  Tittle_maestro: string = 'Registro'
  button_maestro: string = "Registrar"
  form : FormGroup
  data: any
  url_lookup:string ='/component/pension/update/'

  constructor(

    private formbuilder:FormBuilder,
    private route : ActivatedRoute,
    private http:Http,
    private router: Router,
    private httpClient: HttpClient


  ) { this.route.params.subscribe(params=>{
    if (params['id']){
      this.Tittle_maestro='Actualizar'
      this.button_maestro='Actualizar'
      this.http.get(this.url_lookup+params['id']+'/').subscribe(data=>{
        this.data=data.json() as [any]

        this.form.setValue({
          id_pens: this.data[0].id_pens,
          cod_pens:this.data[0].codigo_pens,
          nit_pens:this.data[0].nit_pens,
          razon_pens: this.data[0].razon_social, 

        })
      })
    }
  }) }

  ngOnInit() {

    this.form = this.formbuilder.group({
      id_pens: [''],
      cod_pens: ['',[Validators.required]],
      nit_pens: ['',[Validators.required]],
      razon_pens: ['',[Validators.required]]
      })
  }

  onSubmit( form ){
    if(this.form.invalid){
      return;
    }
    console.log(form)

    const Endpoint= 'component/pension/reg/'

    let headers = new HttpHeaders()
    headers = headers.append("Accept","application/json; charset=utf-8");
    headers = headers.append("Authorization","Basic" + btoa("waqas:waqas-secret"))
    headers = headers.append("Content-Type",'application/x-www-form-urlencoded')

    this.httpClient.post(Endpoint,JSON.stringify(form),{headers:headers}).subscribe(data=>{
      if(data['RESPONSE']==='OK'){
        this.router.navigate(['pension'])
      }
    })

  }

  cancelar(){

  }

}


