import React from 'react'
import clsx from 'clsx'
function Section({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={clsx(`flex flex-col gap-4`, className)}>
            {children}
        </div>
    )
}

export default Section