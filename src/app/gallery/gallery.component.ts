import { Component, Input } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
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
