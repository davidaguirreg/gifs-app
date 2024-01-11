import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search',
  template: `
    <h5>Buscar:</h5>
    <input
      type="search"
      name="searchGifs"
      id="searchGifs"
      class="form-control"
      placeholder="Buscar gifs..."
      (keyup.Enter)="search()"
      #txtSearch
      >
  `
})

export class SearchComponent {

  @ViewChild('txtSearch')
  public textSearch !: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService : GifsService
  ) { }


  search() {
    this.gifsService.searchTag(this.textSearch.nativeElement.value);
    this.textSearch.nativeElement.value = '';
  }
}
