import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform{

  transform(value: string ,toUpper: boolean = true):string {
    console.log({ value, toUpper});

    return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }

}
