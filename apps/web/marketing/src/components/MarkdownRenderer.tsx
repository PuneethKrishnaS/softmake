import React, { useState } from 'react';
import { Sparkles, Info, AlertTriangle, AlertOctagon, ChevronRight, ThumbsUp, ThumbsDown } from 'lucide-react';
import { ContactForm } from './landing';

interface MarkdownRendererProps {
  content: string;
}

export function cleanHeaderId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Simple client-side syntax highlighter
function highlightCode(code: string, lang: string): string {
  const escapeHtml = (text: string) => {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };

  const escaped = escapeHtml(code);

  if (lang === 'sql') {
    return escaped
      .replace(/\b(CREATE TABLE|CREATE INDEX|PRIMARY KEY|SERIAL|VARCHAR|NOT NULL|NUMERIC|TIMESTAMP|DEFAULT|ON|INDEX)\b/g, '<span class="text-blue-500 font-bold">$1</span>')
      .replace(/\b(client_ledgers|idx_tenant)\b/g, '<span class="text-emerald-500 font-medium">$1</span>')
      .replace(/\b(id|tenant_id|transaction_amount|created_at)\b/g, '<span class="text-orange-500">$1</span>');
  }

  if (lang === 'python') {
    return escaped
      .replace(/\b(def|return|float|import|from|if|else|for|in|try|except)\b/g, '<span class="text-blue-500 font-bold">$1</span>')
      .replace(/(clean_transaction_row|parse_date)/g, '<span class="text-cyan-500">$1</span>')
      .replace(/(['"].*?['"])/g, '<span class="text-emerald-500">$1</span>');
  }

  return escaped;
}

function TabSwitcher({ tabs }: { tabs: { title: string; content: string }[] }) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  return (
    <div className="my-6 border border-border rounded-lg bg-card overflow-hidden">
      {/* Tabs Header bar */}
      <div className="flex border-b border-border bg-muted/40">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveTabIdx(idx)}
            className={`px-4 py-2 text-xs font-sans font-bold border-r border-border cursor-pointer transition-colors ${
              activeTabIdx === idx
                ? 'bg-background text-primary border-b-2 border-b-primary'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/65'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {/* Tab content panel */}
      <div className="p-4">
        <MarkdownRenderer content={tabs[activeTabIdx].content} />
      </div>
    </div>
  );
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const lines = content.split('\n');
  const renderedElements: React.ReactNode[] = [];
  let codeBlockContent: string[] = [];
  let inCodeBlock = false;
  let codeBlockLang = '';
  
  let listItems: string[] = [];
  let listType: 'unordered' | 'ordered' | null = null;

  // Toggle parsing state
  let inToggle = false;
  let toggleTitle = '';
  let toggleLines: string[] = [];

  // Callout parsing state
  let inCallout = false;
  let calloutEmoji = '💡';
  let calloutLines: string[] = [];

  // Feedback widget state
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);
  const [feedbackVal, setFeedbackVal] = useState<string>('');

  const formatInlineMarkdown = (text: string): string => {
    return text
      .replace(/==(.*?)==/g, '<mark class="bg-primary/25 text-foreground px-1 py-0.5 rounded font-medium">$1</mark>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 rounded bg-muted font-mono text-xs text-primary">$1</code>');
  };

  const flushList = (key: number) => {
    if (listItems.length > 0 && listType) {
      const isChecklist = listItems.some(item => item.trim().startsWith('[ ]') || item.trim().startsWith('[x]') || item.trim().startsWith('[X]'));

      if (isChecklist) {
        renderedElements.push(
          <div key={`checklist-${key}`} className="my-4 flex flex-col gap-2.5 pl-2">
            {listItems.map((item, idx) => {
              const trimmedItem = item.trim();
              const isChecked = trimmedItem.startsWith('[x]') || trimmedItem.startsWith('[X]');
              const label = trimmedItem.slice(3).trim();
              return (
                <div key={idx} className="flex items-center gap-3 text-xs md:text-sm font-sans text-muted-foreground select-none">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    readOnly
                    className="h-4 w-4 rounded border-border text-primary focus:ring-primary/40 accent-primary shrink-0"
                  />
                  <span
                    className={isChecked ? 'line-through text-muted-foreground/50' : 'font-medium text-foreground/80'}
                    dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(label) }}
                  />
                </div>
              );
            })}
          </div>
        );
      } else {
        if (listType === 'unordered') {
          renderedElements.push(
            <ul key={`ul-${key}`} className="list-disc pl-6 my-4 flex flex-col gap-2 text-xs md:text-sm lg:text-base text-muted-foreground font-sans">
              {listItems.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
              ))}
            </ul>
          );
        } else {
          renderedElements.push(
            <ol key={`ol-${key}`} className="list-decimal pl-6 my-4 flex flex-col gap-2 text-xs md:text-sm lg:text-base text-muted-foreground font-sans">
              {listItems.map((item, idx) => (
                <li key={idx} dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(item) }} />
              ))}
            </ol>
          );
        }
      }
      listItems = [];
      listType = null;
    }
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // End of custom blocks checks
    if (trimmed === '</Toggle>' && inToggle) {
      const toggleContent = toggleLines.join('\n');
      renderedElements.push(
        <details key={`toggle-${i}`} className="my-4 border border-border rounded-lg bg-card text-card-foreground p-4 group select-none text-left">
          <summary className="font-bold text-xs md:text-sm font-sans cursor-pointer list-none flex items-center justify-between">
            <span>{toggleTitle}</span>
            <ChevronRight size={14} className="text-primary transition-transform duration-200 group-open:rotate-90" />
          </summary>
          <div className="mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed pl-1 border-l-2 border-primary/20">
            <MarkdownRenderer content={toggleContent} />
          </div>
        </details>
      );
      inToggle = false;
      toggleTitle = '';
      toggleLines = [];
      i++;
      continue;
    }

    if (trimmed === '</Callout>' && inCallout) {
      const calloutContent = calloutLines.join('\n');
      renderedElements.push(
        <div key={`callout-${i}`} className="my-6 p-4 rounded-lg bg-muted/20 border border-border/80 flex items-start gap-3.5 text-left">
          <div className="text-xl shrink-0 select-none">{calloutEmoji}</div>
          <div className="text-xs md:text-sm font-sans leading-relaxed text-muted-foreground flex-1">
            <MarkdownRenderer content={calloutContent} />
          </div>
        </div>
      );
      inCallout = false;
      calloutEmoji = '💡';
      calloutLines = [];
      i++;
      continue;
    }

    // Accumulating inside block states
    if (inToggle) {
      toggleLines.push(line);
      i++;
      continue;
    }

    if (inCallout) {
      calloutLines.push(line);
      i++;
      continue;
    }

    if (inCodeBlock) {
      if (trimmed.startsWith('```')) {
        // End code block
        const finalCode = codeBlockContent.join('\n');
        const highlightedHtml = highlightCode(finalCode, codeBlockLang);
        renderedElements.push(
          <div key={`code-${i}`} className="my-6 border border-border bg-muted/40 rounded-lg overflow-hidden font-mono text-xs md:text-sm">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/60">
              <span className="text-[10px] uppercase font-bold text-muted-foreground">{codeBlockLang || 'code'}</span>
              <button
                onClick={(e) => {
                  navigator.clipboard.writeText(finalCode);
                  const btn = e.currentTarget;
                  btn.innerText = 'Copied!';
                  setTimeout(() => { btn.innerText = 'Copy'; }, 2000);
                }}
                className="text-[10px] font-bold text-primary hover:underline cursor-pointer"
              >
                Copy
              </button>
            </div>
            <pre className="p-4 overflow-x-auto text-foreground text-left leading-relaxed">
              <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
            </pre>
          </div>
        );
        codeBlockContent = [];
        inCodeBlock = false;
        codeBlockLang = '';
      } else {
        codeBlockContent.push(line);
      }
      i++;
      continue;
    }

    // Tabs container parsing
    if (trimmed.startsWith('<Tabs>')) {
      flushList(i);
      let tabsContentLines: string[] = [];
      let tabsDepth = 1;
      i++;
      while (i < lines.length) {
        const currentTrimmed = lines[i].trim();
        if (currentTrimmed.startsWith('<Tabs>')) {
          tabsDepth++;
        }
        if (currentTrimmed === '</Tabs>') {
          tabsDepth--;
          if (tabsDepth === 0) {
            break;
          }
        }
        tabsContentLines.push(lines[i]);
        i++;
      }

      const tabs: { title: string; content: string }[] = [];
      let tabTitle = '';
      let tabLines: string[] = [];
      let insideTab = false;

      for (let j = 0; j < tabsContentLines.length; j++) {
        const lineVal = tabsContentLines[j];
        const trimmedVal = lineVal.trim();

        if (trimmedVal.startsWith('<Tab ')) {
          const match = trimmedVal.match(/title=["'](.*?)["']/);
          tabTitle = match ? match[1] : 'Tab';
          insideTab = true;
          tabLines = [];
          continue;
        }

        if (trimmedVal === '</Tab>') {
          insideTab = false;
          tabs.push({ title: tabTitle, content: tabLines.join('\n') });
          continue;
        }

        if (insideTab) {
          tabLines.push(lineVal);
        }
      }

      if (tabs.length > 0) {
        renderedElements.push(
          <TabSwitcher key={`tabs-${i}`} tabs={tabs} />
        );
      }
      i++;
      continue;
    }

    // Start of block parsed blocks
    if (trimmed.startsWith('```')) {
      flushList(i);
      inCodeBlock = true;
      codeBlockLang = trimmed.slice(3).trim();
      i++;
      continue;
    }

    if (trimmed.startsWith('<Toggle')) {
      flushList(i);
      const match = trimmed.match(/title=["'](.*?)["']/);
      toggleTitle = match ? match[1] : 'Details';
      inToggle = true;
      i++;
      continue;
    }

    if (trimmed.startsWith('<Callout')) {
      flushList(i);
      const match = trimmed.match(/emoji=["'](.*?)["']/);
      calloutEmoji = match ? match[1] : '💡';
      inCallout = true;
      i++;
      continue;
    }

    // Table parsing
    if (trimmed.startsWith('|')) {
      flushList(i);
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }

      const rows = tableLines.map(row => 
        row.split('|')
          .slice(1, -1)
          .map(cell => cell.trim())
      );

      if (rows.length > 0) {
        const headers = rows[0];
        const bodyRows = rows.slice(1).filter(row => 
          !row.every(cell => /^:?-+:?$/.test(cell))
        );

        renderedElements.push(
          <div key={`table-${i}`} className="my-6 overflow-x-auto border border-border rounded-lg bg-card">
            <table className="w-full border-collapse text-left text-xs md:text-sm font-sans">
              <thead className="bg-muted border-b border-border">
                <tr>
                  {headers.map((h, idx) => (
                    <th key={idx} className="px-4 py-2.5 font-bold text-foreground" dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(h) }} />
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-muted/30 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-2 text-muted-foreground" dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(cell) }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Custom embedded Contact CTA
    if (trimmed.startsWith('<ContactCTA')) {
      flushList(i);
      const match = trimmed.match(/subject=["'](.*?)["']/);
      const subject = match ? match[1] : 'Inquiry';
      renderedElements.push(
        <div key={`cta-${i}`} className="my-8 border border-primary/20 bg-primary/5 rounded-lg p-6 flex flex-col gap-4 text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="text-primary animate-pulse" size={16} />
            <h4 className="text-sm md:text-base font-bold font-sans">Book a Scoping Consultation</h4>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground font-sans leading-relaxed">
            Fill out the form below to receive a custom structural architecture roadmap tailored for {subject}.
          </p>
          <ContactForm prefilledMessage={`Hi Softmake.in team, I'd like to schedule a consultation regarding: ${subject}`} />
        </div>
      );
      i++;
      continue;
    }

    // Lists parsing
    const unorderedMatch = line.match(/^(\s*)[*+-]\s+(.*)$/);
    const orderedMatch = line.match(/^(\s*)\d+\.\s+(.*)$/);

    if (unorderedMatch) {
      if (listType !== 'unordered') {
        flushList(i);
      }
      listType = 'unordered';
      listItems.push(unorderedMatch[2]);
      i++;
      continue;
    }

    if (orderedMatch) {
      if (listType !== 'ordered') {
        flushList(i);
      }
      listType = 'ordered';
      listItems.push(orderedMatch[2]);
      i++;
      continue;
    }

    // Flush active lists for other block line entries
    if (trimmed !== '') {
      flushList(i);
    }

    // Headers parsing
    if (trimmed.startsWith('# ')) {
      const headingText = trimmed.slice(2);
      renderedElements.push(
        <h1 key={`h1-${i}`} id={cleanHeaderId(headingText)} className="text-2xl sm:text-3xl md:text-4xl font-sans font-black tracking-tight leading-tight mt-8 mb-4 scroll-mt-24">
          {headingText}
        </h1>
      );
    } else if (trimmed.startsWith('## ')) {
      const headingText = trimmed.slice(3);
      renderedElements.push(
        <h2 key={`h2-${i}`} id={cleanHeaderId(headingText)} className="text-xl sm:text-2xl md:text-3xl font-sans font-bold tracking-tight leading-tight mt-6 mb-3 scroll-mt-24">
          {headingText}
        </h2>
      );
    } else if (trimmed.startsWith('### ')) {
      const headingText = trimmed.slice(4);
      renderedElements.push(
        <h3 key={`h3-${i}`} id={cleanHeaderId(headingText)} className="text-lg sm:text-xl md:text-2xl font-sans font-bold tracking-tight leading-tight mt-6 mb-2 scroll-mt-24">
          {headingText}
        </h3>
      );
    } 
    // Blockquotes & Alerts parsing
    else if (trimmed.startsWith('>')) {
      let quoteText = trimmed.slice(1).trim();
      let alertType: 'note' | 'important' | 'warning' | 'caution' | null = null;

      if (quoteText.startsWith('[!NOTE]')) {
        alertType = 'note';
        quoteText = quoteText.slice(7).trim();
      } else if (quoteText.startsWith('[!IMPORTANT]')) {
        alertType = 'important';
        quoteText = quoteText.slice(12).trim();
      } else if (quoteText.startsWith('[!WARNING]')) {
        alertType = 'warning';
        quoteText = quoteText.slice(10).trim();
      } else if (quoteText.startsWith('[!CAUTION]')) {
        alertType = 'caution';
        quoteText = quoteText.slice(10).trim();
      }

      if (alertType) {
        const colors = {
          note: 'border-blue-500 bg-blue-50/5 text-blue-900 dark:text-blue-200',
          important: 'border-primary bg-primary/5 text-foreground',
          warning: 'border-yellow-500 bg-yellow-50/5 text-yellow-900 dark:text-yellow-200',
          caution: 'border-red-500 bg-red-50/5 text-red-900 dark:text-red-200'
        }[alertType];

        const Icon = {
          note: Info,
          important: Sparkles,
          warning: AlertTriangle,
          caution: AlertOctagon
        }[alertType];

        renderedElements.push(
          <div key={`alert-${i}`} className={`border-l-4 p-4 my-6 rounded-r-md ${colors} flex gap-3 items-start text-left`}>
            <Icon size={16} className="mt-0.5 shrink-0" />
            <div className="text-xs md:text-sm font-sans leading-relaxed" dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(quoteText) }} />
          </div>
        );
      } else {
        // Standard blockquote
        renderedElements.push(
          <blockquote key={`quote-${i}`} className="border-l-4 border-primary pl-4 py-1 my-6 italic text-xs md:text-sm lg:text-base text-muted-foreground/80 leading-relaxed text-left font-sans">
            <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(quoteText) }} />
          </blockquote>
        );
      }
    } 
    // Regular Paragraphs parsing
    else if (trimmed !== '') {
      renderedElements.push(
        <p key={`p-${i}`} className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed my-4 text-left font-sans font-medium" dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed) }} />
      );
    }

    i++;
  }

  // Flush any trailing lists
  flushList(lines.length);

  // Add the interactive feedback poll widget at the bottom of every article content
  renderedElements.push(
    <div key="feedback-poll" className="border-t border-border mt-12 pt-8 text-left">
      <div className="bg-muted/30 border border-border/80 rounded-lg p-6 max-w-lg">
        <h4 className="text-sm font-bold font-sans text-foreground">Was this post helpful?</h4>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          Your anonymous feedback helps us publish higher-quality technical documentation.
        </p>
        
        {!feedbackSent ? (
          <div className="flex items-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => { setFeedbackSent(true); setFeedbackVal('yes'); }}
              className="px-3.5 py-1.5 rounded bg-muted hover:bg-primary hover:text-primary-foreground border border-border transition-all text-xs font-bold font-sans flex items-center gap-1.5 cursor-pointer"
            >
              <ThumbsUp size={12} /> Yes, interesting
            </button>
            <button
              type="button"
              onClick={() => { setFeedbackSent(true); setFeedbackVal('no'); }}
              className="px-3.5 py-1.5 rounded bg-muted hover:bg-destructive hover:text-destructive-foreground border border-border transition-all text-xs font-bold font-sans flex items-center gap-1.5 cursor-pointer"
            >
              <ThumbsDown size={12} /> Needs improvement
            </button>
          </div>
        ) : (
          <div className="mt-4 text-xs font-bold text-primary flex items-center gap-1.5 font-sans">
            <Sparkles size={13} className="animate-pulse" />
            {feedbackVal === 'yes'
              ? 'Thank you for your rating! Glad you found it interesting.'
              : 'Thank you! We will adjust our writing guidelines for future articles.'}
          </div>
        )}
      </div>
    </div>
  );

  return <div className="flex flex-col">{renderedElements}</div>;
}
