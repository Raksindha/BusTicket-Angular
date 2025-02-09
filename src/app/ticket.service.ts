import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private apiURL: string = 'https://projectapi.gerasim.in/api/BusBooking/';  // Added trailing slash

  constructor(private http: HttpClient) { }

  getLocations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + "GetBusLocations");  // Now correctly concatenated
  }
}
