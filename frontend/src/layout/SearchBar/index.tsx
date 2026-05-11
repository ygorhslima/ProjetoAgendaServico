import { Search } from 'lucide-react';
import './style.css'

export default function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          className="search-dados"
          placeholder="Buscar..."
        />
      </div>
    </div>
  );
}