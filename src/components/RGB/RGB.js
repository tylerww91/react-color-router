import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound.js';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();

  if (isNaN(r) || isNaN(g) || isNaN(b)) {
    return <NotFound />;
  }
  return (
    <main className="RGB" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <h3>{`rgb(${r}, ${g}, ${b})`}</h3>
    </main>
  );
}
