/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture, async, fakeAsync, tick, inject} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { EventosComponent } from './eventos.component';

describe('EventosComponent', () => {
  let component: EventosComponent;
  let fixture: ComponentFixture<EventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosComponent ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call getEventos', fakeAsync(() => {

    component.getEventos();
    fixture.detectChanges();
    
    tick(15000);

    expect(component.eventos[0]).toEqual("abc");

  }));


});


/*describe('EventosComponent', () => {
  let component: EventosComponent;
  let HEROES;
  let mockEventoService;

  beforeEach(() => {
      HEROES = [
          { id: 1, name: 'SpiderDude', strength: 8 },
          { id: 2, name: 'Wonderful Woman', strength: 24 },
          { id: 3, name: 'SuperDude', strength: 55 },
      ];

      mockEventoService = jasmine.createSpyObj(['getEventos']);

      component = new EventosComponent(mockEventoService);
  });

  describe('getEventos', () => {
      it('deve achar o SpiderDude', () => {
        mockEventoService.getEventos.and.returnValue(of(true));
          component.eventos = HEROES;

          expect(component.eventos[0].name).toBe('SpiderDude');
      });
  });
});*/
