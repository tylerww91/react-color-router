import { useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound.js';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();

  if (
    isNaN(r) ||
    isNaN(g) ||
    isNaN(b) ||
    r > 255 ||
    g > 255 ||
    b > 255 ||
    r < 0 ||
    g < 0 ||
    b < 0 ||
    r.includes('.') ||
    g.includes('.') ||
    b.includes('.')
  ) {
    return <NotFound />;
  }
  return (
    <main className="RGB" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <h3>{`rgb(${r}, ${g}, ${b})`}</h3>
    </main>
  );
}
