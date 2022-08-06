import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(describe:String , number:number) : String {
    return describe.substring(0,number);
  }

}
