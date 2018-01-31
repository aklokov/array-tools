export interface BySelector<T> {
    (t: T): any;
}
export declare function uniqueBy<T>(arr: T[], ...by: BySelector<T>[]): T[];
