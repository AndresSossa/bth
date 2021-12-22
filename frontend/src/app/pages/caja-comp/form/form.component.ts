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
export class FormComponentCajaComp implements OnInit {

  Tittle_maestro: string = 'Registro'
  button_maestro: string = "Registrar"
  form : FormGroup
  data: any
  url_lookup_id: string = '/component/caja_comp/update/'

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
        this.button_maestro = "Actualizar"

        this.http.get(this.url_lookup_id+params['id']+'/').subscribe(data=>{
          this.data = data.json() as [any]

          this.form.setValue({
            id_caja_comp: this.data[0].id_caja_comp,
            cod_cajcomp: this.data[0].codigo,
            nit_cajcomp: this.data[0].nit,
            razon_cajcomp: this.data[0].razon_social

          })
        })

      }

    })
  }

  ngOnInit() {
    this.form = this.formbuilder.group({
      id_caja_comp:[''],
      cod_cajcomp: ['',[Validators.required]],
      nit_cajcomp: ['',[Validators.required]],
      razon_cajcomp: ['',[Validators.required]]
    })
  }
  
  onSubmit(form){

    if(this.form.invalid){
      return;
    }

    const Endpoint = '/component/caja_comp/reg/'

    let headers = new HttpHeaders()
    headers = headers.append("Accept","application/json; charset=utf-8");
    headers = headers.append("Authorization","Basic" + btoa("waqas:waqas-secret"))
    headers = headers.append("Content-Type",'application/x-www-form-urlencoded')

    this.httpClient.post(Endpoint,JSON.stringify(form),{headers:headers}).subscribe(data=>{
      if(data['RESPONSE']==='OK'){
        this.router.navigate(['caja_comp'])
      }
    })
  }

  cancelar(){
    this.router.navigate(['caja_comp'])
  }

  

}
