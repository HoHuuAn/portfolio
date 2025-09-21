'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Cloud, Code, Cpu, Database, AppWindow, Users } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <Code className="h-5 w-5" />,
      skills: [
        'C/C++',
        'Python',
        'JavaScript',
        'SQL',
        'Java',
        'C#',
        'TypeScript',
      ],
      color: 'bg-blue-50 text-blue-600 border border-blue-200',
    },
    {
      category: 'WebApp Development',
      icon: <AppWindow className="h-5 w-5" />,
      skills: [
        'HTML/CSS',
        'JavaScript',
        'React.js',
        'Node.js',
        'Next.js',
        '.Net',
        'FastAPI',
        'Flutter',
      ],
      color: 'bg-cyan-50 text-cyan-600 border border-cyan-200',
    },
    {
      category: 'Database Management',
      icon: <Database className="h-5 w-5" />,
      skills: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'SQL SERVER',
      ],
      color: 'bg-green-50 text-green-600 border border-green-200',
    },
    {
      category: 'ML/AI Technologies',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        'Scikit-learn',
        'XGBoost',
        'TensorFlow',
        'OpenCV',
        'Pandas',
        'NumPy',
        'LangChain',
        'LangGraph',
        'OpenAI API',
        'LLM Agents',
        'ChatGPT Integration',
        'OCR (Tesseract, EasyOCR)',
      ],
      color: 'bg-purple-50 text-purple-600 border border-purple-200',
    },
    {
      category: 'DevOps & Cloud',
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        'Git',
        'Github Action',
        'Docker',
        'AWS (EC2/S3/Lambda)',
      ],
      color: 'bg-orange-50 text-orange-600 border border-orange-200',
    },
    {
      category: 'Soft Skills',
      icon: <Users className="h-5 w-5" />,
      skills: [
        'Critical Thinking',
        'Communication',
        'Research-Driven',
        'Self-Learning',
        'Scientific Paper Reading',
      ],
      color: 'bg-amber-50 text-amber-600 border border-amber-200',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Badge className={`${section.color} border px-3 py-1.5 font-normal`}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
