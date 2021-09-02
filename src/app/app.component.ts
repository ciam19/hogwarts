import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hogwarts';
 
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  


  constructor(private changeDetectorRef: ChangeDetectorRef,
      private media: MediaMatcher) {

      this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      // tslint:disable-next-line: deprecation
      this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {

     
  }

  ngOnDestroy(): void {
      // tslint:disable-next-line: deprecation
      this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngAfterViewInit(): void {
      this.changeDetectorRef.detectChanges();
  } 
}