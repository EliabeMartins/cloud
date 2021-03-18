import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ServerListItem {
  name: string;
  id: number;
  ip: string;
  gp: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ServerListItem[] = [
  {id: 1, name: 'TESTE-01', ip: '192.168.0.1', gp: 'Adireto-01'},
  {id: 2, name: 'TESTE-02', ip: '192.168.0.2', gp: 'Adireto-01'},
  {id: 3, name: 'TESTE-03', ip: '192.168.0.3', gp: 'Adireto-02'},
  {id: 4, name: 'TESTE-04', ip: '192.168.0.4', gp: 'Adireto-02'},
  {id: 5, name: 'TESTE-05', ip: '192.168.0.5', gp: 'Adireto-03'},
  {id: 6, name: 'TESTE-06', ip: '192.168.0.6', gp: 'Adireto-03'},
  {id: 7, name: 'TESTE-07', ip: '192.168.0.7', gp: 'Imp-01'},
  {id: 8, name: 'TESTE-08', ip: '192.168.0.8', gp: 'Imp-01'},
  {id: 9, name: 'TESTE-09', ip: '192.168.0.9', gp: 'Imp-01'},
  {id: 10, name: 'TESTE-10', ip: '192.168.0.10', gp: 'Imp-02'},
  {id: 11, name: 'TESTE-11', ip: '192.168.0.11', gp: 'Imp-02'},
  {id: 12, name: 'TESTE-12', ip: '192.168.0.12', gp: 'Imp-02'},
  {id: 13, name: 'TESTE-13', ip: '192.168.0.13', gp: 'Imp-02'},
  {id: 14, name: 'TESTE-14', ip: '192.168.0.14', gp: 'Imp-03'},
  {id: 15, name: 'TESTE-15', ip: '192.168.0.15', gp: 'Imp-04'},
  {id: 16, name: 'TESTE-16', ip: '192.168.0.16', gp: 'Imp-03'},
  {id: 17, name: 'TESTE-17', ip: '192.168.0.17', gp: 'Imp-04'},
  {id: 18, name: 'TESTE-18', ip: '192.168.0.18', gp: 'Imp-03'},
  {id: 19, name: 'TESTE-19', ip: '192.168.0.19', gp: 'Servicetrix-01'},
  {id: 20, name: 'TESTE-20', ip: '192.168.0.20', gp: 'Servicetrix-01'},
];

/**
 * Data source for the ServerList view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ServerListDataSource extends DataSource<ServerListItem> {
  data: ServerListItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ServerListItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ServerListItem[]): ServerListItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ServerListItem[]): ServerListItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
