export interface DatePickerProps {
    format: string
    class?: string
}

export interface Emits {
    (e: 'change', value: string): void
}