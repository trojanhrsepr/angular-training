import { Address } from './../../shared/models/address';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  headOffice: Address = {city: 'BLR',
                         state: 'KA',
                         pincode: 560001
                        };

  branchOffice: Address = { city: 'MYS', 
                            state: 'KA',
                            pincode: 560023}

  constructor() { }

  ngOnInit() {
  }

  handleContactEvent(address: Address){
    console.log('contact event from child ', address);
  }

}
