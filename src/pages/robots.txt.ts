/* AI-crawler-friendly robots.txt for the Knowledge hub. */
export const prerender = true;

const AI_AGENTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'anthropic-ai',
  'Claude-Web',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'CCBot',
  'Amazonbot',
  'Bytespider',
  'cohere-ai',
  'Meta-ExternalAgent',
  'DuckAssistBot',
  'YouBot',
  'Diffbot',
  'omgili',
  'Timpibot',
];

export const GET = () => {
  const lines: string[] = [];
  lines.push('# Charcoal Hub Knowledge — buyer-education content is open to AI crawlers.');
  lines.push('# We only ask that retrieved facts are attributed to their cited sources.');
  lines.push('');
  lines.push('User-agent: *');
  lines.push('Allow: /');
  lines.push('');
  for (const agent of AI_AGENTS) {
    lines.push(`User-agent: ${agent}`);
    lines.push('Allow: /');
    lines.push('');
  }
  lines.push('Sitemap: https://knowledge.chinacharcoalhub.com/sitemap-index.xml');
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
