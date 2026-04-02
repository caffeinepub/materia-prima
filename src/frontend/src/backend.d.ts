import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Article {
    id: bigint;
    title: string;
    content: string;
    imageUrl: string;
    publicationDate: string;
    excerpt: string;
}
export interface backendInterface {
    getArticle(id: bigint): Promise<Article>;
    getArticles(): Promise<Array<Article>>;
    initialize(): Promise<void>;
    saveArticle(title: string, excerpt: string, content: string, imageUrl: string, publicationDate: string): Promise<bigint>;
}
