import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-centro-costo',
  templateUrl: './centro-costo.component.html',
  styleUrls: ['./centro-costo.component.scss']
})
export class CentroCostoComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns = ['centro_costo','Opciones'];
  public dataSource: any;
  data: any
  url_lookup: any = '/component/centro_costo/lookup/';

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

  deleteCentroCosto(id){
    const Endpoint = 'component/centro_costo/delete/'

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
