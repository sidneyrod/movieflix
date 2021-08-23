import { ReactComponent as MovieImage } from '../../../../core/assets/movie-image.svg';
import './styles.scss';

const MovieCard = () => {
  return (
    <div className="movie-card-container">
      <MovieImage className="movie-image" />

      <div className="movie-info-container">
        <h3 className="movie-title">
          O Senhor dos Anéis - O Retorno do Rei
        </h3>
        <span className="movie-year">2003</span>
        <h4 className="movie-subtitle">
          O confronto final entre as forças do bem e do mal
        </h4>
      </div>
    </div>
  )
}

export default MovieCard;