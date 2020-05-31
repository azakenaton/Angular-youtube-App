import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {YoutubeItem} from '../Models/YoutubeItem';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {

  private static PREFIX_URL = 'https://www.googleapis.com/youtube/v3/search?q=';
  private static part = '&part=snippet';
  private static type = '&type=video';
  private static maxResults = '&maxResults=3';
  key = '&key=AIzaSyAPw3Ywh-tJQQ0kwbDtrtB-MsYStxb7Lz4';


  constructor(private http: HttpClient) { }

  public getYoutubeInfos(recherche: string): Observable<YoutubeItem> {
    // tslint:disable-next-line:max-line-length
    return this.http.get(YoutubeApiService.PREFIX_URL + recherche + this.key + YoutubeApiService.part + YoutubeApiService.type + YoutubeApiService.maxResults).pipe(
      map((res: any) => {
        console.log(res);
        return YoutubeItem.fromJson(res, YoutubeItem);
      }));
  }
}
