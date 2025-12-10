#!/usr/bin/env node

/**
 * Pre-build script: Sync software.json from um6p-open-source repository
 * This runs during Netlify builds to ensure the latest data is included
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'UM6POpenSoftwareCommunity';
const REPO_NAME = 'um6p-open-source';
const FILE_PATH = 'catalog/software.json';

async function syncSoftwareJson() {
  console.log('🔄 Syncing software.json from GitHub...');

  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'OpenSource-UM6P-Website',
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `token ${process.env.GITHUB_TOKEN}`
          })
        },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Decode base64 content
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    const softwareData = JSON.parse(content);

    // Write to local file
    const localPath = join(__dirname, '..', 'src', 'data', 'software.json');
    writeFileSync(localPath, JSON.stringify(softwareData, null, 2), 'utf-8');

    console.log(`✓ Successfully synced ${softwareData.length} projects`);
    console.log(`  SHA: ${data.sha}`);
    console.log(`  Updated: ${data.sha}`);
    
    // Store SHA for scheduled function to compare
    console.log(`  Export LAST_SOFTWARE_SHA="${data.sha}"`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error syncing software.json:', error.message);
    console.log('⚠️  Continuing with existing software.json file');
    
    // Don't fail the build, just use existing file
    process.exit(0);
  }
}

syncSoftwareJson();
