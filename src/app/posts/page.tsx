import * as React from 'react';

import PostItem from './components/PostItem';
import Stories from './components/Stories';

export interface IPostsProps {
}

export function generateMetadata() {
    return {
        title: "Instagramar",
    }
}

export default function Posts(props: IPostsProps) {
    return (
        <div className="flex items-center w-4/5 flex-col">
            <Stories />

            <div className='posts relative w-11/12'>
                <PostItem />
            </div>
        </div>
    );
}
