import Link from 'next/link';
import FilterButton from './FilterButton';

export default function Navbar({ onFilterChange }) {
  return (
    <nav>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center my-6">
          <Link href="/" className="text-2xl font-bold text-white">
            Pain au Chocolat
          </Link>
          <FilterButton onFilterChange={onFilterChange} />
        </div>
      </div>
    </nav>
  );
}
