import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Room } from '../../models/room.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingModalComponent } from '../booking-modal/booking-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [CommonModule, BookingModalComponent],
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss']
})
export class RoomCardComponent {
  @Input() room!: Room;
  @Output() bookingSuccess = new EventEmitter<void>();

  constructor(private modalService: NgbModal) {}

  openBookingModal() {
    const modalRef = this.modalService.open(BookingModalComponent);
    modalRef.componentInstance.room = this.room;
    modalRef.result.then(
      (result) => {
        if (result === 'success') {
          this.bookingSuccess.emit();
        }
      },
      (reason) => {
        
      }
    );
  }
}