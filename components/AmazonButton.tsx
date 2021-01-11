import React, {FC} from 'react'

const AmazonButton: FC = ({ children }) => {

    const amazonLink = () => {
        console.log("helloworld");
    }

    return (
        <button onClick={amazonLink} className="bg-red-400 hover:bg-red-500 text-white px-8 py-2 rounded select-none">
          { children }
        </button>
    );
} 

export default AmazonButton;