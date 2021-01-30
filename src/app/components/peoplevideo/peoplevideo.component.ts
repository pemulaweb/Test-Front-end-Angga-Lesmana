import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service'
@Component({
  selector: 'app-peoplevideo',
  templateUrl: './peoplevideo.component.html',
  styleUrls: ['./peoplevideo.component.css']
})
export class PeoplevideoComponent implements OnInit {
  data:any;
  constructor(private videoService:VideoService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData(){
    return this.videoService.readAll().subscribe(data =>{
      this.data = data.list;
      console.log(this.data);
    })
  }

}
