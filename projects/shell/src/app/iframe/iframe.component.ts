import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css'],
})
export class IframeComponent {
  url: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {
    this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(
      'https://www.thejpaproject.com'
    );
  }
}
