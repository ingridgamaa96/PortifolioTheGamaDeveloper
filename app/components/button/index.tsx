import { ButtonHTMLAttributes, Children } from "react"
import { cn } from '@/app/lib/utils'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, className, ...props}: ButtonProps) => {
    return (
        <button
        className={cn(
            'bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all disable:opacity-50',
            className
        )}
        {...props}
        >
            {children}
        </button>
    )
}