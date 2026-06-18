import React, { useState } from 'react';
import { Language } from '../types';
import { X, Send, Link, FileText, CheckCircle2 } from 'lucide-react';
import { trackSuggestion } from '../lib/analytics';

const TELEGRAM_USERNAME = 'mr1labs';
const TELEGRAM_URL = `https://t.me/${TELEGRAM_USERNAME}`;

function sanitizeInput(value: string | undefined, maxLength: number): string {
  if (!value) return '';
  return value
    .trim()
    .replace(/<[^>]*>/g, '')
    .replace(/[\x00-\x1F\x7F]/g, '')
    .slice(0, maxLength);
}

function isValidHttpUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return (parsed.protocol === 'http:' || parsed.protocol === 'https:') && parsed.hostname.length > 3;
  } catch {
    return false;
  }
}

const RATE_LIMIT_KEY = 'algdevs:suggest:rate';
const RATE_WINDOW = 5 * 60 * 1000;
const MAX_ATTEMPTS = 2;

function getRateLimitStatus(): { allowed: boolean; retryAfter?: number } {
  try {
    const raw = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();
    let attempts: number[] = raw ? JSON.parse(raw) : [];

    attempts = attempts.filter((ts) => now - ts < RATE_WINDOW);

    if (attempts.length >= MAX_ATTEMPTS) {
      const retryAfter = Math.ceil((RATE_WINDOW - (now - attempts[0])) / 1000);
      return { allowed: false, retryAfter };
    }

    attempts.push(now);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(attempts));
    return { allowed: true };
  } catch {
    return { allowed: true };
  }
}

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
  const [honeypot, setHoneypot] = useState('');
  const [error, setError] = useState('');

  const isAr = language === 'ar';

  if (!isOpen) return null;

  const close = () => {
    onClose();
    setIsSuccess(false);
    setHoneypot('');
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url || !title) return;

    if (honeypot.trim()) {
      setIsSuccess(true);
      trackSuggestion('honeypot');
      setTimeout(close, 2500);
      return;
    }

    const rate = getRateLimitStatus();
    if (!rate.allowed) {
      const minutes = Math.ceil((rate.retryAfter || 0) / 60);
      setError(`Rate limited. Try again in ~${minutes} minute(s).`);
      setTimeout(() => setError(''), 4000);
      return;
    }

    setIsSubmitting(true);
    setError('');

    const cleanTitle = sanitizeInput(title, 200);
    const cleanUrl = sanitizeInput(url, 500);
    const cleanDesc = sanitizeInput(description, 1000);

    if (!cleanTitle || !cleanUrl || !isValidHttpUrl(cleanUrl)) {
      setError('Please provide a valid title and URL.');
      setIsSubmitting(false);
      return;
    }

    const message = [
      'New AlgDevs resource suggestion',
      '',
      `Title: ${cleanTitle}`,
      `URL: ${cleanUrl}`,
      cleanDesc ? `Description: ${cleanDesc}` : '',
      `Language: ${isAr ? 'ar' : 'en'}`,
      `Submitted: ${new Date().toISOString()}`,
    ].filter(Boolean).join('\n');

    try {
      await navigator.clipboard?.writeText(message);
    } catch (err) {
      console.warn('Could not copy Telegram suggestion message:', err);
    }

    window.open(TELEGRAM_URL, '_blank', 'noopener,noreferrer');
    setIsSuccess(true);
    trackSuggestion('telegram');

    setTimeout(() => {
      close();
      setUrl('');
      setTitle('');
      setDescription('');
      setIsSubmitting(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={close}
      />
      <div className="relative bg-[#111113] border border-zinc-800 rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={close}
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
              {isAr ? 'تم فتح تيليجرام!' : 'Telegram Opened!'}
            </h3>
            <p className="text-zinc-400">
              {isAr ? 'تم نسخ تفاصيل المورد. الصقها في محادثة @mr1labs لإرسال الاقتراح.' : 'The resource details were copied. Paste them in the @mr1labs chat to send the suggestion.'}
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
                  ? 'شاركنا أداة أو موقع مفيد عبر تيليجرام مباشرة إلى @mr1labs.' 
                  : 'Share a useful tool or website directly via Telegram to @mr1labs.'}
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

              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {error && (
                <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                  {error}
                </div>
              )}

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
                    {isAr ? 'إرسال عبر تيليجرام' : 'Send via Telegram'}
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
