import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles: ['* {color: red}'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent  {
  imageSrc1 = "http://via.placeholder.com/150x50/00ff00";
  imageSrc2 = "http://via.placeholder.com/150x50/0000ff";
  imageSrc;
  @Input () isFavorite: boolean;
  @Output ('clicked') clickedEventEmitter = new EventEmitter();

  constructor() { 
    this.setFavImage ();
  }

  setFavImage () {
    this.isFavorite ? this.imageSrc = this.imageSrc1 : this.imageSrc=this.imageSrc2;
  }


  onClick () {
    this.isFavorite = !this.isFavorite;
    this.setFavImage();
    this.clickedEventEmitter.emit({isFavorite: this.isFavorite});
  }

}


export interface FavoriteChangedEventArgs {
  isFavorite: boolean
}