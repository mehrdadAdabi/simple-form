export interface TableProps<T> {
    columns: Array<Header>;
    rows: any[];
}

export interface Header {
    key: string;
    label: string;
    styles:string
}