import React, {FC} from 'react'

interface Props {
    profileName: string,
    iconURL: string,
    profile: string,
}

const ProfileCard: FC<Props> = ({profile, profileName, iconURL}) => {
    return (
        <div className="bg-gray-700 p-4 text-white">
            <div className="flex flex-wrap">
                <div className="flex flex-row">
                    <div className="p-4">
                        <img src={iconURL} alt="icon" className="rounded-full w-20" />
                    </div>
                    <div className="p-4">
                        <p className="text-xl">{profileName}</p>
                        <div>
                        {profile}
                        </div>
                        <div>
                            合計購入金額: 123000円
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
} 

export default ProfileCard;