import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-tipo-contrato',
  templateUrl: './tipo-contrato.component.html',
  styleUrls: ['./tipo-contrato.component.scss']
})
export class TipoContratoComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns = ['tipo_contrato','Opciones'];
  public dataSource: any;
  data: any

  url_lookup: any = '/component/tipo_contrato/lookup/';

  constructor(
    private http:Http,
    private HttpClient: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(this.url_lookup).subscribe(data=>{
      this.data = data.json() as [any]

      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.paginator = this.paginator
    })
  }

  applyFilter(buscar){
    this.dataSource.filter = buscar.trim()
  }

  deleteTipoCont(id){
    const Endpoint = 'component/tipo_contrato/delete/'

    let headers = new HttpHeaders();
    headers = headers.append("Accept","application/json; charset=utf-8");
    headers = headers.append("Authorization","Basic" + btoa("waqas:waqas-secret"))
    headers = headers.append("Content-Type",'application/x-www-form-urlencoded')

    this.HttpClient.post(Endpoint,{id:id},{headers:headers}).subscribe(data=>{
      if(data['RESPONSE']==='OK'){
        this.http.get(this.url_lookup).subscribe(data=>{
          this.data = data.json() as [any]
    
          this.dataSource = new MatTableDataSource(this.data)
          this.dataSource.paginator = this.paginator
        })

      }
    })
  }

}
