// API Integration Test Script
// Run this in browser console at http://localhost:5173

console.log('🧪 Starting API Integration Tests...\n');

const API_BASE_URL = 'http://localhost:5297/api';

// Test all API endpoints
async function testAPIEndpoints() {
  const tests = [
    { name: 'Hero Section', endpoint: '/portfoliocontent/hero', expectedFields: ['name', 'role', 'heroContent'] },
    { name: 'About Section', endpoint: '/portfoliocontent/about', expectedFields: ['aboutText', 'profileImageUrl'] },
    { name: 'Experiences', endpoint: '/portfoliocontent/experiences', isArray: true, arrayItemFields: ['company', 'role', 'description'] },
    { name: 'Projects', endpoint: '/portfoliocontent/projects', isArray: true, arrayItemFields: ['title', 'description', 'technologies'] },
    { name: 'Contact', endpoint: '/portfoliocontent/contact', expectedFields: ['address', 'phoneNo', 'email'] },
  ];

  for (const test of tests) {
    try {
      console.log(`\n📡 Testing: ${test.name}`);
      const response = await fetch(`${API_BASE_URL}${test.endpoint}`);
      
      if (!response.ok) {
        console.error(`❌ ${test.name} - HTTP ${response.status}`);
        continue;
      }

      const data = await response.json();
      console.log(`✅ ${test.name} - Success`);
      
      // Check for expected fields
      if (test.isArray) {
        if (Array.isArray(data)) {
          console.log(`✅ Response is array with ${data.length} items`);
          if (data.length > 0 && test.arrayItemFields) {
            const firstItem = data[0];
            const missingFields = test.arrayItemFields.filter(field => !(field in firstItem));
            if (missingFields.length > 0) {
              console.warn(`⚠️  Missing fields in array items: ${missingFields.join(', ')}`);
            } else {
              console.log(`✅ All expected fields present in array items`);
            }
          }
        } else {
          console.warn(`⚠️  Expected array but got: ${typeof data}`);
        }
      } else if (test.expectedFields) {
        const missingFields = test.expectedFields.filter(field => !(field in data));
        if (missingFields.length > 0) {
          console.warn(`⚠️  Missing fields: ${missingFields.join(', ')}`);
        } else {
          console.log(`✅ All expected fields present`);
        }
      }

      // Log sample data
      console.log('📦 Sample data:', JSON.stringify(data, null, 2).substring(0, 200) + '...');

    } catch (error) {
      console.error(`❌ ${test.name} - Error:`, error.message);
    }
  }
}

// Test React components rendering (Browser only)
function testComponentRendering() {
  console.log('\n\n🎨 Testing Component Rendering...\n');

  if (typeof document === 'undefined') {
    console.log('⚠️  DOM testing skipped (running in Node.js environment)');
    console.log('💡 To test component rendering, copy this script to browser console at http://localhost:5173');
    return;
  }

  const tests = [
    { selector: 'h1', description: 'Hero Name' },
    { selector: '.border-b.border-neutral-900', description: 'About Section' },
    { selector: 'h2', description: 'Section Headings', shouldBeMultiple: true },
  ];

  for (const test of tests) {
    const elements = document.querySelectorAll(test.selector);
    if (test.shouldBeMultiple) {
      console.log(`${elements.length > 0 ? '✅' : '❌'} ${test.description}: Found ${elements.length} elements`);
    } else {
      console.log(`${elements.length > 0 ? '✅' : '❌'} ${test.description}: ${elements.length > 0 ? 'Present' : 'Missing'}`);
      if (elements.length > 0 && elements[0].textContent) {
        console.log(`   Content: "${elements[0].textContent.trim().substring(0, 50)}..."`);
      }
    }
  }
}

// Run all tests
async function runAllTests() {
  await testAPIEndpoints();
  
  // Wait a bit for React to render
  setTimeout(() => {
    testComponentRendering();
    console.log('\n\n✨ Test Suite Complete!\n');
    console.log('📊 Summary:');
    console.log('- Check for ✅ marks above for passed tests');
    console.log('- Check for ❌ marks for failed tests');
    console.log('- Review any ⚠️  warnings\n');
  }, 2000);
}

// Execute
runAllTests();
