import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  public showNotification: boolean;

  cols!: number;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  }

  datavideo: any;
  constructor(private videoService:VideoService, private breakpointObserver: BreakpointObserver) 
  { 
    this.showNotification = true;
    // this.breakpointObserver.observe([
    //   Breakpoints.XSmall,
    //   Breakpoints.Small,
    //   Breakpoints.Medium,
    //   Breakpoints.Large,
    //   Breakpoints.XLarge,
    // ]).subscribe(result => {
    //   if (result.matches) {
    //     if (result.breakpoints[Breakpoints.XSmall]) {
    //       this.cols = this.gridByBreakpoint.xs;
    //     }
    //     if (result.breakpoints[Breakpoints.Small]) {
    //       this.cols = this.gridByBreakpoint.sm;
    //     }
    //     if (result.breakpoints[Breakpoints.Medium]) {
    //       this.cols = this.gridByBreakpoint.md;
    //     }
    //     if (result.breakpoints[Breakpoints.Large]) {
    //       this.cols = this.gridByBreakpoint.lg;
    //     }
    //     if (result.breakpoints[Breakpoints.XLarge]) {
    //       this.cols = this.gridByBreakpoint.xl;
    //     }
    //   }
    // });
  }

  ngOnInit(): void {
    this.getvideo();
  }
  getvideo(){
    return this.videoService.readAll().subscribe(data => {
      this.datavideo = data.list;
      console.log(this.datavideo);
    })
  }

  public onCloseClick(): void {
    this.showNotification = false;
  }

}
