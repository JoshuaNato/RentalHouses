import { Component, Input } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() localBooking! : boolean;

  constructor(private scrollService: ScrollService) {}

  scrollTo(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }

  openLinkInNewTab() {
    const url = '';
    window.open(url, '_blank');
  }
}
