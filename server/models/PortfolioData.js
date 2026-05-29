import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: String,
  category: String,
  liveLink: String,
  stack: String,
  desc: [String]
});

const ServiceSchema = new mongoose.Schema({
  icon: String,
  title: String,
  desc: String
});

const SkillCategorySchema = new mongoose.Schema({
  icon: String,
  title: String,
  tags: [String]
});

const TimelineItemSchema = new mongoose.Schema({
  role: String,
  company: String,
  dates: String,
  details: [String]
});

const CertSchema = new mongoose.Schema({
  name: String,
  issuer: String,
  year: String
});

const TestimonialSchema = new mongoose.Schema({
  quote: String,
  authorName: String,
  authorRole: String,
  avatarLetters: String
});

const BlogSchema = new mongoose.Schema({
  category: String,
  title: String,
  excerpt: String,
  date: String,
  readTime: String
});

const PortfolioDataSchema = new mongoose.Schema({
  name: { type: String, default: 'Pallav Kanani' },
  title: { type: String, default: 'MERN Stack Developer' },
  location: { type: String, default: 'Gujarat, India' },
  email: { type: String, default: 'pallavkanani27@gmail.com' },
  phone: { type: String, default: '+91 6354678706' },
  whatsapp: { type: String, default: '+91 6354678706' },
  github: { type: String, default: 'https://github.com/pallav2711' },
  linkedin: { type: String, default: 'https://www.linkedin.com/in/pallav-kanani-306b8b28b' },
  cgpa: { type: String, default: '7.0 / 10' },
  educationDegree: { type: String, default: 'B.Tech CSE, GSFC University' },
  educationYears: { type: String, default: '2023 – 2027 (Expected)' },
  status: { type: String, default: 'Open to Opportunities' },
  stats: {
    experience: { type: String, default: '2+' },
    projectsBuilt: { type: String, default: '5+' },
    fasterDelivery: { type: String, default: '40%' },
    apiSpeedBoost: { type: String, default: '35%' }
  },
  aboutQuote: { type: String, default: 'I don\'t just write code — I architect solutions. Whether it\'s optimizing a slow MongoDB query or designing a multi-role access system, I think about the whole picture.' },
  aboutParagraphs: [String],
  skills: [SkillCategorySchema],
  experience: [TimelineItemSchema],
  projects: [ProjectSchema],
  services: [ServiceSchema],
  certifications: [CertSchema],
  testimonials: [TestimonialSchema],
  blogs: [BlogSchema]
}, { timestamps: true });

export default mongoose.model('PortfolioData', PortfolioDataSchema);
