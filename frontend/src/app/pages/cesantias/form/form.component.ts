import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Http } from '@angular/http'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponentCes implements OnInit {

  Tittle_maestro: string = 'Registro'
  button_maestro: string = "Registrar"
  form : FormGroup
  data: any

  constructor(

    private formbuilder:FormBuilder,
    private route : ActivatedRoute,
    private http:Http,
    private router: Router,
    private httpClient: HttpClient
  ) {this.route.params.subscribe(params=>{
    if(params['id']){
      this.Tittle_maestro = 'Actualizar'
      this.button_maestro = 'Actualizar'

      this.http.get('/component/cesantias/update/'+params['id']+'/').subscribe(data =>{
        this.data = data.json() as [any]

        console.log(this.data)

        this.form.setValue({
          id_ces: this.data[0].id_ces,
          tipo_ces: this.data[0].tipo_ces
        })
      })
    }
  }
  ) }

  ngOnInit() {
    this.form = this.formbuilder.group({
      id_ces: [''],
      tipo_ces:['',[Validators.required]]
    })
  }

  onSubmit (form){
    if (this.form.invalid){
      return;
    }

    const Endpoint= 'component/cesantias/reg/'

    let headers = new HttpHeaders()
    headers = headers.append("Accept","application/json; charset=utf-8");
    headers = headers.append("Authorization","Basic" + btoa("waqas:waqas-secret"))
    headers = headers.append("Content-Type",'application/x-www-form-urlencoded')

    this.httpClient.post(Endpoint,JSON.stringify(form),{headers:headers}).subscribe(data=>{
      if (data['RESPONSE']=== 'OK'){
        this.router.navigate(['cesantias'])
      }
    })

  }

  cancelar (){

  }

}
