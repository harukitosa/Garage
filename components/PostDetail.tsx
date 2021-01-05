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
                    <div className="text-sm p-2">
                        {content}
                    </div>
                    <div className="pt-4 flex flex-row justify-between">
                        <div className="flex flex-wrap">
                            <div className="flex flex-row text-sm items-center pl-2">
                                <img src="../../heart-outline.svg" alt="heart" width="20" />
                                <p className="pl-1">12</p>
                            </div>
                            <div className="flex flex-row text-sm items-center pl-2">
                                <img src="../../chatbox-outline.svg" alt="heart" width="20" />
                                <p className="pl-1">0</p>
                            </div>
                        </div>
                        <div className="text-sm pr-2 text-gray-300">
                            {createAt}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
} 

export default PostDetail;