# Hotel Room Booking Engine

<p align="center">
  <img src="/screenshots/room-listing.png" width="45%" alt="Room Listing">
  <img src="/screenshots/booking-modal.png" width="45%" alt="Booking Modal">  
</p>

<p align="center">
  <em>Figure 1: Room Listing (Left) • Figure 2: Booking Modal (Right)</em>
</p>


This Angular-based booking system that displays available hotel rooms and allows users to book them through a modal form was developed as a technical assessment for a Junior Frontend Developer position at Softinn Solutions.

## How to Run

### Prerequisites
- Node.js (v18 or later)
- Angular CLI (v17 or later)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/firdausshasan/hotel_booking_engine.git
   cd softinn-hotel-booking-engine
   ```
2. Install dependencies:
    ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   ng serve
   ```
4. Open your browser and navigate to:
   ```bash
   http://localhost:4200
   ```

## Design Decision

### Architecture
* Standalone Components: Used Angular 17+ standalone components for better modularity and reduced boilerplate

* Mock Service Layer: Created local mock services instead of external API calls for simplicity

### UI/UX
* Bootstrap 5: Chosen for responsive layout and pre-built components

* Card-Based Design: Each room is displayed as a card for clear visual hierarchy

* Toast Notifications: Provides immediate feedback after bookings

## Why Some Suggested Alternatives Are Not Being Used
* mockapi.io: Simplified development and testing

* Advanced Filtering: Scope limitation for the assessment

