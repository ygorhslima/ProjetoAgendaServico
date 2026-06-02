import { Search } from 'lucide-react';
import './style.css';

interface SearchBarProps {
  searchTerm: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch, searchTerm }: SearchBarProps) {
  return (
    <div className="search-container">
      <div className="search-wrapper">
        <Search className="search-icon" size={18} />
        <input
          type="text"
          className="search-dados"
          placeholder="Buscar por nome, CRM..."
          value={searchTerm} // Mantém o input controlado com o estado do contexto
          onChange={(e) => onSearch(e.target.value)}
          required
        />
      </div>
    </div>
  );
}