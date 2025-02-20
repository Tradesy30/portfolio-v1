'use client';

import { useState, Suspense } from 'react';
import { AnimatedSection } from '../AnimatedSection';
import { ContactSkeleton } from '../skeletons/section-skeletons';
import { useForm } from '@formspree/react';
import { z } from 'zod';
import { toast } from 'sonner';

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

function ContactContent() {
  const [formState, sendToFormSpree] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID!);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID) {
      toast.error('Form ID is not configured. Please check your environment variables.');
      return;
    }

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Send to FormSpree
      await sendToFormSpree(validatedData);

      // Use a small timeout to allow formState to update
      setTimeout(() => {
        if (formState.succeeded) {
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        } else if (formState.errors) {
          const errorMessage = formState.errors instanceof Error
            ? formState.errors.message
            : 'Failed to send message. Please try again later.';
          toast.error(errorMessage);
          console.error('FormSpree errors:', formState.errors);
        }
      }, 100);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Display the first validation error
        toast.error(error.errors[0].message);
      } else {
        console.error('Submission error:', error);
        toast.error('An unexpected error occurred. Please try again later.');
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add loading state to the button
  const isSubmitting = formState.submitting;
  const buttonText = isSubmitting ? 'Sending...' : 'Send Message';
  const buttonDisabled = isSubmitting || !process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-gray-400 text-center mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors text-white"
                placeholder="Your name"
                disabled={formState.submitting}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors text-white"
                placeholder="your@email.com"
                disabled={formState.submitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors text-white resize-none"
                placeholder="Your message..."
                disabled={formState.submitting}
              />
            </div>

            <button
              type="submit"
              disabled={buttonDisabled}
              className="w-full px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg hover:from-sky-600 hover:to-indigo-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {buttonText}
            </button>
          </form>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-12 pt-12 border-t border-gray-800">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <Suspense fallback={<ContactSkeleton />}>
        <ContactContent />
      </Suspense>
    </section>
  );
}