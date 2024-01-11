import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifsList:Gif[] = [];

  public _tagsHistory : string[] = [];

  private apiKey:string = 'iVEtDepn1yee66K63JwkulFUJLTAyLfE';

  private urlService:string = 'https://api.giphy.com/v1/gifs/search'

  constructor(
    private httpClient : HttpClient
  ) {
    this.loadLocalStorage();
    console.log("Service ready");

  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }


  organizeHistory(tag:string) {
    tag = tag.toLowerCase();
    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter( (oldTag)=> oldTag !== tag )
    }
    this._tagsHistory.unshift(tag);
  }

  searchTag(text: string) {
    if(text.length===0) return ;
    this.organizeHistory(text);
    const params = new HttpParams()
                        .set('api_key',this.apiKey)
                        .set('limit','10')
                        .set('q',text)
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.httpClient.get<SearchResponse>(this.urlService, { params }).subscribe(
      (response) => {
        this.gifsList = response.data;
        console.log(this.gifsList);
      }
    )
    this.saveLocalStorage();
  }

  //Storage Methods
  saveLocalStorage() : void {
    localStorage.setItem('historyTags', JSON.stringify(this.tagsHistory) );
  }
  loadLocalStorage () : void {
      if(!localStorage.getItem('historyTags')) return;
      this._tagsHistory = JSON.parse(localStorage.getItem('historyTags')!);
      if(this._tagsHistory.length === 0 ) return;
      this.searchTag(this._tagsHistory[0]);
  }
}
