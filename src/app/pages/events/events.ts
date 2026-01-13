import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.scss',
})
export class Events {

  selectedImage: string | null = null;

  openImage(src: string) {
    this.selectedImage = src;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
