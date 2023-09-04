import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @Input() article: Article = {
    id: 0,
    title: '',
    subtitle: '',
    imageUrl: '',
    imageCaption: '',
    content: '',
    author: '',
    publishDate: '',
  };
  @Input() isDetail: boolean = false;
  protected readonly navigator = navigator;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  detail(id: number) {
    this.router.navigate(['/article', id]);
  }

  back(): void {
    this.router.navigate(['..']);
  }
}
