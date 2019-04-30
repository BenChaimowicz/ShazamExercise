import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchline',
  templateUrl: './searchline.component.html',
  styleUrls: ['./searchline.component.css']
})
export class SearchlineComponent implements OnInit {

  @Output() searchTyped = new EventEmitter<string>();

  searchString: string;

  constructor() {
    this.searchString = '';
   }

  ngOnInit() {
  }

  onType() {
    this.searchTyped.emit(this.searchString);
  }
}
