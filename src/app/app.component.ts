import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebardComponent} from "./components/sidebard/sidebard.component";
import {HomeComponent} from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebardComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
