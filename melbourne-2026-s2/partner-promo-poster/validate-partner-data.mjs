import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const academyRoot = path.resolve(root, '../../../../jr-academy-ai');
const eventContentRoot = path.join(
  academyRoot,
  'jr-academy-web-zh/src/content/events/melbourne-freshers-2026-s2',
);
const lotteryCatalogPath = path.join(eventContentRoot, 'lottery-prizes.json');
const eventContentPath = path.join(eventContentRoot, 'notion-export/content.md');

const dataSource = fs.readFileSync(path.join(root, 'partner-data.js'), 'utf8');
const context = { window: {} };
vm.runInNewContext(dataSource, context);

const lotteryCatalog = JSON.parse(fs.readFileSync(lotteryCatalogPath, 'utf8'));
const eventContent = fs.readFileSync(eventContentPath, 'utf8');
const partnerFlagIndex = process.argv.indexOf('--partner');
const requestedPartner = partnerFlagIndex >= 0 ? process.argv[partnerFlagIndex + 1] : null;
const requireBenefits = process.argv.includes('--require-benefits');
const allPartners = context.window.PARTNERS;
const partners = requestedPartner
  ? allPartners.filter((partner) => partner.slug === requestedPartner)
  : allPartners;

if (requestedPartner && partners.length === 0) {
  throw new Error(`Unknown partner slug: ${requestedPartner}`);
}

const slugs = new Set();
for (const partner of allPartners) {
  if (slugs.has(partner.slug)) {
    throw new Error(`Duplicate partner slug: ${partner.slug}`);
  }
  slugs.add(partner.slug);
}

for (const partner of partners) {
  const logoPath = path.join(root, partner.logo);
  if (!fs.existsSync(logoPath)) {
    throw new Error(`Missing logo for ${partner.slug}: ${partner.logo}`);
  }

  if (requireBenefits && !partner.prizes?.length && !partner.onsiteGift) {
    throw new Error(`${partner.slug} has no verified prize or onsite gift data`);
  }

  if (partner.prizes?.length) {
    if (!partner.prizes.some((prize) => prize.image)) {
      throw new Error(`No representative lottery prize image configured for ${partner.slug}`);
    }

    for (const partnerPrize of partner.prizes) {
      const catalogPrize = lotteryCatalog.prizes.find((prize) => prize.id === partnerPrize.catalogId);
      if (!catalogPrize || catalogPrize.status !== 'published') {
        throw new Error(`Published lottery prize not found for ${partner.slug}: ${partnerPrize.catalogId}`);
      }
      if (
        catalogPrize.sponsor !== partnerPrize.catalogSponsor
        || catalogPrize.name !== partnerPrize.name
        || catalogPrize.quantity !== partnerPrize.quantity
      ) {
        throw new Error(`Lottery prize mapping drifted for ${partner.slug}: ${partnerPrize.catalogId}`);
      }
      if (partnerPrize.image && !fs.existsSync(path.join(root, partnerPrize.image))) {
        throw new Error(`Missing lottery prize image for ${partner.slug}: ${partnerPrize.image}`);
      }
    }
  }

  if (partner.onsiteGift) {
    const evidence = [
      partner.onsiteGift.evidencePattern,
      ...partner.onsiteGift.items,
    ];
    for (const phrase of evidence) {
      if (!eventContent.includes(phrase)) {
        throw new Error(`Onsite gift evidence missing for ${partner.slug}: ${phrase}`);
      }
    }
  }
}

process.stdout.write(`validated ${partners.length} partner mapping(s) against current event sources\n`);
