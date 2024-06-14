import {Component, inject} from '@angular/core';
import {GifsService} from "../../services/gifs.service";
import {NgForOf} from "@angular/common";
import {Gifs} from "../../interfaces/gifs-response.interface";
import {GifCardComponent} from "../gif-card/gif-card.component";

@Component({
  selector: 'app-gifs-list',
  standalone: true,
  imports: [
    NgForOf,
    GifCardComponent
  ],
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.scss'
})
export class GifsListComponent {
  private gifsService: GifsService = inject(GifsService);

  get gifs(): Gifs[] {
    return this.gifsService.gifList;
  }
}
