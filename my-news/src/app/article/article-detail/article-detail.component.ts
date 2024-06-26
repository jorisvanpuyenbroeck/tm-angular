import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  article: Article = {
    id: 0,
    title: '',
    subtitle: '',
    imageUrl: '',
    imageCaption: '',
    content: '',
    author: '',
    publishDate: '',
    categoryId: 0,
    statusId: 0,
  };

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
  ) {}

  // create a private variable test boolean

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId != null) {
      let articleTemp = this.articleService.getArticleById(+articleId) ?? null;
      if (articleTemp != null) {
        this.articleService
          .getArticleById(+articleId)
          .subscribe((result) => (this.article = result));
      }
    }
  }
}
