import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { of, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private mockRooms: Room[] = [
    { id: '1', name: '101', type: 'Single', price: 100, available: true },
    { id: '2', name: '102', type: 'Single', price: 100, available: true },
    { id: '3', name: '103', type: 'Single', price: 100, available: false },
    { id: '4', name: '201', type: 'Double', price: 150, available: true },
    { id: '5', name: '202', type: 'Double', price: 150, available: true },
    { id: '6', name: '203', type: 'Double', price: 150, available: false },
    { id: '7', name: '301', type: 'Suite', price: 200, available: true },
    { id: '8', name: '302', type: 'Suite', price: 200, available: true },
    { id: '9', name: '303', type: 'Suite', price: 200, available: false }
  ];

  getRooms() {
    return of(this.mockRooms).pipe(
      delay(500),
    );
  }

  bookRoom(roomId: string) {
    const room = this.mockRooms.find(r => r.id === roomId);
    if (room) {
      room.available = false;
    }
    return of(room).pipe(delay(300));
  }
}