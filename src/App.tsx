import { useState } from 'react'
import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Vite + React + Tailwind + shadcn/ui
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modern React starter template with Vite, Tailwind CSS, and shadcn/ui components. 
            Fast development, beautiful UI, and excellent developer experience.
          </p>
        </div>

        {/* Counter Demo */}
        <div className="text-center mb-16">
          <div className="bg-card border rounded-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Interactive Counter</h2>
            <div className="text-3xl font-bold mb-6 text-primary">{count}</div>
            <Button 
              onClick={() => setCount((count) => count + 1)}
              size="lg"
              className="mb-4"
            >
              Increment Count
            </Button>
            <div className="flex gap-2 justify-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setCount(0)}
              >
                Reset
              </Button>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => setCount((count) => count - 1)}
              >
                Decrement
              </Button>
            </div>
          </div>
        </div>

        {/* Button Variants Demo */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Button Component Showcase</h2>
          
          {/* Button Variants */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          {/* Button Sizes */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Sizes</h3>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🚀</Button>
            </div>
          </div>

          {/* Interactive Examples */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Interactive Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card border rounded-lg p-6">
                <h4 className="font-medium mb-3">Loading State</h4>
                <Button disabled className="w-full">
                  Loading...
                </Button>
              </div>
              <div className="bg-card border rounded-lg p-6">
                <h4 className="font-medium mb-3">With Icon</h4>
                <Button className="w-full">
                  ⚡ Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t">
          <p className="text-muted-foreground">
            Edit <code className="bg-muted px-2 py-1 rounded text-sm">src/App.tsx</code> and save to test HMR
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
                Vite Docs
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                shadcn/ui Docs
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
                Tailwind Docs
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
