import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

constructor(protected sanitizer: DomSanitizer) {}  

 transform(url: string): SafeUrl {
      if(!url) return "";
      return this.sanitizer.bypassSecurityTrustUrl(url);
   }

}
