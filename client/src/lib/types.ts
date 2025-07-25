export interface Meta {
    current_page: number,
    from: number,
    last_page: number
    links: Link[]
    path: string
    per_page: number
    to: number
    total: number
}

interface Link {
    url: string
    label: string
    active: boolean
}


export interface News {
    id: string
    author: string,
    thumbnail_url: string
    title: string
    short_description: string
    content: string
    categories: Category[]
    created_at: string
}

export interface Category {
    id: string
    code: string
    name: string
}