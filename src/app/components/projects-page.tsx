import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Input } from "@/app/components/ui/input";
import {
  FolderPlus,
  Search,
  MoreVertical,
  Clock,
  FileCheck,
  Folder,
  Trash2,
  Edit
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";

interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}

export function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: 1,
      name: "Calculus Homework",
      tags: ["Integration", "Derivatives"],
      lastEdited: "1 hour ago",
      items: 12,
      converted: 9,
      verified: 7,
      progress: 75,
      color: "bg-chart-1"
    },
    {
      id: 2,
      name: "Linear Algebra Notes",
      tags: ["Matrices", "Vectors"],
      lastEdited: "3 hours ago",
      items: 8,
      converted: 4,
      verified: 2,
      progress: 50,
      color: "bg-chart-2"
    },
    {
      id: 3,
      name: "Physics Formulas",
      tags: ["Mechanics", "Thermodynamics"],
      lastEdited: "Yesterday",
      items: 20,
      converted: 18,
      verified: 16,
      progress: 90,
      color: "bg-chart-3"
    },
    {
      id: 4,
      name: "Differential Equations",
      tags: ["ODEs", "PDEs"],
      lastEdited: "2 days ago",
      items: 15,
      converted: 6,
      verified: 3,
      progress: 40,
      color: "bg-chart-4"
    },
    {
      id: 5,
      name: "Statistics Problems",
      tags: ["Probability", "Distributions"],
      lastEdited: "1 week ago",
      items: 10,
      converted: 10,
      verified: 10,
      progress: 100,
      color: "bg-chart-5"
    },
    {
      id: 6,
      name: "Complex Analysis",
      tags: ["Contour Integration", "Residues"],
      lastEdited: "2 weeks ago",
      items: 7,
      converted: 2,
      verified: 1,
      progress: 28,
      color: "bg-primary"
    }
  ];

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <div className="container mx-auto px-4 lg:px-6 py-6 lg:py-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-semibold">Projects</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Organize your conversions into projects
            </p>
          </div>
          <Button className="bg-primary text-primary-foreground">
            <FolderPlus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${project.color}/10`}>
                      <Folder className={`h-5 w-5 ${project.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-base">{project.name}</CardTitle>
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Rename
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="space-y-1">
                    <p className="text-2xl font-semibold">{project.items}</p>
                    <p className="text-xs text-muted-foreground">Items</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-semibold">{project.converted}</p>
                    <p className="text-xs text-muted-foreground">Converted</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-semibold">{project.verified}</p>
                    <p className="text-xs text-muted-foreground">Verified</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`${project.color} rounded-full h-2 transition-all`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {project.lastEdited}
                  </div>
                  <Button size="sm" variant="outline">
                    Open
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State (if no projects) */}
        {projects.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-muted p-4 rounded-full">
                  <Folder className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium">No projects yet</h3>
                <p className="text-sm text-muted-foreground">
                  Create your first project to organize your conversions
                </p>
              </div>
              <Button>
                <FolderPlus className="h-4 w-4 mr-2" />
                Create Project
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
