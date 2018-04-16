import { Injectable } from '@angular/core';
import { Aluno } from './aluno';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AlunoProfileService {

  constructor() {}

  getAlunoLogado():Observable<Aluno>{    
    return of();    
    // {
    //   "sub": "auth0|5ac9fc5943c87f1149efa6cf",
    //   "nickname": "toledo.ary.1983",
    //   "name": "toledo.ary.1983@gmail.com",
    //   "picture": "https://s.gravatar.com/avatar/2dbc750233f8c0d96e4428a0a24243ea?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fto.png",
    //   "updated_at": "2018-04-08T11:27:14.725Z"
    // }
  }
}
