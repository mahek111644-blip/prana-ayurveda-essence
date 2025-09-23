import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  Edit, 
  Save, 
  LogOut,
  BookOpen,
  Heart,
  Settings,
  Bell
} from "lucide-react";

interface UserProfileProps {
  onLogout: () => void;
}

const UserProfile = ({ onLogout }: UserProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Amit Patel",
    email: "amit.patel@example.com",
    phone: "+91 98765 43210",
    dateOfBirth: "1985-06-15",
    location: "Mumbai, Maharashtra",
    joinDate: "January 2024",
    constitution: "Vata-Pitta"
  });

  const favoriteArticles = [
    {
      id: 1,
      title: "The Science Behind Ayurvedic Doshas",
      readDate: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "Turmeric: The Golden Spice of Ayurveda",
      readDate: "Dec 12, 2024"
    },
    {
      id: 3,
      title: "Daily Meditation Practices for Modern Life",
      readDate: "Dec 8, 2024"
    }
  ];

  const consultationHistory = [
    {
      id: 1,
      doctor: "Dr. Priya Sharma",
      date: "Dec 10, 2024",
      type: "Constitutional Assessment",
      status: "Completed"
    },
    {
      id: 2,
      doctor: "Dr. Rajesh Kumar",
      date: "Nov 28, 2024",
      type: "Herbal Consultation",
      status: "Completed"
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-heading font-bold text-foreground">
            My Profile
          </h1>
          <Button
            onClick={onLogout}
            variant="outline"
            className="border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 glass border-accent/20">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="consultations">Consultations</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="glass border-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Personal Information
                </h2>
                <Button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  variant={isEditing ? "default" : "outline"}
                  className={isEditing ? "btn-glow" : "border-accent/30"}
                >
                  {isEditing ? (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </>
                  )}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{userInfo.name}</h3>
                    <p className="text-muted-foreground">Member since {userInfo.joinDate}</p>
                    <Badge className="mt-2 bg-accent/90 text-accent-foreground">
                      Constitution: {userInfo.constitution}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Full Name
                      </label>
                      {isEditing ? (
                        <Input
                          value={userInfo.name}
                          onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                          className="glass border-accent/30 focus:border-primary"
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/20">
                          <User className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{userInfo.name}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Email Address
                      </label>
                      {isEditing ? (
                        <Input
                          type="email"
                          value={userInfo.email}
                          onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                          className="glass border-accent/30 focus:border-primary"
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/20">
                          <Mail className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{userInfo.email}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Phone Number
                      </label>
                      {isEditing ? (
                        <Input
                          value={userInfo.phone}
                          onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                          className="glass border-accent/30 focus:border-primary"
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/20">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{userInfo.phone}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Date of Birth
                      </label>
                      {isEditing ? (
                        <Input
                          type="date"
                          value={userInfo.dateOfBirth}
                          onChange={(e) => setUserInfo({...userInfo, dateOfBirth: e.target.value})}
                          className="glass border-accent/30 focus:border-primary"
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/20">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{userInfo.dateOfBirth}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">
                        Location
                      </label>
                      {isEditing ? (
                        <Input
                          value={userInfo.location}
                          onChange={(e) => setUserInfo({...userInfo, location: e.target.value})}
                          className="glass border-accent/30 focus:border-primary"
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-3 rounded-lg bg-secondary/20">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-foreground">{userInfo.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Articles Tab */}
          <TabsContent value="articles">
            <Card className="glass border-accent/20">
              <CardHeader>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Favorite Articles
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {favoriteArticles.map((article) => (
                    <div
                      key={article.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-accent/20 hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Heart className="w-5 h-5 text-destructive fill-destructive" />
                        <div>
                          <h3 className="font-semibold text-foreground">{article.title}</h3>
                          <p className="text-sm text-muted-foreground">Read on {article.readDate}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <BookOpen className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Consultations Tab */}
          <TabsContent value="consultations">
            <Card className="glass border-accent/20">
              <CardHeader>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Consultation History
                </h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {consultationHistory.map((consultation) => (
                    <div
                      key={consultation.id}
                      className="p-4 rounded-lg border border-accent/20"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{consultation.doctor}</h3>
                        <Badge 
                          variant={consultation.status === "Completed" ? "default" : "secondary"}
                          className="bg-primary/90 text-primary-foreground"
                        >
                          {consultation.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{consultation.type}</p>
                      <p className="text-sm text-muted-foreground">{consultation.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <Card className="glass border-accent/20">
              <CardHeader>
                <h2 className="text-2xl font-heading font-semibold text-foreground">
                  Account Settings
                </h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-3">
                      <Bell className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email Notifications</h3>
                        <p className="text-sm text-muted-foreground">Receive updates about articles and consultations</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-accent/30">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">Privacy Settings</h3>
                        <p className="text-sm text-muted-foreground">Manage your privacy preferences</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-accent/30">
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="pt-6 border-t border-accent/20">
                  <Button
                    onClick={onLogout}
                    variant="outline"
                    className="w-full border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout from Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfile;