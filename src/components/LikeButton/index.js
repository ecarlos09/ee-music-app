import React, { useState } from 'react';

const LikeButton = () => {
    const [liked, setLiked] = useState(false);

    const handleLiked = e => {
        e.stopPropagation();
        setLiked(!liked);
    }

    return (
        <span role="switch" onClick={ handleLiked }>
            <i class={ liked ? "fas fa-grin-hearts" : "far fa-heart" }></i>
        </span>
    )
}

export default LikeButton;