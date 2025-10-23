import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { Package, TrendingUp, Users, BarChart3, Plus, Settings, BookOpen, Star } from "lucide-react";
import { User as UserType, Session } from "@supabase/supabase-js";
import ProductManagement from "@/components/supplier/ProductManagement";
import ProductListing from "@/components/supplier/ProductListing";
import ProductReviews from "@/components/supplier/ProductReviews";
import BlogSection from "@/components/supplier/BlogSection";

const SupplierHome = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserType | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      setUser(session?.user ?? null);

      // Redirect non-suppliers to regular homepage
      if (session?.user?.user_metadata?.role !== "supplier") {
        setTimeout(() => navigate("/"), 0);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);

      if (!session) {
        navigate("/auth");
      } else if (session.user?.user_metadata?.role !== "supplier") {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (!user || user.user_metadata?.role !== "supplier") {
    return null;
  }

  const stats = [
    { label: "Total Products", value: "0", icon: Package, color: "text-primary" },
    { label: "Total Sales", value: "₹0", icon: TrendingUp, color: "text-green-600" },
    { label: "Active Orders", value: "0", icon: Users, color: "text-blue-600" },
    { label: "Revenue", value: "₹0", icon: BarChart3, color: "text-purple-600" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Welcome back, <span className="gradient-text">{user.user_metadata?.full_name}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Manage your products, track sales, and grow your Ayurvedic business
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="shadow-glow">
                  <Plus className="mr-2 h-5 w-5" />
                  Add New Product
                </Button>
                <Button size="lg" variant="outline">
                  <Settings className="mr-2 h-5 w-5" />
                  Supplier Settings
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </CardTitle>
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="products" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5 lg:w-auto">
                <TabsTrigger value="products" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span className="hidden sm:inline">Products</span>
                </TabsTrigger>
                <TabsTrigger value="manage" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span className="hidden sm:inline">Manage</span>
                </TabsTrigger>
                <TabsTrigger value="reviews" className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  <span className="hidden sm:inline">Reviews</span>
                </TabsTrigger>
                <TabsTrigger value="analytics" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  <span className="hidden sm:inline">Analytics</span>
                </TabsTrigger>
                <TabsTrigger value="blogs" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden sm:inline">Blogs</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="space-y-6">
                <ProductListing />
              </TabsContent>

              <TabsContent value="manage" className="space-y-6">
                <ProductManagement />
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <ProductReviews />
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Analytics</CardTitle>
                    <CardDescription>
                      Track your sales performance and metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {stats.map((stat, index) => (
                        <Card key={index}>
                          <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                              {stat.label}
                            </CardTitle>
                            <stat.icon className={`h-5 w-5 ${stat.color}`} />
                          </CardHeader>
                          <CardContent>
                            <div className="text-3xl font-bold">{stat.value}</div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="blogs" className="space-y-6">
                <BlogSection />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardHeader>
                <CardTitle className="text-2xl">Getting Started as a Supplier</CardTitle>
                <CardDescription className="text-base">
                  Follow these steps to set up your supplier account and start selling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4 flex-shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Complete Your Profile</h4>
                      <p className="text-muted-foreground">
                        Add your business details, certifications, and contact information
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4 flex-shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Add Your Products</h4>
                      <p className="text-muted-foreground">
                        List your authentic Ayurvedic products with detailed descriptions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mr-4 flex-shrink-0">
                      3
                    </span>
                    <div>
                      <h4 className="font-semibold mb-1">Start Selling</h4>
                      <p className="text-muted-foreground">
                        Receive orders and manage your inventory efficiently
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupplierHome;
