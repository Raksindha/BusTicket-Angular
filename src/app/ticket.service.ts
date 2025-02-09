import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// ticket.service.ts
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiURL: string = '/api/BusBooking/';  // Remove the domain

  constructor(private http: HttpClient) { }

  getLocations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL + "GetBusLocations");
  }
}
