import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Robinson Pharmacy ERP',
    description: `A comprehensive web and mobile ERP system designed for pharmaceutical warehouse operations, enabling efficient management of inventory, orders, and logistics in healthcare supply chains.<br>
- Developed a <strong>full-stack ERP solution</strong> with web interface using <strong>Angular</strong> and <strong>KendoUI</strong> for rich data visualization and user experience  
- Built backend services with <strong>ASP.NET MVC</strong> and <strong>.NET Core</strong> for robust business logic and API endpoints  
- Created <strong>mobile application</strong> using <strong>React Native</strong> for warehouse staff to manage operations on-the-go  
- Integrated <strong>SQL Server</strong> database for secure and scalable data storage and retrieval  
- Implemented features for inventory tracking, order management, warehouse operations, and reporting  
- Ensured compliance with pharmaceutical industry standards and data security requirements`,

    techStack: [
      'Angular', 'KendoUI', 'ASP.NET MVC', '.NET Core', 'React Native', 'SQL Server',
      'JavaScript', 'TypeScript', 'C#', 'Mobile Development'
    ],
    date: '2024 - 2025',
    links: [
      // { name: 'Demo', url: '#' },
    ],
    images: [
      { src: '/projects/robinson-pharma-erp/control-quantity-raw-material.png', alt: 'Control real quantity used or destroyed and remained' },
      { src: '/projects/robinson-pharma-erp/adjustment-center.png', alt: 'Adjust raw material in warehouse' },
      { src: '/projects/robinson-pharma-erp/manage-raw-material-between-warehouse.png', alt: 'Pick and move among racks and warehouses' },
    ],
  },
  {
    title: 'Linh Kim Duyen',
    description: `An innovative e-commerce platform featuring interactive 3D product visualization, virtual try-on capabilities, and AI-powered shopping assistance for enhanced customer experience.<br>
- Built an <strong>interactive 3D product viewer</strong> allowing customers to examine products from all angles with zoom and rotation features
- Implemented <strong>virtual try-on functionality</strong> using computer vision to overlay products on customer photos in real-time
- Developed an <strong>AI shopping assistant</strong> powered by OpenAI and Gemini APIs for personalized product recommendations and customer support
- Created backend services with <strong>FastAPI</strong> and integrated <strong>pgvector</strong> for efficient vector similarity search and product matching
- Deployed on <strong>AWS infrastructure</strong> (EC2, S3) with scalable architecture for high-traffic e-commerce operations
- Integrated advanced search and filtering capabilities with AI-driven product discovery`,

    techStack: [
      'Next.js', 'FastAPI', 'pgvector', 'OpenAI', 'Gemini', 'AWS S3', 'AWS EC2',
      'React', 'Python', 'PostgreSQL', 'Computer Vision', '3D Rendering'
    ],
    date: '2024 - 2025',
    links: [
      { name: 'Website', url: 'https://linhkimduyen.com' },
      // { name: 'Demo', url: '#' },
    ],
    images: [
      { src: '/projects/linh-kim-duyen/3d-viewer.mp4', alt: '3D product viewer demonstration', type: 'video' },
      // { src: '/projects/linh-kim-duyen/virtual-tryon.png', alt: 'Virtual try-on feature', type: 'image' },
      { src: '/projects/linh-kim-duyen/ai-assistant.png', alt: 'AI shopping assistant chat', type: 'video' },
    ],
  },
  {
    title: 'FamiSoft Production',
    description: `A comprehensive end-to-end CRM and ERP platform designed for manufacturing companies, featuring POS systems, warehouse management, accounting, and AI-powered analytics.<br>
- Developed a <strong>complete CRM & ERP solution</strong> with Point of Sale (POS), warehouse management, and accounting modules
- Built frontend with <strong>React.js + Vite</strong> for fast, responsive user interfaces and modern development experience
- Implemented backend with <strong>Node.js</strong> and <strong>MongoDB/PostgreSQL</strong> for flexible data management and real-time operations
- Integrated <strong>Redis</strong> for caching and session management to ensure high performance and scalability
- Added <strong>AI-powered analytics</strong> features for business intelligence, demand forecasting, and automated reporting
- Created comprehensive dashboard for real-time monitoring of production, inventory, sales, and financial metrics`,

    techStack: [
      'React.js', 'Vite', 'MongoDB', 'PostgreSQL', 'Node.js', 'Redis',
      'JavaScript', 'TypeScript', 'AI Analytics', 'Business Intelligence'
    ],
    date: '2024 - 2025',
    links: [
      { name: 'Platform', url: 'https://famisoft.com' },
      // { name: 'Demo', url: '#' },
    ],
    images: [
      { src: '/projects/famisoft-production/famisoft-production.mp4', alt: 'FamiSoft Production platform demo showcasing overall features', type: 'video' },
      // { src: '/projects/famisoft-production/dashboard.png', alt: 'Main dashboard overview' },
      // { src: '/projects/famisoft-production/pos-system.png', alt: 'Point of sale interface' },
      // { src: '/projects/famisoft-production/warehouse.png', alt: 'Warehouse management system' },
      // { src: '/projects/famisoft-production/analytics.png', alt: 'AI analytics dashboard' },
    ],
  },
  {
    title: 'Diabetes Prediction',
    description: `A regression-based ML pipeline for predicting blood sugar levels using questionnaire responses and basic diagnostics, aiming to support early-stage, non-invasive diabetes screening.<br>
- Cleaned tabular data with 198+ mismatches and 294 missing glucose entries; encoded categorical and binary features
- Applied <b><i>y′ = ln(1 + y)</i></b> log transformation on the left-skewed target and reversed with <b><i>y = eʸ′ − 1</i></b>
- Balanced the dataset using ADASYN to correct for bias toward non-diabetic samples
- Trained and tuned multiple regressors (SVR, MLP, RF, GBDT...) using <b>RandomizedSearchCV</b>
- SVR achieved best performance with <b>~0.6–0.7 mmol/L error</b> and highest R² on test sets
- Pipeline built with explainable, healthcare-compatible tabular ML and EDA-guided preprocessing`,
    techStack: ['Python', 'Pandas', 'XGBoost', 'Scikit-learn'],
    date: '2025',
    links: [],
    images: [
      { src: '/projects/diabetes/data-skewness.png', alt: 'Data skewness' },
      { src: '/projects/diabetes/data-after-norm.png', alt: 'Data after normalized using log transformation' },
      { src: '/projects/diabetes/model-comparision.png', alt: 'Model comparison' },
      { src: '/projects/diabetes/result.png', alt: 'Prediction results' },
    ],
  },
];


// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string; type?: 'image' | 'video' }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg text-justify whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: projectData.description || '' } as { __html: string }}
          />



          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}
      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {projectData.images.map((media, index) => (
              <div
                key={index}
                className="w-full rounded-xl bg-neutral-100 dark:bg-neutral-900 p-4 space-y-2"
              >
                <div className="relative w-full h-96 overflow-hidden rounded-lg bg-white dark:bg-black flex items-center justify-center">
                  {(media as any).type === 'video' ? (
                    <video
                      src={media.src}
                      controls
                      className="w-full h-full object-contain"
                      poster={media.src.replace('.mp4', '.png')}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 text-center">
                  {media.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}




    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Enterprise Software',
    title: 'Robinson Pharmacy ERP',
    src: '/projects/robinson-pharma-erp/logo.png',
    content: <ProjectContent project={{ title: 'Robinson Pharmacy ERP' }} />,
  },
  {
    category: 'Ecommerce & AI-powered',
    title: 'Linh Kim Duyen',
    src: '/projects/linh-kim-duyen/logo.png',
    content: <ProjectContent project={{ title: 'Linh Kim Duyen' }} />,
  },
  {
    category: 'ERP & Production Management',
    title: 'FamiSoft Production',
    src: '/projects/famisoft-production/logo.png',
    content: <ProjectContent project={{ title: 'FamiSoft Production' }} />,
  },
  {
    category: 'Healthcare & Classification',
    title: 'Diabetes Prediction',
    src: '/projects/diabetes/logo.png',
    content: <ProjectContent project={{ title: 'Diabetes Prediction' }} />,
  }
];
