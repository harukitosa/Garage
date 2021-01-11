import React, {FC} from 'react'
import Link from 'next/link'

interface Props {
    imgURL: string,
    iconURL: string,
    userName: string,
    content: string,
    createAt: string,
}

const PostDetail: FC<Props> = ({imgURL, iconURL, userName, content, createAt}) => {
    return (
        <div className="w-full grid-layout">
            <Link href="/post/1">
                <div className="bg-white rounded-lg p-2 m-1">
                    <div>
                        <img src={imgURL} alt="macbook" />
                    </div>
                    <div className="text-3xl p-2">
                        <h1>MacBook Pro 2020</h1>
                    </div>
                    <div className="p-2 flex flex-row items-center">
                        <img className="rounded-full" src={iconURL} width="30" alt=""/>
                        <div className="pl-2 text-sm">
                            <p>{userName}</p>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <div className="w-1/2">
                        </div>
                        <div className="w-1/6 flex flex-col justify-center items-center">
                            <img src="../../heart-outline.svg" width="25" alt="heart"/>
                            <p className="text-sm text-gray-300">like</p>
                        </div>
                        <div className="w-1/6 flex flex-col justify-center items-center">
                            <img src="../../bookmark-outline.svg" width="25" alt="bookmark"/>
                            <p className="text-sm text-gray-300">save</p>
                        </div>
                        <div className="w-1/6 flex flex-col justify-center items-center">
                            <img src="../../share-social-outline.svg" width="25" alt="share"/>
                            <p className="text-sm text-gray-300">share</p>
                        </div>
                    </div>
                    <div className="text-sm p-2">
                        {content}
                    </div>
                    <div className="flex flex-row justify-end text-sm pr-2 text-gray-300">
                        {createAt}
                    </div>
                </div>
            </Link>
        </div>
    );
} 

export default PostDetail;