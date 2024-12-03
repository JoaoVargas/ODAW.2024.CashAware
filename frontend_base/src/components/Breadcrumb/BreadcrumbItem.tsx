import { BreadcrumbItemProps } from "@/lib/interfaces/BreadcrumbInterfaces";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import { useNavigate } from "react-router-dom";

export const generateBreadcrumb = (path: string) => {
  const navigate = useNavigate()

  const segments = path.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItemProps[] = [];

  segments.forEach((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`;
    breadcrumbs.push({
      href: index < segments.length - 1 ? href : undefined,
      label: segment.charAt(0).toUpperCase() + segment.slice(1), 
    });
  });

  return breadcrumbs.map((breadcrumb, index) => {
      const isLast = index === breadcrumbs.length - 1;

      return (
        <>
          <BreadcrumbItem>
            {
              isLast
                ? 
                  <BreadcrumbPage>
                    {breadcrumb.label}
                  </BreadcrumbPage>
                : 
                  <BreadcrumbLink 
                  href="/" 
                  className='cursor-pointer' 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(breadcrumb.href as string)
                  }}>
                    {breadcrumb.label}
                  </BreadcrumbLink>
            }
          </BreadcrumbItem>
          {!isLast ? <BreadcrumbSeparator /> : ''}
        </>
      )
    })
};
