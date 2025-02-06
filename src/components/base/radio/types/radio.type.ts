export interface RadioProps {
    class?: string
    id: string
    name: string
    label?:string
}

export interface RadioEmit {
    (e: 'change', date: any): void
}