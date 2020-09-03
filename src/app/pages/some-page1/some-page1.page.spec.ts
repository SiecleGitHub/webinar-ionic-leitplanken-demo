import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SomePage1Page } from './some-page1.page';

describe('SomePage1Page', () => {
  let component: SomePage1Page;
  let fixture: ComponentFixture<SomePage1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomePage1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SomePage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
