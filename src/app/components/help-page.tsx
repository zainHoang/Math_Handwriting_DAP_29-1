import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Search, BookOpen, MessageCircle, Mail, FileText } from "lucide-react";

export function HelpPage() {
  const faqs = [
    {
      question: "How accurate is the handwriting recognition?",
      answer: "Our AI achieves 95%+ accuracy on clear, well-written mathematical notation. Accuracy depends on image quality, handwriting clarity, and lighting conditions. For best results, use high-resolution images with good contrast."
    },
    {
      question: "What mathematical symbols are supported?",
      answer: "We support a comprehensive range of mathematical notation including: Greek letters (α, β, γ, etc.), operators (+, -, ×, ÷), calculus symbols (∫, ∂, ∇, ∑), comparison operators (≤, ≥, ≠), set theory symbols (∈, ∪, ∩), and much more. Complex structures like matrices, fractions, and nested equations are also fully supported."
    },
    {
      question: "Can I upload multiple images at once?",
      answer: "Yes! You can batch upload multiple images in a project. Each image will be processed individually, and you can review and edit all conversions in one place."
    },
    {
      question: "What image formats are supported?",
      answer: "We support JPG, PNG, HEIC, and WebP formats. For best results, we recommend PNG or JPG with a resolution of at least 1200x800 pixels."
    },
    {
      question: "How do I improve conversion accuracy?",
      answer: "To improve accuracy: 1) Ensure good lighting when capturing images, 2) Use a plain background, 3) Write clearly with consistent spacing, 4) Avoid shadows or glare, 5) Capture the entire formula in frame, and 6) Use high-resolution images."
    },
    {
      question: "Can I export to formats other than LaTeX?",
      answer: "Currently, we support LaTeX (.tex), PNG, and SVG exports. You can also copy the LaTeX code to clipboard and use it in any LaTeX-compatible editor or document processor."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes, we take privacy seriously. Uploaded images are processed securely and can be automatically deleted after a time period you specify (1 hour to 7 days). We never share your content with third parties without explicit consent."
    },
    {
      question: "How does the Math Assistant chatbot work?",
      answer: "The Math Assistant uses AI to help explain formulas, suggest LaTeX corrections, and answer questions about mathematical notation. It has context awareness of your current formula and can provide targeted help."
    },
    {
      question: "Can I use this offline?",
      answer: "Currently, Math → LaTeX requires an internet connection for AI-powered conversion. We're working on an offline mode for future releases."
    },
    {
      question: "What's the difference between projects and history?",
      answer: "History shows all your individual conversions in chronological order. Projects allow you to organize related conversions together (e.g., all homework problems from a single assignment) with batch operations and progress tracking."
    }
  ];

  const quickLinks = [
    {
      title: "Getting Started Guide",
      description: "Learn the basics of converting handwritten math to LaTeX",
      icon: BookOpen
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      icon: FileText
    },
    {
      title: "Community Forum",
      description: "Connect with other users and share tips",
      icon: MessageCircle
    },
    {
      title: "Contact Support",
      description: "Get help from our support team",
      icon: Mail
    }
  ];

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <div className="container mx-auto px-4 lg:px-6 py-6 lg:py-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-2xl lg:text-3xl font-semibold">Help Center</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions and learn how to get the most out of Math → LaTeX
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto pt-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search help articles..."
              className="pl-9"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {quickLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center space-y-3">
                <div className="flex justify-center">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <link.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">{link.title}</h4>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Still Need Help */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8 text-center space-y-4">
              <h3 className="text-xl font-semibold">Still need help?</h3>
              <p className="text-sm text-muted-foreground">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button className="bg-primary text-primary-foreground">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
