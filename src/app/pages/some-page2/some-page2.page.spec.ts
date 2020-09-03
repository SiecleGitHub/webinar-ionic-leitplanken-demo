import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SomePage2Page } from './some-page2.page';

describe('SomePage2Page', () => {
  let component: SomePage2Page;
  let fixture: ComponentFixture<SomePage2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomePage2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SomePage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
