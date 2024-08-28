export type ListEventType = {
    value: string
    name: string
    list: HTMLUListElement
}

export type ListProps = {
    showSearchBar?: boolean
    showSearchBarIcon?: boolean
    searchBarPlaceholder?: string
    noResultsLabel?: string
    maxHeight?: string
    id?: string
    className?: string
    wrapperClassName?: string
    itemGroups: {
        title?: string
        items: {
            name: string
            value?: string
            href?: string
            target?: '_self' | '_blank' | '_parent' | '_top' | '_unfencedTop'
            selected?: boolean
            disabled?: boolean
            icon?: string
            subText?: string
        }[]
    }[]
}

export type SvelteListProps = {
    onSelect?: (event: ListEventType) => void
} & ListProps

export type ReactListProps = {
    onSelect?: (event: ListEventType) => void
} & ListProps