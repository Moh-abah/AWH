
interface Media { id: number; url?: string; alternativeText?: string; name?: string; }
interface User { id: number; username: string; }
interface Category { id: number; Name: string; Slug: string; }
interface Tag { id: number; Name: string; Slug: string; }
interface Comment { id: number; author_name: string; content: string; rating?: number | null; createdAt: string; }

interface PostItem {
    id: number;
    Tital: string;
    Slug?: string;
    Excerpt?: string;
    contant?: any[];
    CoverImage?: Media[];
    AdditionalImages?: Media[];
    users_permissions_user?: User;
    categories?: Category[];
    socialShareLinks?: { facebook?: string; twitter?: string; linkedin?: string; };
    Featured?: boolean;
    ReadingTime?: number;
    Views?: number | null;
    tags?: Tag[];
    publishedAt?: string;
    you_may_also_likes?: PostItem[];
    MetaDescription?: string;
    comments?: Comment[];
}