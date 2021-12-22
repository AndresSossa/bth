import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pension',
  templateUrl: './pension.component.html',
  styleUrls: ['./pension.component.scss']
})
export class PensionComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns = ['codigo_pens','nit','razon_social', 'Opciones'];
  public dataSource: any;
  data: any
  url_lookup:string='/component/pension/lookup/'


  constructor(

    private http:Http,
    private HttpClient: HttpClient
  ) { }

  ngOnInit() {

    this.http.get(this.url_lookup).subscribe(data=>{
      this.data=data.json() as [any]
      this.dataSource= new MatTableDataSource(this.data)
      this.dataSource.paginator=this.paginator
    })
  }

  applyFilter(valor){
    this.dataSource.filter=valor.trim()
  }

deletePens(id){
    const endpoint= '/component/pension/delete/'

    let headers = new HttpHeaders()
    headers = headers.append("Accept","application/json; charset=utf-8");
    headers = headers.append("Authorization","Basic" + btoa("waqas:waqas-secret"))
    headers = headers.append("Content-Type",'application/x-www-form-urlencoded')

    this.HttpClient.post(endpoint,JSON.stringify({'id_pens':id}),{headers:headers}).subscribe(data=>{
      if(data['RESPONSE']==='OK'){
        this.http.get(this.url_lookup).subscribe(data=>{
          this.data=data.json() as [any]
          this.dataSource= new MatTableDataSource(this.data)
          this.dataSource.paginator=this.paginator
        })
      }
    })

  }

}
