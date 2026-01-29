import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import {
  Search,
  Plus,
  Copy,
  Star,
  Code
} from "lucide-react";

interface TemplatesPageProps {
  onNavigate: (page: string) => void;
}

export function TemplatesPage({ onNavigate }: TemplatesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const libraryTemplates = [
    {
      id: 1,
      name: "Fraction",
      category: "Basic",
      latex: "\\frac{numerator}{denominator}",
      preview: "a/b",
      description: "Basic fraction notation"
    },
    {
      id: 2,
      name: "Integral",
      category: "Calculus",
      latex: "\\int_{lower}^{upper} f(x) \\, dx",
      preview: "∫ f(x) dx",
      description: "Definite integral"
    },
    {
      id: 3,
      name: "Summation",
      category: "Series",
      latex: "\\sum_{n=1}^{\\infty} a_n",
      preview: "Σ aₙ",
      description: "Infinite series summation"
    },
    {
      id: 4,
      name: "Matrix 2x2",
      category: "Linear Algebra",
      latex: "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}",
      preview: "[a b; c d]",
      description: "2x2 matrix notation"
    },
    {
      id: 5,
      name: "Matrix 3x3",
      category: "Linear Algebra",
      latex: "\\begin{pmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{pmatrix}",
      preview: "3×3 matrix",
      description: "3x3 matrix notation"
    },
    {
      id: 6,
      name: "Limit",
      category: "Calculus",
      latex: "\\lim_{x \\to a} f(x)",
      preview: "lim f(x)",
      description: "Limit notation"
    },
    {
      id: 7,
      name: "Derivative",
      category: "Calculus",
      latex: "\\frac{d}{dx} f(x)",
      preview: "d/dx f(x)",
      description: "First derivative"
    },
    {
      id: 8,
      name: "Partial Derivative",
      category: "Calculus",
      latex: "\\frac{\\partial f}{\\partial x}",
      preview: "∂f/∂x",
      description: "Partial derivative"
    },
    {
      id: 9,
      name: "Aligned Equations",
      category: "Multi-line",
      latex: "\\begin{align}\ny &= mx + b \\\\\nx &= \\frac{y - b}{m}\n\\end{align}",
      preview: "align env",
      description: "Multiple aligned equations"
    },
    {
      id: 10,
      name: "Cases",
      category: "Multi-line",
      latex: "f(x) = \\begin{cases}\n  x^2 & \\text{if } x \\geq 0 \\\\\n  -x^2 & \\text{if } x < 0\n\\end{cases}",
      preview: "piecewise",
      description: "Piecewise function"
    },
    {
      id: 11,
      name: "Square Root",
      category: "Basic",
      latex: "\\sqrt{x}",
      preview: "√x",
      description: "Square root"
    },
    {
      id: 12,
      name: "Nth Root",
      category: "Basic",
      latex: "\\sqrt[n]{x}",
      preview: "ⁿ√x",
      description: "Nth root"
    }
  ];

  const savedSnippets = [
    {
      id: 1,
      name: "My Quadratic Formula",
      latex: "x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}",
      preview: "quadratic",
      createdAt: "2 days ago"
    },
    {
      id: 2,
      name: "Euler's Identity",
      latex: "e^{i\\pi} + 1 = 0",
      preview: "euler",
      createdAt: "1 week ago"
    },
    {
      id: 3,
      name: "Pythagorean Theorem",
      latex: "a^2 + b^2 = c^2",
      preview: "pythagoras",
      createdAt: "2 weeks ago"
    }
  ];

  const categories = ["All", "Basic", "Calculus", "Linear Algebra", "Series", "Multi-line"];

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <div className="container mx-auto px-4 lg:px-6 py-6 lg:py-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold">Templates & Snippets</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Quick access to common math notation
            </p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="library" className="space-y-6">
          <TabsList>
            <TabsTrigger value="library">Template Library</TabsTrigger>
            <TabsTrigger value="saved">Saved Snippets</TabsTrigger>
          </TabsList>

          {/* Template Library */}
          <TabsContent value="library" className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
                {categories.map((category) => (
                  <Button key={category} variant="outline" size="sm" className="whitespace-nowrap">
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Templates Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {libraryTemplates.map((template) => (
                <Card key={template.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-base">{template.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {template.category}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {/* Preview */}
                    <div className="bg-muted rounded-lg p-4 text-center min-h-[80px] flex items-center justify-center">
                      <div className="text-2xl font-serif">{template.preview}</div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground">{template.description}</p>

                    {/* LaTeX Code */}
                    <div className="bg-muted/50 rounded p-2">
                      <code className="text-xs font-mono block truncate">
                        {template.latex}
                      </code>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-primary text-primary-foreground">
                        <Plus className="h-4 w-4 mr-2" />
                        Insert
                      </Button>
                      <Button variant="outline" size="icon" className="h-9 w-9">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Saved Snippets */}
          <TabsContent value="saved" className="space-y-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search saved snippets..."
                className="pl-9"
              />
            </div>

            {/* Snippets List */}
            <div className="space-y-3">
              {savedSnippets.map((snippet) => (
                <Card key={snippet.id} className="hover:shadow-sm transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <Code className="h-5 w-5 text-muted-foreground" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium truncate">{snippet.name}</h4>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                            {snippet.createdAt}
                          </span>
                        </div>
                        <code className="text-sm font-mono block truncate text-muted-foreground">
                          {snippet.latex}
                        </code>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-1 flex-shrink-0">
                        <Button variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Insert
                        </Button>
                        <Button variant="ghost" size="icon" className="h-9 w-9">
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {savedSnippets.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="bg-muted p-4 rounded-full">
                      <Star className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">No saved snippets yet</h3>
                    <p className="text-sm text-muted-foreground">
                      Save your frequently used formulas for quick access
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
