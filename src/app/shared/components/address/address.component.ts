import { Address } from './../../models/address';
import { Component, OnInit,
         Input,

         Output,
         EventEmitter

} from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  // Input is the way to implement property binding
  // <app-address [address]="branch" phone="234434343" />
  @Input()
  address: Address;

  @Input()
  phone: string;

  // Output is the way to implement event binding ()
  // EventEmitter emit address as $event object
  // parent component shall subscribe to event by 
  // <app-address (contactEvent)
  @Output()
  contactEvent: EventEmitter<Address> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  contactUs() {
    // emit($event)
    // emit the event with value this.address
    this.contactEvent.emit(this.address);
  }

}
