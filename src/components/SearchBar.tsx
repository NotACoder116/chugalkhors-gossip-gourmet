
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  dietFilter: string;
  onDietFilterChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

const SearchBar = ({
  searchTerm,
  onSearchChange,
  dietFilter,
  onDietFilterChange,
  sortBy,
  onSortChange
}: SearchBarProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-white border-gray-200 focus:border-chugal-green focus:ring-chugal-green"
        />
      </div>
      
      <div className="flex gap-2">
        <Select value={dietFilter} onValueChange={onDietFilterChange}>
          <SelectTrigger className="w-32 bg-white border-gray-200 focus:border-chugal-green">
            <SelectValue placeholder="Diet" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="veg">🌱 Veg</SelectItem>
            <SelectItem value="nonveg">🍗 Non-Veg</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-36 bg-white border-gray-200 focus:border-chugal-green">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
            <SelectItem value="featured">Featured</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Top Rated</SelectItem>
            <SelectItem value="special">Chef's Special</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SearchBar;
