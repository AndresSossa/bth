import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { isThursday } from 'date-fns';

@Component({
  selector: 'app-eps',
  templateUrl: './eps.component.html',
  styleUrls: ['./eps.component.scss']
})
export class EpsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns = ['codigo_eps','nit','razon_social', 'Opciones'];
  public dataSource: any;
  data: any
  url_lookup:string='/component/eps/lookup/'

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

  deleteEps(id){
    const endpoint= '/component/eps/delete/'

    let headers = new HttpHeaders()
    headers = headers.append("Accept","application/json; charset=utf-8");
    headers = headers.append("Authorization","Basic" + btoa("waqas:waqas-secret"))
    headers = headers.append("Content-Type",'application/x-www-form-urlencoded')

    this.HttpClient.post(endpoint,JSON.stringify({'id_eps':id}),{headers:headers}).subscribe(data=>{
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
