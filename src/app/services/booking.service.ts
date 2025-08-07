import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [];

  bookRoom(booking: Booking) {
    this.bookings.push(booking);
    return of(booking).pipe(delay(300)); 
  }
}