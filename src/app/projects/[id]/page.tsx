import { projectsData } from "../../../data/projects";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Project not found</h1>
        <Link href="/#projects" className="text-cyan-400 hover:underline">
          Return to Projects
        </Link>
      </div>
    );
  }

  const { fullDescription } = project;

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link href="/#projects" className="inline-flex items-center text-sm font-semibold text-zinc-400 hover:text-white transition-colors duration-200">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase mb-3 block">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            {project.title}
          </h1>
          <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Full Description (STAR Method) */}
        {fullDescription && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {Object.entries(fullDescription).map(([key, value]) => (
              <div key={key} className="glass-panel p-8 rounded-3xl relative overflow-hidden border border-white/5 bg-zinc-900/40">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px]"></div>
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-500 mr-3" />
                  <h3 className="text-xl font-bold text-white capitalize">{key}</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Power BI Dashboard Container */}
        {project.powerBiLink && (
          <div className="relative w-full h-[80vh] min-h-[600px] rounded-3xl overflow-hidden glass-panel border border-white/10 shadow-2xl shadow-cyan-900/20">
            {/* Header for Dashboard */}
            <div className="absolute top-0 left-0 w-full h-12 bg-zinc-900/80 backdrop-blur-md border-b border-white/5 flex items-center px-6 z-10">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="ml-4 text-xs font-semibold text-zinc-400 tracking-wider">Live Power BI Dashboard</span>
            </div>
            
            <iframe
              title={project.title}
              width="100%"
              height="100%"
              src={project.powerBiLink}
              frameBorder="0"
              allowFullScreen={true}
              className="absolute inset-0 pt-12"
            ></iframe>
          </div>
        )}
      </div>
    </main>
  );
}
