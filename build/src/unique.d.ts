export declare function unique<T>(arr: T[]): T[];
export declare function unique<T, T2>(arr: T[], func: (t: T) => T2): T2[];
export declare function uniqueBy<T, T2>(arr: T[], by: (t: T) => T2): T[];
