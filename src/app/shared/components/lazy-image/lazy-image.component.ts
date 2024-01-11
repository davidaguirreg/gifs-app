import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gif-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error("URL is necessary property.");
  }

  loadImage(): void {
    this.hasLoaded = true;
  }

}
