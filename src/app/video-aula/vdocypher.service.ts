import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorUtils } from '../error.utils';
import 'rxjs/add/operator/map';

@Injectable()
export class VdocypherService {

  readonly api_secret: String = '90064023e00c41c7b2c19041143da8f15c8c883eb1484dbbadacb154338ed47d';
  readonly videoPlayer = '#videoplayer';
  readonly URL_GET_VIDEOS = 'https://dev.vdocipher.com/api/videos';  

  private otp_code: Object;

  constructor(private client: HttpClient) { }

  // this.client.post(url, null,
  //   {headers: new HttpHeaders('authorization:' + this.api_secret)})
  //     .pipe(
  //       tap(o => ErrorUtils.log(`OTP recuperado w/ id=${o}`)),
  //         catchError(ErrorUtils.handleError<any>('get_OTP_code')));

  getOTP(id):Observable<any>{
    const url = `${this.URL_GET_VIDEOS}/${id}/otp`;
    
    return this.client.get(url,{headers: new HttpHeaders({ [`Authorization:`]:"Apisecret ${this.api_secret}"})})
        .pipe(
            tap(o => console.log(`OTP: ${JSON.stringify(o)}`)),
            catchError(ErrorUtils.handleError<any>('get_OTP_code')));
  }

  getVideo(id?):Observable<any> {    
   // nao funciona atribuir variavel externa dentro do lambda
    if(id){
      const url = `${this.URL_GET_VIDEOS}/${id}/`;
      
      this.client.get(url,{headers: new HttpHeaders(`authorization: Apisecret ${this.api_secret}`)})
        .map(res=>res.json()).subscribe(data => {
          this.items = data;
          console.log(this.items);

          catchError(ErrorUtils.handleError<any>('getVideo')));      
    }else{
      return this.getVideos();
    } 
    //return this.getOTP(id).subscribe();    
  }

  getVideos(): Observable<any[]> {
    return this.client.get(this.URL_GET_VIDEOS)
      .pipe(
        tap(v => console.log(`videos recuperados: ${v}`)),
          catchError(ErrorUtils.handleError<any>('getVideos')));
  }

  private newPlayer(o,id){
    return new VdoPlayer({
      otp: o,
      playbackInfo: btoa(JSON.stringify({
        videoId: id
      })),
      theme: '9ae8bbe8dd964ddc9bdb932cca1cb59a',        
      container: document.querySelector( this.videoPlayer ),
    });
  }

}
