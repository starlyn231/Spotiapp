import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "domseguro",
})
export class DomseguroPipe implements PipeTransform {
  // Dom Sanitizer verifica que el recurso que pasaras no sea malisioso para la app
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }
}
