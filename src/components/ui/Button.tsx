import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, forwardRef } from "react";
import {Loader2} from "lucide-react";

export const buttonVariants = cva(
    'my-2 active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none dark:focus:ring-offset-slate-900',
    {
      variants: {
        variant: {
          default:
            'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
          destructive: 'text-white hover:bg-red-600 dark:hover:bg-red-600',
          outline:
            'focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 dark:border-slate-700',
          subtle:
            'focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
          sassy:"bg-indigo dark:bg-indigo text-white hover:bg-governor dark:bg-indigo-200 dark:hover:bg-governor",
          err:"my-1 bg-error-red dark:bg-error-red text-white hover:bg-error-red dark:bg-error-red-200 dark:hover:bg-error-red",
          accept:"bg-accept-green dark:bg-accept-green text-white hover:bg-accept-green dark:bg-accept-green-200 dark:hover:bg-accept-green",
          ghost:
            'focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
          link: 'focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
          link2: 'space-x-2 disabled:opacity-50 dark:hover:text-white bg-transparent dark:bg-transparent hover:text-black text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',

        },
        size: {
          default: 'h-10 py-2 px-4',
          sm: 'h-9 px-2 rounded-md',
          md: 'h-10 w-30 rounded-md',
          lg: 'h-16 w-60 rounded-md',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    }
  )

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>,
VariantProps<typeof buttonVariants> {
    isLoading?:boolean
}
 
const Button = forwardRef<HTMLButtonElement,ButtonProps>(
({
    className,variant,isLoading,size,children,...props
},ref) => {
    return ( 
        <button className={cn(buttonVariants({variant,size,className}))}
        ref={ref}
        disabled={isLoading}
        {...props}
        >
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin "/>:null}
            {children}
            
        </button> 
    );
})

Button.displayName = "Button";
 
export default Button;