import { Injectable } from '@angular/core';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [];

  constructor(private httpClient: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return timer(1, 15000).pipe(
      switchMap(() =>
        this.httpClient.get<Article[]>('http://localhost:3000/articles'),
      ),
    );
  }

  getArticleById(id: number): Observable<Article> {
    return this.httpClient.get<Article>('http://localhost:3000/articles/' + id);
  }

  /*  getArticles(): Article[] {
      return this.articles;
    }

    getNewestArticle(): Article[] {
      const lastWeekDate = new Date();
      lastWeekDate.setDate(lastWeekDate.getDate() - 7);

      let newestArticles: Article[] = this.getArticles().filter((article) => {
        const date = article.publishDate;
        const d = parseInt(date.slice(0, 2));
        const m = parseInt(date.slice(3, 5)) - 1;
        const y = parseInt(date.slice(6, 10));

        const articleDate = new Date(y, m, d);
        console.log(articleDate);
        console.log(lastWeekDate);
        return articleDate > lastWeekDate;
      });

      return newestArticles;
    }

    getArticleById(id: number): Article | null {
      return this.articles.find((a) => a.id === id) ?? null;
    }*/
}
