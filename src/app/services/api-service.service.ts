import { Servicio } from './../models/servicio.model';
import { Location } from '../models/location.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { simpleLocation } from '../models/simpleLocation.model';
import { environment } from '../../environments/enviroment';
import { ContactRequest } from '../models/contactRequest.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private readonly API_URL = 'https://spotmediainc.com';
  //private readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  private request<t>(
    method: string,
    endpoint: string,
    body?: any,
    params?: HttpParams): Observable<t> {
      return this.http.request<t>(method, `${this.API_URL}/${endpoint}`, {

        body,
        params

      });

  }

  get<t>(
    endpoint: string,
    params?: HttpParams): Observable<t> {
    return this.request<t>('GET', endpoint, undefined, params);
  }

  delete<t>(
    endpoint: string): Observable<t> {
    return this.request<t>('DELETE', endpoint, undefined, undefined);
  }

  put<t>(
    endpoint: string,
    body?: any): Observable<t> {
    return this.request<t>('PUT', endpoint, body, undefined);
  }

  post<t>(
    endpoint: string,
    body?: any): Observable<t> {
    return this.request<t>('POST', endpoint, body, undefined);
  }

  getServiceByLocationId(id: number): Observable<Servicio[]>
  {
    let params = new HttpParams();
    params = params.append('locationId', id);
    return this.get('servicios/available-by-location', params);
  }

  getServiceByLocationName(locationName: string): Observable<Servicio[]>{
    let params = new HttpParams();
    params = params.append('locationName', locationName);
    return this.get('servicios/available-by-location', params);
  }

  getLocations(): Observable<simpleLocation[]>
  {
    return this.get('locations');
  }

  getLocationById(id: number, isMobile: boolean): Observable<Location>{
    let params = new HttpParams();
    params = params.append('isMobile', isMobile);
    return this.get('locations/' + id, params);
  }

  sendContact(data: ContactRequest): Observable<void>{
    return this.post('api/contact', data);
  }


}
