import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-caja-comp',
  templateUrl: './caja-comp.component.html',
  styleUrls: ['./caja-comp.component.scss']
})
export class CajaCompComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns = ['codigo', 'nit','razon_social','Opciones'];
  public dataSource: any;
  data: any

  url_lookup:string = '/component/caja_comp/lookup/'

  constructor(
    private http:Http,
    private HttpClient: HttpClient
  ) { }

  ngOnInit() {
    this.http.get(this.url_lookup).subscribe(data=>{
      this.data = data.json() as [any]
      console.log(this.data)
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.paginator = this.paginator
    })

  }

  applyFilter(buscar){
    this.dataSource.filter = buscar.trim()
  }

  deleteCajComp(id){

    const Endpoint = '/component/caja_comp/delete/';

    let headers = new HttpHeaders();
    headers = headers.append("Accept","application/json; charset=utf-8");
    headers = headers.append("Authorization","Basic" + btoa("waqas:waqas-secret"))
    headers = headers.append("Content-Type",'application/x-www-form-urlencoded')

    this.HttpClient.post(Endpoint,JSON.stringify({id:id}),{headers:headers}).subscribe(data=>{
      if(data['RESPONSE']==='OK'){
        
        this.http.get(this.url_lookup).subscribe(data=>{
          this.data = data.json() as [any]
          console.log(this.data)
          this.dataSource = new MatTableDataSource(this.data)
          this.dataSource.paginator = this.paginator
        })
      }
    })



  }

}
