import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorPipe'
})

export class colorPipe implements PipeTransform {
  transform(value: Color, ...args: any[]): any {
      return Color[value];
  }

}
