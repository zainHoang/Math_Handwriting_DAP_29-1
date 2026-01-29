import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import {
  Search,
  Copy,
  ExternalLink,
  FolderPlus,
  Trash2,
  Calendar
} from "lucide-react";

interface HistoryPageProps {
  onNavigate: (page: string) => void;
}

export function HistoryPage({ onNavigate }: HistoryPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const historyItems = [
    {
      id: 1,
      date: "Today",
      items: [
        {
          id: 101,
          formula: "\\int_0^\\infty e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2}",
          status: "Converted",
          time: "2 hours ago",
          thumbnail: "integral"
        },
        {
          id: 102,
          formula: "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}",
          status: "Edited",
          time: "5 hours ago",
          thumbnail: "sum"
        }
      ]
    },
    {
      id: 2,
      date: "Yesterday",
      items: [
        {
          id: 201,
          formula: "\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}",
          status: "Exported",
          time: "Yesterday at 3:42 PM",
          thumbnail: "quadratic"
        },
        {
          id: 202,
          formula: "\\lim_{x \\to \\infty} \\left(1 + \\frac{1}{x}\\right)^x = e",
          status: "Converted",
          time: "Yesterday at 11:20 AM",
          thumbnail: "limit"
        },
        {
          id: 203,
          formula: "\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}",
          status: "Converted",
          time: "Yesterday at 9:15 AM",
          thumbnail: "maxwell"
        }
      ]
    },
    {
      id: 3,
      date: "January 22, 2026",
      items: [
        {
          id: 301,
          formula: "\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}",
          status: "Exported",
          time: "4:30 PM",
          thumbnail: "matrix"
        },
        {
          id: 302,
          formula: "\\oint_C \\vec{F} \\cdot d\\vec{r}",
          status: "Converted",
          time: "2:15 PM",
          thumbnail: "contour"
        }
      ]
    },
    {
      id: 4,
      date: "January 21, 2026",
      items: [
        {
          id: 401,
          formula: "\\frac{d}{dx}(e^x) = e^x",
          status: "Converted",
          time: "5:45 PM",
          thumbnail: "derivative"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Converted":
        return "bg-success/10 text-success border-success/20";
      case "Edited":
        return "bg-accent/10 text-accent border-accent/20";
      case "Exported":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <div className="container mx-auto px-4 lg:px-6 py-6 lg:py-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold">History</h1>
            <p className="text-sm text-muted-foreground mt-1">
              View all your previous conversions
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search history..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* History Timeline */}
        <div className="space-y-6">
          {historyItems.map((group) => (
            <div key={group.id} className="space-y-3">
              {/* Date Header */}
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {group.date}
              </div>

              {/* Items */}
              <div className="space-y-2">
                {group.items.map((item) => (
                  <Card key={item.id} className="hover:shadow-sm transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        {/* Thumbnail */}
                        <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-muted rounded-lg flex items-center justify-center">
                          <code className="text-xs font-mono text-center px-2">
                            {item.thumbnail}
                          </code>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 space-y-2">
                          <code className="text-sm font-mono block truncate">
                            {item.formula}
                          </code>
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className={getStatusColor(item.status)}>
                              {item.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{item.time}</span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="hidden sm:flex gap-1 flex-shrink-0">
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                            <Copy className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-9 w-9">
                            <FolderPlus className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-9 w-9 text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Mobile Actions */}
                        <div className="sm:hidden flex gap-1 flex-shrink-0">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center pt-4">
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </div>
  );
}
