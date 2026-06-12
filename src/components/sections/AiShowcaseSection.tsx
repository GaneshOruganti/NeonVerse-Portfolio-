'use client';

import { useState } from 'react';
import { Section, SectionTitle, SectionSubtitle } from '@/components/shared/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Bot, Loader } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"
import { generatePersonalizedRecommendations } from '@/ai/flows/personalized-recommendation-showcase';

const AiShowcaseSection = () => {
  const [userProfile, setUserProfile] = useState("A tech enthusiast who loves sci-fi movies and recently bought a high-end mechanical keyboard.");
  const [productCatalog, setProductCatalog] = useState("1. Ergonomic Mouse, 2. 4K Monitor, 3. Star Wars poster, 4. VR Headset, 5. Standing Desk");
  const [recommendations, setRecommendations] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setRecommendations('');

    try {
      const result = await generatePersonalizedRecommendations({ userProfile, productCatalog });
      setRecommendations(result.recommendations);
    } catch (error) {
      console.error('AI Recommendation Error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate recommendations. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="ai-showcase">
      <SectionTitle>AI Showcase</SectionTitle>
      <SectionSubtitle>
        Explore a practical application of Large Language Models. This demo showcases a personalized product recommendation system powered by Genkit.
      </SectionSubtitle>
      <Card className="glassmorphism max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="text-accent" />
            Personalized Recommendation Generator
          </CardTitle>
          <CardDescription>
            Enter user details and a product list to see AI-powered suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="user-profile">User Profile</Label>
              <Textarea
                id="user-profile"
                placeholder="e.g., A fitness enthusiast who loves running..."
                value={userProfile}
                onChange={(e) => setUserProfile(e.target.value)}
                className="bg-card/50"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="product-catalog">Product Catalog</Label>
              <Textarea
                id="product-catalog"
                placeholder="e.g., 1. Running shoes, 2. Smartwatch..."
                value={productCatalog}
                onChange={(e) => setProductCatalog(e.target.value)}
                className="bg-card/50"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
              {isLoading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                'Get Recommendations'
              )}
            </Button>
          </form>

          {recommendations && (
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2 text-accent">AI Recommendations:</h3>
              <div className="p-4 rounded-md bg-card/50 border border-border">
                <p className="whitespace-pre-wrap text-muted-foreground">{recommendations}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Section>
  );
};

export default AiShowcaseSection;
