import { Pipe, PipeTransform } from '@angular/core';

// {{ 2 | power:3}} ==> 2^3


@Pipe({
  name: 'power' // used inside html
})
export class PowerPipe implements PipeTransform {

  // invoked by Angular during render
  //{{ value | power: exponent}}
  // default 
  //{{ value | power}}, exponent shall be undefined, 
  // can use the default value 1
  
  transform(value: number, exponent: number = 1 ): number {
    return Math.pow(value, exponent);
  }

}
