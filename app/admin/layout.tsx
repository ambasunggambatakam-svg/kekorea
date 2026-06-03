import Link from "next/link";
import { LayoutDashboard, FileText, MessageSquare, HelpCircle, Users, Settings } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Blog & Artikel", href: "/admin/blog", icon: FileText },
    { label: "Testimoni", href: "/admin/testimonials", icon: MessageSquare },
    { label: "FAQ Manager", href: "/admin/faqs", icon: HelpCircle },
    { label: "Leads & Kontak", href: "/admin/leads", icon: Users },
    { label: "Pengaturan & SEO", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600">Epstopik CMS</h2>
          <p className="text-sm text-gray-500 mt-1">Landing Page Manager</p>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <Link
            href="/"
            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Kembali ke Web
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="md:hidden font-bold text-lg text-blue-600">Epstopik CMS</div>
          <div className="flex-1" />
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="font-medium text-gray-700 hidden sm:block">Super Admin</span>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
