import React, {FC} from 'react'

interface Props {
    profileName: string,
    iconURL: string,
    profile: string,
}

const ProfileCard: FC<Props> = ({profile, profileName, iconURL}) => {
    return (
        <div className="bg-gray-700 p-4 text-white">
            <div className="flex flex-row">
                <img src={iconURL} alt="icon" width="100" className="rounded-full" />
                <div className="p-4">
                    <p className="text-xl">{profileName}</p>
                    <div>
                      {profile}
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default ProfileCard;