import {Component, Input, OnInit} from '@angular/core';
import {Gifs} from "../../interfaces/gifs-response.interface";
import {NgIf} from "@angular/common";
import {LazyImageComponent} from "../lazy-image/lazy-image.component";

@Component({
  selector: 'app-gif-card',
  standalone: true,
  imports: [
    NgIf,
    LazyImageComponent
  ],
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.scss'
})
export class GifCardComponent implements OnInit {
  @Input() gif!: Gifs;

  ngOnInit() {
    if (!this.gif) throw new Error('Gifs property is required');
  }
}
