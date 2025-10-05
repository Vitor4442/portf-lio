import { Description } from "@radix-ui/react-toast"
import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
     id: 1,
     title: "Cashbook data analysis with Power BI",
     Description:"Top 5 UFs, ranking de clientes, total/ticket médio e ritmo diário, com filtros e drill-down.",
     image: "/projects/PROJECT-1.jfif",
     tags: ["Power bi", "Dax", "Power Querry"],
     demoURL: "#",
     githubUrl: "#"
    },

    {
     id: 2,
     title: "sales website",
     Description:"Made on the Wbuy platform",
     image: "/projects/PROJECT-2.png",
     tags: ["Wbuy", "Web Desing"],
     demoURL: "https://www.jvfpecasagricolas.com.br/",
     githubUrl: "#"
    },
    
    {
     id: 3,
     title: "website for climate monitoring",
     Description:"Website for climate monitoring of weather stations via API",
     image: "/projects/PROJECT-3.png",
     tags: ["javaScrpt", "chart.js", "HTML/CSS", "firebase", "APIs Restfull"],
     demoURL: "https://projeto-cnpq-34b1f.web.app/",
     githubUrl: "#"
    }
]
export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4l font-bold mb-4 text-center"> 
            Featured <span className="text-primary"> Projects </span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefurrly
                crafted with attention to details, performance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                   <div 
                   key={key} 
                   className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                   >
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transtion-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="pd-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) =>(
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                            </div>
                        
                     
                     
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4"> {project.Description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                            <a href={project.demoURL} target="_blank" targetclassName="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                            <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20} /></a>
                         </div>
                         </div>
                        </div>
                     </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a 
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                href="https://github.com/Vitor4442"
                target="_blank"
                >
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
}