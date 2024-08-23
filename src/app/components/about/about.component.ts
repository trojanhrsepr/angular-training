import { Component, OnInit,
         ViewChild,
         ElementRef
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // view child is ready after component initialized
  @ViewChild("para1", {static: true})
  para1Element: ElementRef; // ElementRef is a wrapper for DOM

  @ViewChild("firstName", {static: true})
  firstNameElement: ElementRef;

  constructor() { }

  ngOnInit() {
    // nativeElement is DOM object, represent para tag
    this.para1Element.nativeElement.textContent = 'From About component';
    this.firstNameElement.nativeElement.value = 'Angular';

    console.log('  Element Tag is ', 
        this.firstNameElement.nativeElement.tagName);
  }

}
