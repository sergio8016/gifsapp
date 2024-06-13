import { Component } from '@angular/core';
import {SearchBoxComponent} from "../../components/search-box/search-box.component";
import {GifsListComponent} from "../../components/gifs-list/gifs-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchBoxComponent,
    GifsListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
