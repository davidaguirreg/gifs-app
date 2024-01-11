import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(
    private gifsService: GifsService
  ){}

  searchAgain( searchText : string ) : void {
    this.gifsService.searchTag(searchText);
  }
  get tagsHistory() {
    return this.gifsService.tagsHistory;
  }

}
