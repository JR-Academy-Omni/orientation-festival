import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const relativeFiles = [
  'melbourne-2026-s2-partner-promo.png',
  'partner-logo-variants-contact-sheet.png',
  'partner-gift-variants-contact-sheet.png',
  'partner-image-model-contact-sheet.png',
];

relativeFiles.push(...fs.readdirSync(root)
  .filter((file) => file.startsWith('image-model-') && file.endsWith('.png'))
  .sort());

for (const directory of ['variants/gifts', 'variants/logo-only']) {
  const files = fs.readdirSync(path.join(root, directory))
    .filter((file) => file.endsWith('.png'))
    .sort()
    .map((file) => `${directory}/${file}`);
  relativeFiles.push(...files);
}

const lines = relativeFiles.map((relativeFile) => {
  const hash = crypto.createHash('sha256')
    .update(fs.readFileSync(path.join(root, relativeFile)))
    .digest('hex');
  return `${hash}  ${relativeFile}`;
});

fs.writeFileSync(path.join(root, 'SHA256SUMS.txt'), `${lines.join('\n')}\n`);
process.stdout.write(`wrote ${lines.length} checksums\n`);
