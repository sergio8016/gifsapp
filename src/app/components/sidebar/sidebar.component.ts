import {Component, inject} from '@angular/core';
import {GifsService} from "../../services/gifs.service";
import {NgForOf, TitleCasePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgForOf,
    TitleCasePipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  private gifsService:GifsService = inject(GifsService);

  get tags() {
    return this.gifsService.tagsHistory;
  }
}
