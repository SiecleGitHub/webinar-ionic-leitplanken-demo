import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabbedPage } from './tabbed.page';

describe('TabbedPage', () => {
  let component: TabbedPage;
  let fixture: ComponentFixture<TabbedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabbedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
