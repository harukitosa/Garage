import React, {FC} from 'react'
import Link from 'next/link'

interface Props {
    iconURL: string,
    content: string,
}

const NoticeListItem: FC<Props> = ({iconURL, content}) => {
    return (
        <div className="w-full">
            <div className="border-2 border-black m-2 flex items-center rounded-lg">
                <img src={iconURL} alt="icon" width="50" className="m-2 rounded-full" />
                <p>{content}</p>
            </div>
        </div>
    );
} 

export default NoticeListItem;