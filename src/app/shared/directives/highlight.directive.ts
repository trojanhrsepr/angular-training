import { Directive,
          Input,
          ElementRef,
          HostListener,
          Renderer2
} from '@angular/core';

// <p   appHighlight
// <div appHighlight
//p, div are called host element, that host the directive
// if any events happens on host element, it can be captured using HostListener



@Directive({
  // [] is must for directives
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  color: string = 'lightblue';

   // dependency injection
   // angular framework inject the host elmeent dom reference into directive
  constructor(private hostElement: ElementRef, 
              private renderer: Renderer2) { }


  ngOnInit() {
    console.log('Host Element Tag is ', 
        this.hostElement.nativeElement.tagName);
  }

  @HostListener('mouseenter')
  onEnter() {
    // use renderer to change the background style 
    this.renderer
        .setStyle(this.hostElement.nativeElement, 
                  'background',
                  this.color);
  }


  @HostListener('mouseleave')
  onLeave() {
    // use renderer to remove the background style 
    this.renderer
        .removeStyle(this.hostElement.nativeElement, 
                  'background');
  }

}
