import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gifs, GifsResponseInterface} from "../interfaces/gifs-response.interface";

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private APIKEY: string = 'Q3ZNUaRJYTC4I4jEA05KE7d8XBnFuZnb';
  private _tagsHistory: string[] = [];
  private httpClient: HttpClient = inject(HttpClient);
  public gifList: Gifs[] = [];


  constructor() {
    this.loadLocalStorage();
  }
  get tagsHistory(): string[] {
    return [...this._tagsHistory]
  }

  private fixHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this.tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTad:string): boolean => oldTad !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10);
  }

  private saveLocalStorage() {
    localStorage.setItem('gifsHistory', JSON.stringify(this.tagsHistory))
  }

  private loadLocalStorage() {
    if (!localStorage.getItem('gifsHistory')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('gifsHistory')!);

    if (this.tagsHistory.length === 0) return;
    this.searchTag(this.tagsHistory[0]);
  }

  searchTag(tag: string) {
    const url: string = 'https://api.giphy.com/v1/gifs';
    const params = new HttpParams()
      .set('api_key', this.APIKEY)
      .set('limit', 10)
      .set('q', tag)

    if (!tag) return;
    this.fixHistory(tag);

    this.httpClient.get<GifsResponseInterface>(`${url}/search`, {params}).subscribe((resp:GifsResponseInterface) => {
      this.gifList = resp.data;
      this.saveLocalStorage();
    });
  }
}
