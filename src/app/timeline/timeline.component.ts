import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})


export class TimelineComponent implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    const timelineWrapper = this.elementRef.nativeElement.querySelector('.timeline-wrapper');
    const timelineContentItems = this.renderer.selectRootElement('.timeline-content-item > span',true);
    
    timelineContentItems.forEach(timelineContentItem => {
      this.renderer.listen(timelineContentItem, 'mouseenter', () => {


        const activeTimelineContentItem = timelineWrapper.querySelector('.timeline-content-item.active');
        console.log(timelineWrapper)
        if (activeTimelineContentItem) {
          this.renderer.removeClass(activeTimelineContentItem, 'active');
        }
        this.renderer.addClass(timelineContentItem.parentNode, 'active');
      });
      
      this.renderer.listen(timelineContentItem, 'mouseleave', () => {
        this.renderer.removeClass(timelineContentItem.parentNode, 'active');
      });
    });
  }
}