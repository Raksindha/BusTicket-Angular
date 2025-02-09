import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  location : Observable<any[]> = new Observable<any[]>;
  ticketSer = inject(TicketService);

  ngOnInit(): void {
    this.getAllLocations(); 
  }

  getAllLocations(){
    this.location = this.ticketSer.getLocations();
  }


}
