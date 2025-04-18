export interface IndexElement {
    order:number;
    index: string;
    year: string;
    title: string;
    keywords?: string;
    url:string;
    description?: string;
    image?: string;
    hasOverflowedText?: boolean;
    images?: Array<string>;
    links?: Array<string>;
    awardWining?: string;
}
