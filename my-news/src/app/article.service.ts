import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [];

  constructor() {
    let article1: Article = {
      id: 1,
      title: 'Title article',
      subtitle: 'Subtitle article',
      imageUrl:
        'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134',
      imageCaption: 'caption image',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: 'Michaël Cloots',
      publishDate: '29/08/2023',
    };
    let article2: Article = {
      id: 2,
      title: 'Title article 2',
      subtitle: 'Subtitle article 2',
      imageUrl:
        'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=134',
      imageCaption: 'caption image 2',
      content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptas sequi voluptatum pariatur! Quae cumque
      quidem dolor maxime enim debitis omnis nemo facilis sequi autem? Quae tenetur, repellat vero deleniti vitae
      dolores? Cum tempore, mollitia provident placeat fugit earum, sint, quae iusto optio ea officiis consectetur sit
      necessitatibus itaque explicabo?`,
      author: 'Florian Smeyers',
      publishDate: '28/08/2023',
    };

    this.articles.push(article1);
    this.articles.push(article2);
  }

  getArticles(): Article[] {
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
  }
}
