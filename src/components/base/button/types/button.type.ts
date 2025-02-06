export interface ButtonProps {
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    class?: string;
}

export  interface  ButtonEmits {
    (e:'submit' , date?:any) :void
}