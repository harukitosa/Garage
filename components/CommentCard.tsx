import React, {FC} from 'react'

interface Props {
    profileName: string,
    iconURL: string,
    comment: string,
}

const CommentCard: FC<Props> = ({profileName, iconURL, comment}) => {
    return (
        <div className="w-full">
            <div className="ml-2 mr-2 bg-white rounded flex flex-row">
                <div className="p-2 pt-4">
                    <img className="rounded-full" src={iconURL} width="30" alt=""/>
                </div>
                <div className="border-2 rounded-lg w-full m-2 flex flex-col">
                    <div className="p-2 text-sm text-gray-400">
                        <p>{profileName}</p>
                    </div>
                    <div className="p-2">
                        {comment}
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default CommentCard;