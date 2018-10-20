import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {

  transform(value: string, directory: string, forFetch = false): string {
    const path = `/src/assets/${directory}/${value}`;
    return forFetch ? path : `url("${path}")`;
  }

}
