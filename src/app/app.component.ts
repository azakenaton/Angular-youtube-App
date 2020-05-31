import {Component, Input} from '@angular/core';
import { YoutubeApiService } from '../services/youtube-api.service';
import {YoutubeItem} from '../models/YoutubeItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtubeApp';
  public rechercheYoutube: string;
  @Input() youtubeItem: YoutubeItem;

  constructor(private YoutubeApi: YoutubeApiService) {
  }

  public rechercheVideo(): void {
    this.YoutubeApi.getYoutubeInfos(this.rechercheYoutube).subscribe((res: YoutubeItem) => {
      console.log(res);
    });
  }

}
