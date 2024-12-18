import { Link, Outlet, useLocation, useParams } from 'react-router-dom'

import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider, 
  SidebarTrigger 
} from '@/components/ui/sidebar'
import {
  Breadcrumb,
  BreadcrumbList
} from "@/components/ui/breadcrumb"
import { generateBreadcrumb } from '@/components/Breadcrumb/BreadcrumbItem'
import { ChevronUpIcon, Home, Settings, User2Icon, TagIcon } from "lucide-react"

import Logo from '@/assets/images/logo.png'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useAuth } from '@/lib/useAuth'

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Tags",
    url: "/dashboard/tags",
    icon: TagIcon,
  },
  {
    title: "Configurações",
    url: "/dashboard/configuracoes",
    icon: Settings,
  },
]

export default function DashboardLayout() {
  let location = useLocation()
  const {user, logout} = useAuth()
  console.log(location);
  

  return (
    <>
      <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <img src={Logo} alt="CashAware Logo" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                    className={item.url === location.pathname 
                    ? 'text-primary hover:text-chart1  hover:bg-foreground/5 active:text-primary' 
                    : 'hover:text-chart1 hover:bg-foreground/5'} 
                    size='lg' 
                    asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton size='lg'>
                    <User2Icon /> {user?.username}
                    <ChevronUpIcon className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem onClick={() => logout()}>
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
        <div className='flex flex-col w-full'>
          <div className='flex flex-row w-full items-center gap-5 py-3 px-2 bg-muted border-b sticky top-0'>
            <SidebarTrigger className='hover:text-chart1' />
            <Breadcrumb>
              <BreadcrumbList>
                {generateBreadcrumb(location.pathname)}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className='container mx-auto p-4 h-full'>
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
    </>
  )
}
