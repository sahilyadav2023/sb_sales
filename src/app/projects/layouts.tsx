import { Metadata } from 'next';

// This file is a Server Component and can safely export metadata
export const metadata: Metadata = {
  title: "Projects — SteelCraft Fabricators",
};

// This is a minimal layout component required for the page.tsx to render
export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}