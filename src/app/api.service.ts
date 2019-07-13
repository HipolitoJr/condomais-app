import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Post } from 'src/model/post';
import { AuthService } from './auth.service'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'

  })
};

const apiUrl = 'http://condomais.herokuapp.com/api/v1/';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getPosts (): Observable<Post[]> {
    return this.http.get<Post[]>(apiUrl.concat('posts'))
      .pipe(
        tap(posts => console.log('leu os posts')),
        catchError(this.handleError('getPosts', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
