import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

export class Customer {
  id: number;
  name: string;
  dob: string;
}
var sqldata: Customer[] = [];
// export class Customer {
//   ID: number;
//   CompanyName: string;
//   Address: string;
//   City: string;
//   State: string;
//   Zipcode: number;
//   Phone: string;
//   Fax: string;
//   Website: string;
// }

// let customers: Customer[] = [{
//   "ID": 1,
//   "CompanyName": "Super Mart of the West",
//   "Address": "702 SW 8th Street",
//   "City": "Bentonville",
//   "State": "Arkansas",
//   "Zipcode": 72716,
//   "Phone": "(800) 555-2797",
//   "Fax": "(800) 555-2171",
//   "Website": "http://www.nowebsitesupermart.com"
// },{
//   "ID": 3,
//   "CompanyName": "K&S Music",
//   "Address": "1000 Nicllet Mall",
//   "City": "Minneapolis",
//   "State": "Minnesota",
//   "Zipcode": 55403,
//   "Phone": "(612) 304-6073",
//   "Fax": "(612) 304-6074",
//   "Website": "http://www.nowebsitemusic.com"
// },{
//   "ID": 12,
//   "CompanyName": "Screen Shop",
//   "Address": "1000 Lowes Blvd",
//   "City": "Mooresville",
//   "State": "North Carolina",
//   "Zipcode": 28117,
//   "Phone": "(800) 445-6937",
//   "Fax": "(800) 445-6938",
//   "Website": "http://www.nowebsitescreenshop.com"
// }];

 sqldata=[]
@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  constructor(private http: HttpClient) {}
  
  public urlGetAll = `${environment.serviceUrl}/getAll`
 getAll(): Observable<any> {debugger
  return this.http.get(this.urlGetAll);
}
public urlInsert = `${environment.serviceUrl}/insert/`
Insert(): Observable<any> {debugger
  return this.http.get(this.urlInsert);
}

ngOnInit(){
     
}

}


