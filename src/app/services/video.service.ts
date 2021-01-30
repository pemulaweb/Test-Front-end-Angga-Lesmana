import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http:HttpClient) { }

  private getData(response:any){
    return response.data
  }


  readAll(): Observable<any> {
    return this.http.get<any>(
      `${environment.urlAddress}user/tournaments`
    )
  }

}
