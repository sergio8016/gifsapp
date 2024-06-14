import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {GifsService} from "../../services/gifs.service";

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public searchInput!: ElementRef;
  gifsService: GifsService = inject(GifsService);
  onKeyUp() {
    const newTag = this.searchInput.nativeElement.value;
    this.gifsService.searchTag(newTag);
    this.searchInput.nativeElement.value = '';
  }
}
