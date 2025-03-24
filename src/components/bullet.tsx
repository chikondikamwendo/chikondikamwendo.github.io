import { cn } from '@/lib/utils';
import * as React from 'react';

export default function Bullet({ className }: React.ComponentProps<any>) {
    return (
        <div className={cn('flex h-4.5 w-4.5 items-center justify-center rounded-full border-3 border-current bg-none', className)}>
            <div className="h-2 w-2 rounded-full bg-current"></div>
        </div>
    );
}
