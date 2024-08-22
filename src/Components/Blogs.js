import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Spinner } from './Spinner'
import Card from './Card'

export default function Blogs() {
    const { posts, loading } = useContext(AppContext); 

    return (
        <div className='w-11/12 flex flex-col items-center max-w-[670px] mt-[3.5rem] mb-[3.5rem]' >
            {loading ? (
                <div className="flex justify-center items-center h-[50vh] w-full">
                    <Spinner />
                </div>
            ) : (
                posts.length === 0 ? (
                    <div><p>No Posts Found</p></div>
                ) : (
                    posts.map(post => (
                        <Card key={post.id} post={post} />
                    ))
                )
            )}
        </div>
    )
}
