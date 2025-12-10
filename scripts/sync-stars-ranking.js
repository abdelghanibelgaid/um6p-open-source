import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'UM6POpenSoftwareCommunity';
const REPO_NAME = 'um6p-open-source';
const FILE_PATH = 'catalog/software.json';

/**
 * Sync GitHub stars ranking data from the repository
 * This runs during build time to update the stars ranking JSON file
 */
async function syncStarsRanking() {
  console.log('🌟 Syncing GitHub stars ranking...');

  try {
    // Fetch software.json from GitHub
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
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    const projects = JSON.parse(content);

    // Filter GitHub projects
    const githubProjects = projects.filter(p => p.platform === 'github' && p.url);

    console.log(`  Found ${githubProjects.length} GitHub projects`);

    // Fetch star counts for all GitHub projects
    const starData = [];
    let successCount = 0;

    for (const project of githubProjects) {
      try {
        // Extract owner/repo from GitHub URL
        const urlMatch = project.url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!urlMatch) {
          console.warn(`  ⚠ Invalid GitHub URL for ${project.name}: ${project.url}`);
          continue;
        }

        const [, owner, repo] = urlMatch;
        const repoUrl = `${GITHUB_API}/repos/${owner}/${repo}`;

        const repoResponse = await fetch(repoUrl, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'OpenSource-UM6P-Website',
            ...(process.env.GITHUB_TOKEN && {
              'Authorization': `token ${process.env.GITHUB_TOKEN}`
            })
          },
        });

        if (repoResponse.ok) {
          const repoData = await repoResponse.json();
          starData.push({
            name: project.name,
            url: project.url,
            description: project.description,
            domain: project.domain,
            platform: project.platform,
            type: project.type,
            status: project.status,
            stars: repoData.stargazers_count,
            forks: repoData.forks_count,
            watchers: repoData.watchers_count,
            language: repoData.language,
            license: project.license,
            tags: project.tags,
            maintainers: project.maintainers,
            unit_primary: project.unit_primary,
            unit_secondary: project.unit_secondary,
            lastUpdated: new Date().toISOString(),
          });
          successCount++;
        } else {
          console.warn(`  ⚠ Failed to fetch stars for ${project.name}: ${repoResponse.status}`);
        }

        // Rate limiting: small delay between requests
        await new Promise(resolve => setTimeout(resolve, 100));

      } catch (error) {
        console.error(`  ✗ Error fetching stars for ${project.name}:`, error.message);
      }
    }

    // Sort by stars descending
    starData.sort((a, b) => b.stars - a.stars);

    // Calculate total stars
    const totalStars = starData.reduce((sum, p) => sum + p.stars, 0);

    // Write to JSON file
    const outputPath = join(__dirname, '../src/data/stars-ranking.json');
    writeFileSync(outputPath, JSON.stringify(starData, null, 2));

    console.log(`✓ Successfully synced ${successCount} projects with stars data`);
    console.log(`  Total stars: ${totalStars.toLocaleString()}`);
    console.log(`  Top project: ${starData[0]?.name} (${starData[0]?.stars} stars)`);
    console.log(`  Updated: ${outputPath}`);
    console.log(`  Export LAST_STARS_COUNT="${totalStars}"`);

  } catch (error) {
    console.error('✗ Error syncing stars ranking:', error.message);
    // Don't fail the build, just warn
    process.exit(0);
  }
}

syncStarsRanking();
