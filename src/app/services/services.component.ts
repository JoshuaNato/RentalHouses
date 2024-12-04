import { Component, Input } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
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
