import { Suspense } from "react";
import ProjectList from "./components/project-list";
import ProjectListLoading from "./components/project-list-loading";
import { ErrorBoundary } from "react-error-boundary";
import H1 from "@/components/h1";

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  return (
<div>
  <H1>Projects</H1>
  <div className="mb-8">Hello, this is a list of my projects.</div>
  <ErrorBoundary fallback={<div>Cannot fetch projects currently</div>}>
<Suspense fallback={<ProjectListLoading />}>
<ProjectList />
</Suspense>
</ErrorBoundary>
</div>
  );
}