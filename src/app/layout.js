import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/NavBar';
import '../index.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Photo Gallery',
  description: 'A simple photo gallery application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TooltipProvider>
          <Toaster />
          <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
              <NavBar />
            </header>
            <main className="flex-grow overflow-auto">
              {children}
            </main>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}