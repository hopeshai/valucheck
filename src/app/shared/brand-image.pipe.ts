import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandImage'
})
export class BrandImagePipe implements PipeTransform {

  transform(value: string, directory = 'brands'): string {
    return `url("/src/assets/${directory}/${value}")`;
  }

}
