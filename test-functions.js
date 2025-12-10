#!/usr/bin/env node

/**
 * Test script for Netlify Functions
 * Run with: node test-functions.js
 */

const BASE_URL = process.env.SITE_URL || 'http://localhost:8888';

async function testFunction(name, method = 'GET', body = null) {
  console.log(`\n🧪 Testing ${name}...`);
  
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    
    if (body) {
      options.body = JSON.stringify(body);
    }
    
    const response = await fetch(`${BASE_URL}/.netlify/functions/${name}`, options);
    const data = await response.json();
    
    if (data.success) {
      console.log(`✅ ${name} succeeded`);
      console.log(`   Status: ${response.status}`);
      
      if (data.metadata) {
        console.log(`   Metadata:`, JSON.stringify(data.metadata, null, 2));
      }
      
      if (data.data && Array.isArray(data.data)) {
        console.log(`   Results: ${data.data.length} items`);
        if (data.data[0]) {
          console.log(`   First item:`, data.data[0].name || data.data[0]);
        }
      }
    } else {
      console.log(`❌ ${name} failed`);
      console.log(`   Error:`, data.error);
    }
    
    return data;
  } catch (error) {
    console.log(`❌ ${name} error`);
    console.log(`   Error:`, error.message);
    return null;
  }
}

async function runTests() {
  console.log('🚀 Starting Netlify Functions Tests');
  console.log(`📍 Base URL: ${BASE_URL}`);
  
  // Test 1: Check Updates
  await testFunction('check-updates');
  
  // Test 2: Rank by Stars
  await testFunction('rank-by-stars');
  
  // Test 3: Fetch GitHub Stats
  const testProjects = [
    {
      name: 'Test Project',
      url: 'https://github.com/pyccel/pyccel',
      platform: 'github'
    }
  ];
  
  await testFunction('fetch-github-stats', 'POST', { projects: testProjects });
  
  console.log('\n✨ Tests complete!');
}

// Run tests
runTests().catch(console.error);
