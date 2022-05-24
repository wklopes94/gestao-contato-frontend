export interface PageQuery{
  pageNumber: number,
  pageSize: number

}

export interface QueryBuilder{
  pageQuery: PageQuery;
  adicionalQuery: Map<string, string>;
  buildQueryMap():  Map<string, string>;
  buildQueryString(): string;
  buildPageQueryMap():  Map<string, string>;
}

export class PageRequest implements QueryBuilder{


  constructor(public pageQuery: PageQuery,public adicionalQuery: Map<string, string>){}

  buildQueryMap(): Map<string, string> {
    let buildQueryMap = new Map<string, string>([...this.buildPageQueryMap()]);

    if(this.adicionalQuery){
      buildQueryMap = new Map<string, string>([...this.buildPageQueryMap()]);

    }

    return buildQueryMap
  }

  buildQueryString(): string {
    return Array.from(this.buildQueryMap()).map(itemArray => `${itemArray[0]}=${itemArray[1]}`).join("&");
  }

  buildPageQueryMap(): Map<string, string> {

    let buildPageQueryMap = new Map<string, string>();

    buildPageQueryMap.set("page", `${this.pageQuery.pageNumber}`);
    buildPageQueryMap.set("size", `${this.pageQuery.pageSize}`);

    return buildPageQueryMap;

  }

}

export class Page<T>{

  constructor(public content: T[], public totalElements: number){}

  static fromResponse<T>(response: any){

    return new Page<T>(response.body, parseInt(response.headers.get("X-Total-Count")));

  }

}
