import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SomePage3Page } from './some-page3.page';

describe('SomePage3Page', () => {
  let component: SomePage3Page;
  let fixture: ComponentFixture<SomePage3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomePage3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SomePage3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
