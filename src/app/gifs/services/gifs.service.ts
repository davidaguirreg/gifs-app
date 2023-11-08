import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  public _tagsHistory : string[] = [];

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

}
