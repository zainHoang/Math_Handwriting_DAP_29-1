import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Upload, ScanSearch, Code, Download, CheckCircle, Shield, Zap } from "lucide-react";

interface HomePageProps {
  onNavigate: (page: string) => void;
  onNewConvert: () => void;
}

export function HomePage({ onNavigate, onNewConvert }: HomePageProps) {
  const steps = [
    {
      icon: Upload,
      title: "Upload or capture image",
      description: "Drag & drop or select an image with handwritten math"
    },
    {
      icon: ScanSearch,
      title: "Detect math regions",
      description: "Automatic detection of formulas in your image"
    },
    {
      icon: Code,
      title: "Convert to LaTeX",
      description: "AI-powered conversion with high accuracy"
    },
    {
      icon: Download,
      title: "Edit & export",
      description: "Fine-tune and export in multiple formats"
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "High Accuracy",
      description: "Advanced AI models trained on thousands of mathematical notations"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get LaTeX code in seconds, not minutes"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your images are processed securely and deleted after conversion"
    }
  ];

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Convert handwritten math into LaTeX instantly
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload an image, get clean LaTeX, edit and export in seconds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={onNewConvert}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Upload className="mr-2 h-5 w-5" />
              Upload Image
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate("convert")}
            >
              Try Demo
            </Button>
          </div>

          {/* Visual Comparison */}
          <div className="pt-8 lg:pt-12">
            <Card className="overflow-hidden">
              <CardContent className="p-6 lg:p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-muted-foreground">Before</div>
                    <div className="bg-muted rounded-lg p-6 lg:p-8 flex items-center justify-center min-h-[200px]">
                      <div className="text-4xl lg:text-5xl font-serif italic">
                        ∫₀^∞ e⁻ˣ² dx
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">Handwritten formula</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-muted-foreground">After</div>
                    <div className="bg-muted rounded-lg p-6 lg:p-8 flex items-center justify-center min-h-[200px]">
                      <code className="font-mono text-sm lg:text-base text-foreground">
                        \int_0^\infty e^{"{-x^2}"} \, dx
                      </code>
                    </div>
                    <p className="text-xs text-muted-foreground">Clean LaTeX code</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-card py-12 lg:py-16 border-y border-border">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8 lg:mb-12">
              How It Works
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="flex items-center justify-center">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">Step {index + 1}</div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8 lg:mb-12">
            Why Choose Math → LaTeX
          </h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-6 space-y-3">
                  <div className="bg-accent/10 p-3 rounded-lg w-fit">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card py-12 lg:py-16 border-t border-border">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-center">
              Supported Symbols & Accuracy
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <h4 className="font-medium">Supported Math Notation</h4>
                  <p className="text-sm text-muted-foreground">
                    Our system supports Greek letters, operators, integrals, summations, 
                    fractions, matrices, subscripts, superscripts, and complex equations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <h4 className="font-medium">Accuracy Notes</h4>
                  <p className="text-sm text-muted-foreground">
                    Conversion accuracy depends on image quality and handwriting clarity. 
                    Our AI achieves 95%+ accuracy on clear images.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <h4 className="font-medium">Privacy Statement</h4>
                  <p className="text-sm text-muted-foreground">
                    Images are processed securely and automatically deleted after conversion. 
                    We never store your mathematical content without permission.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl font-semibold">
            Ready to convert your handwritten math?
          </h2>
          <Button 
            size="lg" 
            onClick={onNewConvert}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}
