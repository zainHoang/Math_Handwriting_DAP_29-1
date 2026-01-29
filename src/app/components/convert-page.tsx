import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Textarea } from "@/app/components/ui/textarea";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/app/components/ui/sheet";
import {
  Upload,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Crop,
  SunDim,
  Copy,
  Download,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Send,
  Menu
} from "lucide-react";
import { Input } from "@/app/components/ui/input";

export function ConvertPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [latexCode, setLatexCode] = useState("\\int_0^\\infty e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2}");
  const [chatOpen, setChatOpen] = useState(false);
  const [leftPanelOpen, setLeftPanelOpen] = useState(false);

  const mockImages = [
    { id: 1, name: "equation1.jpg" },
    { id: 2, name: "formula2.jpg" },
    { id: 3, name: "integral3.jpg" }
  ];

  const suggestedPrompts = [
    "Explain this formula",
    "Fix LaTeX errors",
    "What does this symbol mean?",
    "Convert to align environment"
  ];

  const handleCopyLatex = () => {
    navigator.clipboard.writeText(latexCode);
    // Toast notification would go here
  };

  return (
    <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] pb-16 md:pb-0 flex flex-col lg:flex-row overflow-hidden">
      {/* Left Panel - Image Upload & Viewer (Desktop) */}
      <div className="hidden lg:block w-80 xl:w-96 border-r border-border bg-card">
        <ImagePanel 
          mockImages={mockImages}
          selectedImage={selectedImage}
          onImageSelect={setSelectedImage}
        />
      </div>

      {/* Left Panel - Mobile Drawer */}
      <Sheet open={leftPanelOpen} onOpenChange={setLeftPanelOpen}>
        <SheetTrigger asChild>
          <Button 
            variant="outline" 
            size="icon" 
            className="lg:hidden fixed top-20 left-4 z-40 shadow-lg"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 p-0">
          <ImagePanel 
            mockImages={mockImages}
            selectedImage={selectedImage}
            onImageSelect={(id) => {
              setSelectedImage(id);
              setLeftPanelOpen(false);
            }}
            isMobile
          />
        </SheetContent>
      </Sheet>

      {/* Center Panel - LaTeX Editor */}
      <div className="flex-1 flex flex-col min-w-0">
        <Card className="flex-1 rounded-none border-0 border-b lg:border-r flex flex-col">
          <CardHeader className="border-b border-border">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">LaTeX Editor</CardTitle>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" onClick={handleCopyLatex}>
                  <Copy className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Copy</span>
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
                <Button size="sm" className="bg-accent text-accent-foreground">
                  <FileText className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Export</span>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0 flex flex-col">
            <Tabs defaultValue="code" className="flex-1 flex flex-col">
              <TabsList className="w-full justify-start rounded-none border-b border-border bg-muted/50 px-4">
                <TabsTrigger value="code">LaTeX Code</TabsTrigger>
                <TabsTrigger value="preview">Rendered Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="code" className="flex-1 m-0 p-4">
                <div className="space-y-4 h-full flex flex-col">
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      No errors
                    </Badge>
                    <span className="text-muted-foreground">Auto-saved</span>
                  </div>
                  <Textarea
                    value={latexCode}
                    onChange={(e) => setLatexCode(e.target.value)}
                    className="flex-1 font-mono text-sm resize-none"
                    placeholder="LaTeX code will appear here..."
                  />
                </div>
              </TabsContent>
              <TabsContent value="preview" className="flex-1 m-0 p-4">
                <div className="h-full flex items-center justify-center bg-muted/30 rounded-lg">
                  <div className="text-center space-y-4">
                    <div className="text-4xl font-serif">
                      ∫₀^∞ e⁻ˣ² dx = √π/2
                    </div>
                    <p className="text-sm text-muted-foreground">Rendered formula preview</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel - Chatbot (Desktop) */}
      <div className="hidden xl:block w-80 border-l border-border bg-card">
        <ChatPanel suggestedPrompts={suggestedPrompts} />
      </div>

      {/* Floating Chat Button (Mobile & Tablet) */}
      <Sheet open={chatOpen} onOpenChange={setChatOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="xl:hidden fixed bottom-20 md:bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-lg bg-accent text-accent-foreground"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:w-96 p-0">
          <ChatPanel suggestedPrompts={suggestedPrompts} isMobile />
        </SheetContent>
      </Sheet>
    </div>
  );
}

// Image Panel Component
interface ImagePanelProps {
  mockImages: { id: number; name: string }[];
  selectedImage: string | null;
  onImageSelect: (id: string | null) => void;
  isMobile?: boolean;
}

function ImagePanel({ mockImages, selectedImage, onImageSelect, isMobile }: ImagePanelProps) {
  return (
    <div className="h-full flex flex-col">
      {isMobile && (
        <SheetHeader className="p-4 border-b border-border">
          <SheetTitle>Image Upload</SheetTitle>
        </SheetHeader>
      )}
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {/* Upload Box */}
          <div className="border-2 border-dashed border-border rounded-lg p-6 text-center space-y-3 hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex justify-center">
              <Upload className="h-8 w-8 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">Drag & drop image here</p>
              <p className="text-xs text-muted-foreground mt-1">or click to browse</p>
            </div>
            <Input type="file" className="hidden" accept="image/*" />
          </div>

          {/* Image List */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Uploaded Images</h4>
            <div className="space-y-2">
              {mockImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() => onImageSelect(img.id.toString())}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedImage === img.id.toString()
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-muted rounded flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{img.name}</p>
                      <p className="text-xs text-muted-foreground">2.4 MB</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Viewer Tools */}
          {selectedImage && (
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">Image Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    <ZoomIn className="h-4 w-4 mr-2" />
                    Zoom In
                  </Button>
                  <Button variant="outline" size="sm">
                    <ZoomOut className="h-4 w-4 mr-2" />
                    Zoom Out
                  </Button>
                  <Button variant="outline" size="sm">
                    <RotateCw className="h-4 w-4 mr-2" />
                    Rotate
                  </Button>
                  <Button variant="outline" size="sm">
                    <Crop className="h-4 w-4 mr-2" />
                    Crop
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <SunDim className="h-4 w-4 mr-2" />
                  Adjust Brightness
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

// Chat Panel Component
interface ChatPanelProps {
  suggestedPrompts: string[];
  isMobile?: boolean;
}

function ChatPanel({ suggestedPrompts, isMobile }: ChatPanelProps) {
  const mockMessages = [
    {
      role: "assistant",
      content: "Hi! I'm your Math Assistant. I can help explain formulas, fix LaTeX errors, or answer questions about mathematical notation."
    },
    {
      role: "user",
      content: "What does this integral represent?"
    },
    {
      role: "assistant",
      content: "This is a Gaussian integral. It represents the area under the bell curve from 0 to infinity. The result √π/2 is a fundamental constant in probability theory."
    }
  ];

  return (
    <div className="h-full flex flex-col">
      {isMobile && (
        <SheetHeader className="p-4 border-b border-border">
          <SheetTitle>Math Assistant</SheetTitle>
        </SheetHeader>
      )}
      {!isMobile && (
        <div className="p-4 border-b border-border">
          <h3 className="font-medium">Math Assistant</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Ask questions about your formulas
          </p>
        </div>
      )}

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {mockMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg p-3 ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Suggested Prompts */}
      <div className="p-4 border-t border-border space-y-3">
        <p className="text-xs text-muted-foreground">Suggested prompts:</p>
        <div className="flex flex-wrap gap-2">
          {suggestedPrompts.map((prompt, idx) => (
            <Button key={idx} variant="outline" size="sm" className="text-xs h-auto py-1.5">
              {prompt}
            </Button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input placeholder="Ask a question..." className="flex-1" />
          <Button size="icon" className="bg-accent text-accent-foreground flex-shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
