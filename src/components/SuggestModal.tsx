import React, { useState } from 'react';
import { Language } from '../types';
import { X, Send, Link, FileText, CheckCircle2 } from 'lucide-react';
import { trackSuggestion } from '../lib/analytics';

// === DOPPLER + CLOUDFLARE WORKER CONFIG ===
// Replace with your actual values
const WORKER_URL = 'https://alg-devs.marwannaili-23-07.workers.dev/';
const SUGGEST_SECRET = 'algdevs-2026-super-secret-xyz789'; // Must exactly match the SUGGEST_SECRET value in your Doppler project

interface SuggestModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export function SuggestModal({ isOpen, onClose, language }: SuggestModalProps) {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isAr = language === 'ar';

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !title) return;
    setIsSubmitting(true);

    const payload = {
      title,
      url,
      description: description || '',
      language: isAr ? 'ar' : 'en',
      timestamp: new Date().toISOString(),
    };

    try {
      // Send to Cloudflare Worker (which securely fetches Telegram token from Doppler)
      await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Secret': SUGGEST_SECRET, // Verified in the Worker against Doppler
        },
        body: JSON.stringify(payload),
      });

      // Always treat as success for the user (delivery is best-effort)
      setIsSuccess(true);
      trackSuggestion('success');

      // Reset form and close after showing success
      setTimeout(() => {
        handleClose();
        setUrl('');
        setTitle('');
        setDescription('');
      }, 2500);
    } catch (err) {
      // Silent fail on network error - still show success to user
      // Do NOT expose details (keeps credentials secure)
      console.warn('Suggestion submission failed (network or Worker issue):', err);
      setIsSuccess(true);
      trackSuggestion('error'); // still track for monitoring

      setTimeout(() => {
        handleClose();
        setUrl('');
        setTitle('');
        setDescription('');
      }, 2500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={handleClose}
      />
      
      <div className="relative bg-[#111113] border border-zinc-800 rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={handleClose}
          className="absolute top-4 end-4 p-2 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-zinc-100 mb-2">
              {isAr ? 'تم الإرسال بنجاح!' : 'Submitted Successfully!'}
            </h3>
            <p className="text-zinc-400">
              {isAr ? 'شكراً لك على مساهمتك. سيتم مراجعة المورد وإضافته.' : 'Thank you for your contribution. The resource will be reviewed.'}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-zinc-100 mb-2">
                {isAr ? 'اقتراح مورد جديد' : 'Suggest a Resource'}
              </h2>
              <p className="text-sm text-zinc-400">
                {isAr 
                  ? 'شاركنا أداة أو موقع مفيد ليتم إضافته إلى الدليل.' 
                  : 'Share a useful tool or website to be added to the directory.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5 focus-within:text-emerald-400 transition-colors">
                  {isAr ? 'رابط المورد' : 'Resource URL'} *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-zinc-500">
                    <Link className="w-4 h-4" />
                  </div>
                  <input
                    type="url"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-sm rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 block ps-10 p-3 text-zinc-200 placeholder-zinc-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5 focus-within:text-emerald-400 transition-colors">
                  {isAr ? 'الاسم' : 'Title'} *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none text-zinc-500">
                    <FileText className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder={isAr ? "اسم الأداة أو الموقع" : "Tool or website name"}
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-sm rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 block ps-10 p-3 text-zinc-200 placeholder-zinc-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-1.5 focus-within:text-emerald-400 transition-colors">
                  {isAr ? 'الوصف (اختياري)' : 'Description (Optional)'}
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={isAr ? "نبذة مختصرة عن المورد..." : "Brief description..."}
                  rows={3}
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-sm rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 block p-3 text-zinc-200 placeholder-zinc-600 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !url || !title}
                className="w-full flex items-center justify-center gap-2 mt-6 p-3 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-emerald-950/30 border-t-emerald-950 rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {isAr ? 'إرسال الاقتراح' : 'Submit Suggestion'}
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
