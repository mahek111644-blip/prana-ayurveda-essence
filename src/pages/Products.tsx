import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Search, Filter, Star, ShoppingCart, Heart } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    checkUser();
    fetchProducts();
    loadSearchHistory();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, searchQuery, categoryFilter, sortBy]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const loadSearchHistory = () => {
    const history = localStorage.getItem("searchHistory");
    if (history) {
      setSearchHistory(JSON.parse(history));
    }
  };

  const saveSearchHistory = (query: string) => {
    if (query.trim() === "") return;
    const newHistory = [query, ...searchHistory.filter(h => h !== query)].slice(0, 5);
    setSearchHistory(newHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newHistory));
  };

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortProducts = () => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter(product => {
        // Assuming products have a category_id or similar field
        return true; // Implement category filtering based on your schema
      });
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case "price-high":
        filtered.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
        filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(filtered);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      saveSearchHistory(query);
    }
  };

  const addToWishlist = async (productId: string) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to add items to wishlist",
        variant: "destructive",
      });
      navigate("/auth");
      return;
    }

    try {
      const { error } = await supabase
        .from("wishlist")
        .insert({ user_id: user.id, product_id: productId });

      if (error) throw error;

      toast({
        title: "Added to Wishlist",
        description: "Product has been added to your wishlist",
      });
    } catch (error: any) {
      if (error.code === "23505") {
        toast({
          title: "Already in Wishlist",
          description: "This product is already in your wishlist",
        });
      } else {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 mt-20">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold mb-2">
            Ayurvedic <span className="gradient-text">Products</span>
          </h1>
          <p className="text-muted-foreground">Explore our range of authentic Ayurvedic medicines</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10"
              />
              {searchHistory.length > 0 && searchQuery === "" && (
                <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg">
                  <div className="p-2 text-sm text-muted-foreground">Recent Searches</div>
                  {searchHistory.map((query, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(query)}
                      className="w-full text-left px-4 py-2 hover:bg-accent transition-colors"
                    >
                      {query}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {showFilters && (
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant={categoryFilter === "all" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setCategoryFilter("all")}
                  >
                    All Products
                  </Badge>
                  <Badge
                    variant={categoryFilter === "stress" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setCategoryFilter("stress")}
                  >
                    Stress Relief
                  </Badge>
                  <Badge
                    variant={categoryFilter === "immunity" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setCategoryFilter("immunity")}
                  >
                    Immunity
                  </Badge>
                  <Badge
                    variant={categoryFilter === "digestion" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setCategoryFilter("digestion")}
                  >
                    Digestive Health
                  </Badge>
                  <Badge
                    variant={categoryFilter === "mental" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setCategoryFilter("mental")}
                  >
                    Mental Clarity
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow">
              <Link to={`/products/${product.slug}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={product.image_url || "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=300&fit=crop"}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.featured && (
                    <Badge className="absolute top-2 left-2">Featured</Badge>
                  )}
                </div>
              </Link>
              <CardContent className="p-4">
                <Link to={`/products/${product.slug}`}>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {product.description}
                  </p>
                </Link>
                {product.rating > 0 && (
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.review_count})
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => addToWishlist(product.id)}
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Link to={`/products/${product.slug}`}>
                      <Button size="icon">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Products;