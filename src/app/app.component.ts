import { Component, ChangeDetectorRef } from '@angular/core';
import { RoomService } from './services/room.service';
import { Room } from './models/room.model';
import { CommonModule } from '@angular/common';
import { RoomCardComponent } from './components/room-card/room-card.component';
import { NgbToastModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RoomCardComponent, NgbToastModule, NgbModalModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  rooms: Room[] = [];
  showToast = false;
  toastMessage = '';

  constructor(
    private roomService: RoomService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadRooms();
  }

  loadRooms() {
    this.roomService.getRooms().subscribe({
      next: (rooms) => {
        this.rooms = rooms;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Component: Error loading rooms', err);
        this.showToastMessage('Failed to load rooms');
      }
    });
  }

  onBookingSuccess() {
    this.showToastMessage('Room booked successfully!');
    this.loadRooms();
  }

  private showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 3000);
  }
}