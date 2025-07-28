#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const currentVersion = packageJson.version;
const [major, minor, patch] = currentVersion.split('.').map(Number);

function updateVersion(type = 'patch') {
  let newVersion;
  
  switch (type) {
    case 'major':
      newVersion = `${major + 1}.0.0`;
      break;
    case 'minor':
      newVersion = `${major}.${minor + 1}.0`;
      break;
    case 'patch':
    default:
      newVersion = `${major}.${minor}.${patch + 1}`;
      break;
  }
  
  return newVersion;
}

function runCommand(command) {
  try {
    console.log(`Running: ${command}`);
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error running command: ${command}`);
    process.exit(1);
  }
}

function main() {
  const args = process.argv.slice(2);
  const releaseType = args[0] || 'patch';
  
  if (!['major', 'minor', 'patch'].includes(releaseType)) {
    console.error('Invalid release type. Use: major, minor, or patch');
    process.exit(1);
  }
  
  console.log(`🚀 Preparing ${releaseType} release...`);
  console.log(`Current version: ${currentVersion}`);
  
  const newVersion = updateVersion(releaseType);
  console.log(`New version: ${newVersion}`);
  
  // Update package.json
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  
  // Build the project
  console.log('📦 Building project...');
  runCommand('npm run build');
  
  // Run tests
  console.log('🧪 Running tests...');
  runCommand('npm run lint');
  
  // Create git commit
  console.log('📝 Creating git commit...');
  runCommand('git add package.json package-lock.json');
  runCommand(`git commit -m "chore(release): bump version to ${newVersion}"`);
  
  // Create git tag
  console.log('🏷️ Creating git tag...');
  runCommand(`git tag -a "v${newVersion}" -m "Release v${newVersion}"`);
  
  // Push to remote
  console.log('📤 Pushing to remote...');
  runCommand('git push origin main');
  runCommand('git push origin --tags');
  
  console.log(`✅ Release v${newVersion} prepared successfully!`);
  console.log('📋 Next steps:');
  console.log('1. Review the changes');
  console.log('2. The CI/CD pipeline will automatically publish to npm');
  console.log('3. A GitHub release will be created');
}

if (require.main === module) {
  main();
} 