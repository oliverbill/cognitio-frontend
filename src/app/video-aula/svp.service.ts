import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorUtils } from '../error.utils';

@Injectable()
export class SvpService{

  readonly api_key: String = 'apc-5204tr1juf8k';
  readonly api_code: String = 'apc-g8oye2kxq800';

  readonly videoPlayer = '#videoplayer';
  readonly entryPoint = 'http://www.streamingvideoprovider.com/?l=api';

  readonly URL_GET_TOKEN = `${this.entryPoint}&a=svp_auth_get_token&api_key=${this.api_key}&api_code=${this.api_code}`;
  private url_final;

  private token: Object;
  private resp;
  private videos;

  constructor(private client: HttpClient) {
    
  }

  // getAccessToken(): Observable<any> {
  //   return this.client.get(this.URL_GET_TOKEN,{responseType:'text'});
  // }

  public buildURL():Observable<any>{
    return this.client.get(this.URL_GET_TOKEN,{responseType:'text'})
        .pipe(
          tap(t => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(t.toString(),"text/xml");
            let auth_token_tag = xmlDoc.childNodes[0].childNodes[3].textContent;
            console.log(`token: ${auth_token_tag}`);
            this.token = auth_token_tag;          
            let url_get_videos = `${this.entryPoint}&a=svp_list_videos`;
            this.url_final = `${url_get_videos}&token=${this.token}`;            
                  }
            )
          );
  }

  getVideos(id?) {            
    this.buildURL()
      .subscribe(url => { this.url_final = url;
                          console.log(`url: ${this.url_final}`); }                    
          ,catchError(ErrorUtils.handleError<any>('SVPService: getVideos'))
      );
    
    if(this.url_final){
      this.getVid().subscribe(v => {this.videos = v});
      if(this.videos) return this.videos;
    }
  }  

  getVid():Observable<any>{
    return this.client.get(this.url_final, {responseType:'text'})
      .pipe(
        tap(v => {
              console.log(`video(s) recuperado(s): ${v}`);                    
            })          
        ,catchError(ErrorUtils.handleError<any>('SVPService: getVideos')));                        
  }

}
