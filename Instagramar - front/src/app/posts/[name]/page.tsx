import * as React from 'react';

export interface IProfileProps {
    name: string
}

export function generateMetadata({ params }: { params: { name: string } }) {

    // const posts = getSortedPostsData()
    const { name } = params

    // const post = posts.find(post => post.id === postId)

    // if (!post) {
    //     return {
    //         title: 'Post Not Found'
    //     }
    // }

    return {
        title: name,
    }
}

export default function Profile({ name }: IProfileProps) {
    return (
        <div>
            {name}
        </div>
    );
}
