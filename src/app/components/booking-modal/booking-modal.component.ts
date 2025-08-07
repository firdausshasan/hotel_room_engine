import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Room } from '../../models/room.model';
import { RoomService } from '../../services/room.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss']
})
export class BookingModalComponent {
  @Input() room!: Room;
  bookingForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private roomService: RoomService
  ) {
    this.bookingForm = this.fb.group({
      guestName: ['', Validators.required],
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.roomService.bookRoom(this.room.id).subscribe(() => {
        this.activeModal.close('success');
      });
    }
  }
}