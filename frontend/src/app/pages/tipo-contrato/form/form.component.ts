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
export class FormComponentTipoCon implements OnInit {

  Tittle_maestro: string = 'Registro'
  button_maestro: string = "Registrar"
  form : FormGroup
  data: any

  url_lookup_id: string = '/component/tipo_contrato/update/'

  constructor(
    private formbuilder:FormBuilder,
    private route : ActivatedRoute,
    private http:Http,
    private router: Router,
    private httpClient: HttpClient
  ) { 
    this.route.params.subscribe(params=>{
      if(params['id']){
        this.Tittle_maestro = 'Actualizar'
        this.button_maestro = 'Actualizar'

        this.http.get(this.url_lookup_id+params['id']+'/').subscribe(data=>{
          this.data = data.json() as [any]

          this.form.setValue({
            id_contrato : this.data[0].id_tipo_contrato,
            tipo_contra : this.data[0].tipo_contrato
          })
        })


      }
    })
  }

  ngOnInit() {
    this.form = this.formbuilder.group({
      id_contrato :['',],
      tipo_contra: ['',Validators.required]
    })
  }

  onSubmit(form){

    if(this.form.invalid){
      return;
    }

    const Endpoint = '/component/tipo_contrato/reg/'

    let headers = new HttpHeaders()
    headers = headers.append("Accept","application/json; charset=utf-8");
    headers = headers.append("Authorization","Basic" + btoa("waqas:waqas-secret"))
    headers = headers.append("Content-Type",'application/x-www-form-urlencoded')

    this.httpClient.post(Endpoint,JSON.stringify(form),{headers:headers}).subscribe(data=>{
      if(data['RESPONSE']==='OK'){
        this.router.navigate(['tipo_contr'])
      }
    })

  }

  cancelar(){
    this.router.navigate(['tipo_contr'])
  }

}
