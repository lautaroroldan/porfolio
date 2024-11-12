import { Moon } from "lucide-react";

function ThemeToggle() {
    return <button className='rounded-md p-1.5 hover:bg-custom-gray/25 text-custom-gray hover:text-white transition-all duration-300 hover:scale-110 [&>svg]:hover:rotate-12'>
        <Moon className='size-6 transition-transform' />
    </button>
}

export default ThemeToggle;
