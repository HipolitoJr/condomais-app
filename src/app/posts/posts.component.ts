import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../../model/post'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  items: Post[];
  error: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPosts().subscribe(
      (items: Post[]) => this.items = items,
      (error: any) => this.error = error
    );
  }
}