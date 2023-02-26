
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NzTableComponent } from 'ng-zorro-antd/table';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'nz-demo-table-basic',
  template: `
  <button nz-button (click)="scrollToIndex(200)">Scroll To Index 200</button>
  <br />
  <br />
  <nz-table
    #virtualTable
    [nzBordered]="true"
    [nzVirtualItemSize]="54"
    [nzData]="listOfData"
    [nzVirtualForTrackBy]="trackByIndex"
    [nzFrontPagination]="false"
    [nzShowPagination]="false"
    [nzScroll]="{ x: '1200px', y: '240px' }"
  >
    <thead>
      <tr>
        <th nzLeft>Full Name</th>
        <th nzLeft>Age</th>
        <th>Index</th>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
        <th>Column 4</th>
        <th>Column 5</th>
        <th>Column 6</th>
        <th>Column 7</th>
        <th>Column 8</th>
        <th nzRight>Action</th>
      </tr>
    </thead>
    <tbody>
      <ng-template nz-virtual-scroll let-data let-index="index">
        <tr>
          <td nzLeft>{{ data.name }}</td>
          <td nzLeft>{{ data.age }}</td>
          <td>{{ data.index }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td nzRight>
            <a>action</a>
          </td>
        </tr>
      </ng-template>
    </tbody>
  </nz-table>
  `
})
export class NzDemoTableBasicComponent {
  listOfData: Person[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
