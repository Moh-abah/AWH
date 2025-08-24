// export interface ImageFormats {
//     thumbnail?: { url: string };
//     small?: { url: string };
//     medium?: { url: string };
//     large?: { url: string };
// }

// export interface CoverImage {
//     id: number;
//     name?: string;
//     url: string;
//     formats?: ImageFormats;
//     width?: number;
//     height?: number;
//     createdAt?: string;
//     updatedAt?: string;
//     publishedAt?: string;
// }

// export interface Category {
//     posts: never[];
//     articles: any;
//     id: number;
//     documentId?: string;
//     Name?: string;
//     Slug?: string;
//     Description?: string;
//     CoverImage?: CoverImage;
//     createdAt?: string;
//     updatedAt?: string;
//     publishedAt?: string;
// }


export interface ImageFormats {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
}

export interface CoverImage {
   
    alternativeText: string | undefined;
    id: number;
    name?: string;
    url: string;
    formats?: ImageFormats;
    width?: number;
    height?: number;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
}

export interface Tag {
    id: number;
    Name: string;
}



export interface Post {
    ip: number;
    documentId?: string;
    Tital?: string;
    Excerpt?: string;
    CoverImage?: CoverImage[];
    AdditionalImages?: CoverImage[];
    tags?: Tag[];
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    [key: string]: any; // لأي حقول إضافية غير محددة
}

export interface Category {
    id: number;
    Name?: string;
    Slug?: string;
    Description?: string;
    CoverImage?: CoverImage;
    posts: Post[]; // الآن الفئة تحتوي على الـ posts
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
}
