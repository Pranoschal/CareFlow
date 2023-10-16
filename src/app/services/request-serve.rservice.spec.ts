import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RequestServerService } from './request-server.service';


describe('RequestServerService', () => {
  let service: RequestServerService;
  //help to populate data, give a mock data
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //help us to test the HTTP call
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RequestServerService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Test of HTTP get method', () => {
    service.getAllRooms().subscribe((data) => {
      expect(data.length).toBe(2);
    });
    let rooms: any[] = [
      {
        id: 1,
        roomName: 'Economy Room',
        totalRooms: 18,
        availableRooms: 18,
        bookedRooms: 0,
        price: 2100,
        room: [
          {
            pid: 2,
            pname: 'Pranoschal Saikia',
            roomNo: 1,
            'entry-timestamp': '',
            'exit-timestamp': '',
          },
        ],
      },
      {
        id: 2,
        roomName: 'Economy Plus Room',
        totalRooms: 6,
        availableRooms: 5,
        bookedRooms: 1,
        price: 2600,
        room: [
          {
            pid: 0,
            pname: '',
            roomNo: 1,
            'entry-timestamp': '',
            'exit-timestamp': '',
          },
        ],
      },
    ];

    const mockReq = testingController.expectOne('http://localhost:3500/rooms');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(rooms);
  });
});
