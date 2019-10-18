import { Component, Input, OnInit } from '@angular/core';
import { postModel } from '../models/post-model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styles: []
})
export class PostListItemComponent implements OnInit {

  @Input() postItem: postModel;

  onLoveIts() {
  	this.postItem.loveIts = this.postItem.loveIts + 1;
  };

  onDoNotLoveIts(){
  	this.postItem.loveIts = this.postItem.loveIts - 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
