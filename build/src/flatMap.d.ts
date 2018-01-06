export declare function flatMap<TIn>(input: TIn[][]): TIn[];
export declare function flatMap<TIn, TOut>(input: TIn[], selector: (item: TIn) => TOut[]): TOut[];
