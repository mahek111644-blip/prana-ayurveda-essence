import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthForm from "@/components/AuthForm";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/");
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="relative">
      <div className="absolute top-8 left-8 z-50">
        <Link to="/">
          <Button variant="ghost" className="group shadow-lg bg-background/80 backdrop-blur-sm">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>
      </div>
      <AuthForm />
    </div>
  );
};

export default Auth;