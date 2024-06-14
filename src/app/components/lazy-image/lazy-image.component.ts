import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  standalone: true,
  imports: [],
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.scss'
})
export class LazyImageComponent implements OnInit{
  @Input() url!: string;
  @Input() alt!: string;
  private loaded: boolean = false;

  ngOnInit() {
    if (!this.url) throw new Error('URL property is required');
  }

  onLoad() {
    this.loaded = true;
  }
}
