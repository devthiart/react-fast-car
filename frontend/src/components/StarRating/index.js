const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i}>&#9733;</span>); // Estrela preenchida
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Estrela vazia
    }
  }

  return <span>{stars}</span>;
};

export default StarRating;