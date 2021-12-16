import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public displayedColumns = ['Cargo', 'Opciones'];
  public dataSource: any;
  data: any

  url_lookup_cargo :string = '/component/cargo/lookup/';
  constructor(
    private http:Http,
    private HttpClient: HttpClient
    
  ) { }

  ngOnInit() {
    this.http.get(this.url_lookup_cargo).subscribe(data=>{
      this.data = data.json() as [any]
      console.log(this.data)
      this.dataSource = new MatTableDataSource(this.data)
      this.dataSource.paginator = this.paginator

    })
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim()

  }

  deleteCargo(id){
    const Endpoint = '/component/cargo/delete/'

    let headers = new HttpHeaders()
    headers = headers.append("Accept","application/json; charset=utf-8");
    headers = headers.append("Authorization","Basic" + btoa("waqas:waqas-secret"))
    headers = headers.append("Content-Type",'application/x-www-form-urlencoded')

    this.HttpClient.post(Endpoint,JSON.stringify({'id_cargo': id}),{headers: headers}).subscribe(data=>{
      if(data['RESPONSE']==='OK'){

        this.http.get(this.url_lookup_cargo).subscribe(data=>{
          this.data = data.json() as [any]
          console.log(this.data)
          this.dataSource = new MatTableDataSource(this.data)
          this.dataSource.paginator = this.paginator
    
        })

      }
    })
  }

}
