import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform( value: string, todas: boolean = true ): string {
    value = value.toLowerCase();
    let nombres = value.split(' ');
    const capitalizaPalabra = ( palabra: string ): string => {
      return palabra[0].toUpperCase() + palabra.substr(1);
    };
    if ( todas ) {
      nombres = nombres.map( capitalizaPalabra );
    } else {
      nombres[0] = capitalizaPalabra( nombres[0] );
    }
    return nombres.join( ' ' );
  }
}
