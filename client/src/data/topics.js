/** Single source of truth for service / contact topics — hooks, visuals, daily copy */

export const DAY_LABELS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/** Site-wide hero hook — rotates by calendar day */
export const HERO_DAILY_HOOKS = [
  {
    day: 0,
    label: 'Sunday',
    hook: 'Plan the architecture today. Ship the product tomorrow.',
    focus: 'Strategy & system design',
  },
  {
    day: 1,
    label: 'Monday',
    hook: 'Start the week with a vertical slice — API to UI in one flow.',
    focus: 'Full-stack momentum',
  },
  {
    day: 2,
    label: 'Tuesday',
    hook: 'Embed AI where it actually saves users time — not where it\'s trendy.',
    focus: 'AI that earns its place',
  },
  {
    day: 3,
    label: 'Wednesday',
    hook: 'Mid-week is for performance: indexes, caching, and lean payloads.',
    focus: 'API speed & reliability',
  },
  {
    day: 4,
    label: 'Thursday',
    hook: 'Break it before users do — test the edge cases while it\'s still cheap.',
    focus: 'QA & confidence',
  },
  {
    day: 5,
    label: 'Friday',
    hook: 'Align the team, clear the backlog, land the sprint.',
    focus: 'Delivery & coordination',
  },
  {
    day: 6,
    label: 'Saturday',
    hook: 'From idea to live MVP — validate fast, iterate with real feedback.',
    focus: 'Launch & learn',
  },
];

export const TOPICS = [
  {
    id: 'fullstack',
    icon: 'fullstack',
    title: 'Full-Stack Web Development',
    contactValue: 'Full-Stack Web Development',
    hook: 'One engineer. Database to deploy. Zero handoff friction.',
    desc: 'End-to-end MERN applications — schema design, REST APIs, React UI, and production deployment built for speed and scale.',
    highlights: ['40% faster feature delivery', 'Reusable component architecture', 'MongoDB → UI in one codebase'],
    dailyHooks: [
      'Sunday: Sketch data models and user flows before the sprint starts.',
      'Monday: Ship a full vertical slice — auth, API, and screen together.',
      'Tuesday: Refactor UI components for reuse across the product.',
      'Wednesday: Tune queries and indexes for snappier list views.',
      'Thursday: Cross-browser and mobile pass on critical paths.',
      'Friday: Demo a working feature — not a slide deck.',
      'Saturday: Polish onboarding so first-time users convert.',
    ],
    gradientFrom: '#60a5fa',
    gradientTo: '#818cf8',
  },
  {
    id: 'ai-integration',
    icon: 'ai-integration',
    title: 'AI Feature Integration',
    contactValue: 'AI Feature Integration',
    hook: 'OpenAI & Gemini in production — not in a demo.',
    desc: 'Chatbots, resume builders, mock interviews, and smart analytics wired with solid prompts, streaming, and guardrails.',
    highlights: ['OpenAI & Gemini APIs', 'ATS resume gen in <30s', 'Real users on Crackit AI'],
    dailyHooks: [
      'Sunday: Define the job-to-be-done before picking a model.',
      'Monday: Prototype one AI flow with real sample inputs.',
      'Tuesday: Harden prompts against empty and abusive input.',
      'Wednesday: Add streaming so responses feel instant.',
      'Thursday: Log token usage and latency for every endpoint.',
      'Friday: A/B test two prompt variants on one feature.',
      'Saturday: Ship a small AI win users can try today.',
    ],
    gradientFrom: '#c084fc',
    gradientTo: '#f472b6',
  },
  {
    id: 'api',
    icon: 'api',
    title: 'API Design & Optimization',
    contactValue: 'API Design & Optimization',
    hook: 'REST APIs that stay fast under load — 35% faster, measured.',
    desc: 'JWT auth, Zod validation, clean error contracts, and MongoDB tuning that cuts response time where it matters.',
    highlights: ['35% API response improvement', 'JWT + Zod validation', 'N+1 patterns eliminated'],
    dailyHooks: [
      'Sunday: Document endpoints and error shapes for the team.',
      'Monday: Add validation at the boundary — fail fast, fail clear.',
      'Tuesday: Profile the slowest three routes in Postman.',
      'Wednesday: Add indexes where explain plans scream.',
      'Thursday: Contract tests for auth and error codes.',
      'Friday: Rate-limit and size-cap heavy payloads.',
      'Saturday: Publish a Postman collection clients can trust.',
    ],
    gradientFrom: '#fbbf24',
    gradientTo: '#f97316',
  },
  {
    id: 'testing',
    icon: 'testing',
    title: 'QA & Testing',
    contactValue: 'QA & Testing',
    hook: 'Catch bugs in staging — not in your user\'s inbox.',
    desc: 'Manual QA, Postman API suites, integration paths, and actionable bug reports that developers can fix in one pass.',
    highlights: ['50+ PR reviews at Foecht', 'E2E on 3+ features', 'Edge cases & regression focus'],
    dailyHooks: [
      'Sunday: List top 10 user journeys to protect this week.',
      'Monday: Smoke-test auth and checkout after every merge.',
      'Tuesday: API collection run — green before deploy.',
      'Wednesday: Exploratory pass on new UI states.',
      'Thursday: Regression on bugs you fixed last sprint.',
      'Friday: Sign-off checklist before production push.',
      'Saturday: Write one repro case that prevents a repeat.',
    ],
    gradientFrom: '#34d399',
    gradientTo: '#2dd4bf',
  },
  {
    id: 'coordination',
    icon: 'coordination',
    title: 'Technical Project Coordination',
    contactValue: 'Technical Project Coordination',
    hook: 'Sprints that ship — backlog, standups, and devs aligned.',
    desc: 'Agile delivery for founders and technical teams: sprint planning, backlog grooming, cross-team sync, and unblock-heavy coordination.',
    highlights: ['Agile / Scrum delivery', 'Sprint planning & reviews', 'Dev ↔ stakeholder bridge'],
    dailyHooks: [
      'Sunday: Prioritize next sprint — impact over noise.',
      'Monday: Standup with blockers named and owners assigned.',
      'Tuesday: Refine stories until devs can estimate in minutes.',
      'Wednesday: Mid-sprint check — scope creep gets cut.',
      'Thursday: Prep demo narrative for stakeholders.',
      'Friday: Retro: one keep, one fix, one try.',
      'Saturday: Clear inbox of vague tickets — rewrite or delete.',
    ],
    gradientFrom: '#94a3b8',
    gradientTo: '#64748b',
  },
  {
    id: 'mvp',
    icon: 'mvp',
    title: 'MVP Development',
    contactValue: 'MVP Build',
    hook: 'Idea to live product — architecture, build, deploy.',
    desc: 'Zero-to-launched MVPs: lean scope, MERN stack, testing, and Vercel deployment so you validate with real users fast.',
    highlights: ['Crackit AI & ProdFlow shipped', 'Full SDLC ownership', 'RBAC & auth from day one'],
    dailyHooks: [
      'Sunday: Ruthlessly cut scope to one core loop.',
      'Monday: Scaffold repo, auth, and one happy path.',
      'Tuesday: Ship ugly UI that works — polish later.',
      'Wednesday: Wire payments or signup if that\'s the test.',
      'Thursday: Deploy preview for five friendly users.',
      'Friday: Collect feedback — fix the top blocker only.',
      'Saturday: Announce soft launch to your first cohort.',
    ],
    gradientFrom: '#fb7185',
    gradientTo: '#e879f9',
  },
  {
    id: 'other',
    icon: 'mern',
    title: 'Something Else',
    contactValue: 'Something Else',
    hook: 'Have a unique challenge? Let\'s scope it in 24 hours.',
    desc: 'Consulting, audits, pair programming, or hybrid roles — tell me what you\'re building and we\'ll find the right fit.',
    highlights: ['Flexible engagement', 'Quick discovery call', 'Honest fit assessment'],
    dailyHooks: [
      'Sunday: Write down the outcome you need, not the stack.',
      'Monday: Share repos or wireframes — context beats guesses.',
      'Tuesday: Ask for a second opinion on architecture.',
      'Wednesday: Book a 30-min scope call — no commitment.',
      'Thursday: Get a written estimate with milestones.',
      'Friday: Start with a paid discovery sprint if it\'s complex.',
      'Saturday: Rest — good products need fresh eyes Monday.',
    ],
    gradientFrom: '#a1a1aa',
    gradientTo: '#71717a',
  },
];

/** Contact dropdown options (order matters for UX) */
export const CONTACT_TOPICS = TOPICS.filter((t) =>
  [
    'fullstack',
    'ai-integration',
    'api',
    'testing',
    'mvp',
    'coordination',
    'other',
  ].includes(t.id)
).map((t) => ({
  value: t.contactValue,
  label: t.contactValue === 'MVP Build' ? 'MVP Build' : t.title === 'Something Else' ? 'Something Else' : t.title,
  topicId: t.id,
  icon: t.icon,
  hook: t.hook,
}));

export function getTopicById(id) {
  return TOPICS.find((t) => t.id === id);
}

export function getTopicByContactValue(value) {
  return TOPICS.find((t) => t.contactValue === value || t.title === value);
}

export function getTopicByTitleOrIcon(service) {
  if (!service) return null;
  return (
    TOPICS.find((t) => t.title === service.title) ||
    TOPICS.find((t) => t.id === service.id) ||
    TOPICS.find((t) => t.icon === service.icon)
  );
}

/** Merge API service rows with rich topic metadata */
export function enrichServices(services = []) {
  return services.map((srv) => {
    const topic = getTopicByTitleOrIcon(srv);
    if (!topic) return srv;
    return {
      ...srv,
      id: topic.id,
      icon: srv.icon || topic.icon,
      hook: srv.hook || topic.hook,
      desc: srv.desc || topic.desc,
      highlights: srv.highlights || topic.highlights,
      gradientFrom: topic.gradientFrom,
      gradientTo: topic.gradientTo,
    };
  });
}

/** Typewriter + carousel phrases from all topics */
export function getTypewriterPhrases() {
  return TOPICS.filter((t) => t.id !== 'other').map((t) => t.hook);
}

export function getDailyHook() {
  const day = new Date().getDay();
  return HERO_DAILY_HOOKS[day] || HERO_DAILY_HOOKS[1];
}

export function getTopicDailyHook(topicId) {
  const topic = getTopicById(topicId);
  if (!topic?.dailyHooks?.length) return '';
  return topic.dailyHooks[new Date().getDay()] || topic.dailyHooks[0];
}
