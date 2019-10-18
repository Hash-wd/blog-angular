import { Component, Input, OnInit } from '@angular/core';
import { postModel } from '../models/post-model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styles: []
})

export class PostListComponent implements OnInit {

  @Input() postList: Array<postModel>;

  constructor() { }

  ngOnInit() {
  }

}
