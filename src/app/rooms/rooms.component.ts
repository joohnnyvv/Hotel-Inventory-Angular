import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName: string = 'Hilton Hotel';

  hideRooms: boolean = false;

  rooms: Room = {
    totalRooms: 21,
    availableRooms: 11,
    bookedRooms: 10,
  };

  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe',
        amenities: 'Air Conditioner, Free Wi-Fi, TV,' + 'Bathroom, Kitchen',
        price: 500,
        photos:
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        checkInTime: new Date('10-30-2023'),
        checkOutTime: new Date('11-02-2023'),
        rating: 4.9,
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe',
        amenities: 'Air Conditioner, Free Wi-Fi, TV,' + 'Bathroom, Kitchen',
        price: 900,
        photos:
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        checkInTime: new Date('10-30-2023'),
        checkOutTime: new Date('11-02-2023'),
        rating: 3.5,
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV,' + 'Bathroom, Kitchen',
        price: 1500,
        photos:
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        checkInTime: new Date('10-30-2023'),
        checkOutTime: new Date('11-02-2023'),
        rating: 4.2,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
