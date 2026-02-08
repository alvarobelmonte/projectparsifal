import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Current __dirname:', __dirname);
console.log('Current cwd:', process.cwd());

// Assets are inside 'web/assets' now
const sourceDir = path.resolve(process.cwd(), 'assets');
const targetDir = path.resolve(process.cwd(), 'public/assets');

console.log('Resolved sourceDir:', sourceDir);
console.log('Resolved targetDir:', targetDir);

if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);

    // Debug: list parent directory
    const parentDir = path.dirname(sourceDir);
    if (fs.existsSync(parentDir)) {
        console.log(`Listing contents of parent dir: ${parentDir}`);
        try {
            const files = fs.readdirSync(parentDir);
            console.log(files);
        } catch (e) {
            console.error('Error listing parent dir:', e);
        }
    } else {
        console.error(`Parent directory also not found: ${parentDir}`);
    }

    process.exit(1);
}

function standardizeName(filename) {
    const ext = path.extname(filename);
    const name = path.basename(filename, ext);
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-') + ext.toLowerCase();
}

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);

        if (entry.isDirectory()) {
            const destPath = path.join(dest, entry.name.toLowerCase()); // Lowercase directory names too
            copyDir(srcPath, destPath);
        } else {
            const destName = standardizeName(entry.name);
            const destPath = path.join(dest, destName);
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied: ${entry.name} -> ${destName}`);
        }
    }
}

console.log(`Copying assets from ${sourceDir} to ${targetDir}...`);
copyDir(sourceDir, targetDir);
console.log('Asset organization complete.');
