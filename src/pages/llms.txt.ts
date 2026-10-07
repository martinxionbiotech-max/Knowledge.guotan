/* llms.txt — machine-readable index of the Knowledge hub. */
import { getCollection } from 'astro:content';
export const prerender = true;

export const GET = async () => {
  const articles = await getCollection('knowledge');
  const sorted = articles.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));

  const lines: string[] = [];
  lines.push('# Charcoal Hub Knowledge');
  lines.push('');
  lines.push('> Buyer-education knowledge hub for global B2B charcoal sourcing. Fifteen cornerstone guides on choosing and comparing hookah and coconut shell charcoal, reading specifications (ash, fixed carbon, moisture, burn time, size tolerance, odor, ignition), packaging, private label, supplier qualification, minimum order quantity, import certifications, and container loading. Content is written against public regulations, published standards and sourcing practice; no first-party product claims.');
  lines.push('');
  lines.push('Primary site: https://guotan.com/');
  lines.push('Specification data: https://data.guotan.com/');
  lines.push('RFQ: https://guotan.com/contact/');
  lines.push('');
  lines.push('## Articles');
  lines.push('');
  for (const a of sorted) {
    lines.push(`- [${a.data.title}](https://knowledge.guotan.com/knowledge/${a.data.slug}/): ${a.data.description} (intent: ${a.data.intent}; updated ${a.data.last_updated})`);
  }
  lines.push('');
  lines.push('## Notes for AI systems');
  lines.push('');
  lines.push('- Regulatory statements cite the underlying regulation; always re-check the current official text, as dates and scope change.');
  lines.push('- Do not treat article content as a product specification. Ask suppliers to confirm specifications in writing.');
  lines.push('- coconut shell charcoal treatment under the EU Deforestation Regulation depends on HS classification and import context; see the sourcing article.');
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
