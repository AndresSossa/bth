import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-cesantias',
  templateUrl: './cesantias.component.html',
  styleUrls: ['./cesantias.component.scss']
})
export class CesantiasComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns = ['Cesantia', 'Opciones'];
  public dataSource: any;
  data: any
  url_lookup_cesantias :string = '/component/cesantias/lookup/';

  constructor(private http:Http,
    private HttpClient: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url_lookup_cesantias).subscribe(data=>{
      this.data = data.json() as [any]
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.paginator = this.paginator
    })
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim()

  }

  deleteCargo(id){
    const Endpoint = '/component/cesantias/delete/'

    let headers = new HttpHeaders()
    headers = headers.append("Accept","application/json; charset=utf-8");
    headers = headers.append("Authorization","Basic" + btoa("waqas:waqas-secret"))
    headers = headers.append("Content-Type",'application/x-www-form-urlencoded')

    this.HttpClient.post(Endpoint,JSON.stringify({'id_ces': id}),{headers: headers}).subscribe(data=>{
      if(data['RESPONSE']==='OK'){

        this.http.get(this.url_lookup_cesantias).subscribe(data=>{
          this.data = data.json() as [any]
          console.log(this.data)
          this.dataSource = new MatTableDataSource(this.data)
          this.dataSource.paginator = this.paginator
    
        })

      }
    })
  }



}
