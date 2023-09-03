import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/vehicle.model';

@Injectable({
  providedIn: 'root'
})

export class ModelService {

<<<<<<< HEAD
  private baseUrl: string = './assets/data/models.json';
=======
  private baseUrl: string = 'https://ev-database.continuousnet.com/models.json';
>>>>>>> e530d25a4ceb075684bc2300becfc3befceb3240

  constructor(
    private http: HttpClient
  ) { }

  getAllModels(): Observable<Vehicle[]> {
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<Vehicle[]>(this.baseUrl, httpOptions);
  }

}
