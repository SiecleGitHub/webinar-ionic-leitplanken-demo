import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnotherPagePage } from './another-page.page';

describe('AnotherPagePage', () => {
  let component: AnotherPagePage;
  let fixture: ComponentFixture<AnotherPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
