export type BlockTypes = 'BlogCard'
    | 'ErrorPage'
    | 'FAQ'
    | 'GridWithIcons'
    | 'Hero'
    | 'IconList'
    | 'SettingCard'
    | 'SignUp'
    | 'SocialProof'
    | 'Tiles'
    | 'User'

export type ComponentMapProps = {
    element?: string
    gap?: 'none'
        | 'xxs'
        | 'xs'
        | 'sm'
        | 'md'
        | 'default'
        | 'lg'
        | 'xl'
        | '2xl'
        | '3xl'
        | '4xl'
        | '5xl'
    components: {
        type: 'Accordion'
            | 'Alert'
            | 'AspectRatio'
            | 'Avatar'
            | 'Badge'
            | 'Banner'
            | 'Breadcrumb'
            | 'Button'
            | 'Card'
            | 'Carousel'
            | 'Checkbox'
            | 'Collapsible'
            | 'ConditionalWrapper'
            | 'DataTable'
            | 'Footer'
            | 'Group'
            | 'Icon'
            | 'Input'
            | 'Kbd'
            | 'List'
            | 'Masonry'
            | 'Menu'
            | 'Modal'
            | 'Pagination'
            | 'Popover'
            | 'Progress'
            | 'Radio'
            | 'Rating'
            | 'Ribbon'
            | 'Select'
            | 'Sheet'
            | 'Sidebar'
            | 'Skeleton'
            | 'Slider'
            | 'Spinner'
            | 'Spoiler'
            | 'Stepper'
            | 'Switch'
            | 'Table'
            | 'Textarea'
            | 'Timeline'
            | 'TimelineItem'
            | 'Toast'
            | 'HTML'
            | BlockTypes
        props?: {
            children?: any
            [key: string]: any
        }
    }[]
}