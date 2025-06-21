import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Lightbulb,
  Brain,
  Code,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

interface WelcomeScreenProps {
  onQuickPrompt: (prompt: string) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  isTyping: boolean;
}

const quickPrompts = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Write Email",
    prompt: "Help me write a professional email to schedule a meeting"
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    label: "Explain",
    prompt: "Explain a complex topic in simple, easy-to-understand terms"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    label: "Brainstorm",
    prompt: "Help me brainstorm creative ideas for my project"
  },
  {
    icon: <Code className="h-6 w-6" />,
    label: "Code Review",
    prompt: "Review my code and suggest improvements for better performance and readability"
  }
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ 
  onQuickPrompt,
}) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col h-full px-4">
      {/* Logo Section - centered and properly sized for mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center pt-16 md:pt-20 pb-8 md:pb-12"
      >
        <div className="flex items-center justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-foreground/20 flex items-center justify-center bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-foreground/10 flex items-center justify-center">
                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-foreground/20"></div>
              </div>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-foreground/15 flex items-center justify-center">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-foreground/30"></div>
              </div>
            </div>
            <div className="absolute top-2 right-2 md:top-4 md:right-4">
              <div className="w-3 h-3 md:w-4 md:h-4 rotate-45 bg-foreground/20"></div>
              <div className="w-2 h-2 md:w-3 md:h-3 rotate-12 bg-foreground/30 ml-1 -mt-1"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Spacer to push buttons down */}
      <div className="flex-1 min-h-[2rem] md:min-h-[4rem]"></div>

      {/* Quick Actions - optimized for mobile touch targets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 gap-4 max-w-sm w-full mx-auto mb-24 md:mb-20"
      >
        {quickPrompts.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="w-full"
          >
            <Button
              variant="outline"
              className="h-20 md:h-24 w-full flex flex-col items-center justify-center gap-3 bg-card/60 border-2 border-border/50 hover:bg-card/80 hover:border-primary/30 hover:shadow-lg rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 min-h-[80px]"
              onClick={() => onQuickPrompt(item.prompt)}
              title={item.prompt}
            >
              <div className="text-foreground">
                {item.icon}
              </div>
              <div className="text-sm font-medium text-foreground text-center leading-tight">
                {item.label}
              </div>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};