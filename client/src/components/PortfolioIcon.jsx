import {
  Layers,
  Layout,
  Server,
  Sparkles,
  Wrench,
  ClipboardList,
  Globe,
  Bot,
  Zap,
  TestTube2,
  Kanban,
  Rocket,
  Code2,
} from 'lucide-react';

const ICON_MAP = {
  mern: Layers,
  frontend: Layout,
  backend: Server,
  ai: Sparkles,
  devops: Wrench,
  qa: ClipboardList,
  fullstack: Globe,
  'ai-integration': Bot,
  api: Zap,
  testing: TestTube2,
  coordination: Kanban,
  mvp: Rocket,
};

const LEGACY_EMOJI_MAP = {
  '⚛️': 'mern',
  '🎨': 'frontend',
  '🔧': 'backend',
  '🤖': 'ai',
  '🛠': 'devops',
  '🛠️': 'devops',
  '📋': 'qa',
  '🌐': 'fullstack',
  '⚡': 'api',
  '🧪': 'testing',
  '🚀': 'mvp',
};

const TITLE_ICON_MAP = {
  'MERN Stack Core': 'mern',
  Frontend: 'frontend',
  'Backend & APIs': 'backend',
  'AI Integration': 'ai',
  'DevOps & Tools': 'devops',
  'QA & Project Mgmt': 'qa',
  'Full-Stack Web Development': 'fullstack',
  'AI Feature Integration': 'ai-integration',
  'API Design & Optimization': 'api',
  'QA & Testing': 'testing',
  'Technical Project Coordination': 'coordination',
  'MVP Development': 'mvp',
};

export function resolveIconKey(icon, title) {
  if (icon && ICON_MAP[icon]) return icon;
  if (icon && LEGACY_EMOJI_MAP[icon]) return LEGACY_EMOJI_MAP[icon];
  if (title && TITLE_ICON_MAP[title]) return TITLE_ICON_MAP[title];
  return 'mern';
}

export default function PortfolioIcon({ icon, title, size = 24, className = '' }) {
  const key = resolveIconKey(icon, title);
  const IconComponent = ICON_MAP[key] || Code2;
  return (
    <IconComponent
      size={size}
      strokeWidth={1.75}
      className={`portfolio-icon ${className}`.trim()}
      aria-hidden
    />
  );
}
