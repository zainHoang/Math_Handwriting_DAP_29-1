import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { 
  Home, 
  LayoutDashboard, 
  Wand2, 
  FolderOpen, 
  History, 
  FileText, 
  HelpCircle,
  User,
  Settings,
  LogOut
} from "lucide-react";
import { cn } from "@/app/components/ui/utils";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onNewConvert: () => void;
}

export function Header({ currentPage, onNavigate, onNewConvert }: HeaderProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "convert", label: "Convert", icon: Wand2 },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "history", label: "History", icon: History },
    { id: "templates", label: "Templates", icon: FileText },
    { id: "help", label: "Help", icon: HelpCircle },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-primary">
            <Wand2 className="h-6 w-6" />
            <span className="hidden sm:inline text-lg font-semibold">Math → LaTeX</span>
            <span className="sm:hidden text-lg font-semibold">M→L</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={currentPage === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onNavigate(item.id)}
              className={cn(
                "gap-2",
                currentPage === item.id && "bg-primary text-primary-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Tablet Navigation - Scrollable */}
        <nav className="hidden md:flex lg:hidden items-center gap-1 overflow-x-auto max-w-md">
          {navItems.slice(0, 5).map((item) => (
            <Button
              key={item.id}
              variant={currentPage === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onNavigate(item.id)}
              className={cn(
                "gap-2 whitespace-nowrap",
                currentPage === item.id && "bg-primary text-primary-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <Button 
            onClick={onNewConvert}
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 hidden sm:flex"
          >
            <Wand2 className="h-4 w-4 mr-2" />
            New Convert
          </Button>
          <Button 
            onClick={onNewConvert}
            size="icon"
            className="bg-primary text-primary-foreground hover:bg-primary/90 sm:hidden"
          >
            <Wand2 className="h-4 w-4" />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => onNavigate("projects")}>
                <FolderOpen className="h-4 w-4 mr-2" />
                My Projects
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onNavigate("history")}>
                <History className="h-4 w-4 mr-2" />
                My History
              </DropdownMenuItem>
              <DropdownMenuItem>
                <FileText className="h-4 w-4 mr-2" />
                Saved Snippets
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => onNavigate("settings")}>
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
        <nav className="flex items-center justify-around px-2 py-2">
          {navItems.slice(0, 5).map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex flex-col gap-1 h-auto py-2 px-3",
                currentPage === item.id && "text-primary"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
