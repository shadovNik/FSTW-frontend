import './Heart.css';

export default function Heart({ intshipID, isLiked, toggleHeart }) {
  const heartCheck = {
    liked: {
      method: 'POST',
      url: `http://localhost:80/api/internship/add_favorite/${intshipID}`,
    },
    notLiked: {
      method: 'DELETE',
      url: `http://localhost:80/api/internship/remove_favorite/${intshipID}`,
    },
  };

  const onHeartClick = async (evt) => {
    evt.preventDefault();
    try {
      const config = isLiked ? heartCheck.notLiked : heartCheck.liked;
      const response = await fetch(config.url, { method: config.method });
      if (!response.ok) throw new Error('Ошибка сервера');

      const newIsFavorite = !isLiked;
      toggleHeart(intshipID, newIsFavorite);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="heart-container">
      <svg
        className={`heart ${isLiked ? 'liked' : ''}`}
        onClick={onHeartClick}
        width="23"
        height="23"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          stroke={isLiked ? 'red' : 'black'}
          strokeWidth="2"
          fill={isLiked ? 'red' : 'none'}
        />
      </svg>
    </div>
  );
}
