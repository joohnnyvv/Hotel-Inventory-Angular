import { Component, Input } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];
}
