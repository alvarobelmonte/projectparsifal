import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve(process.cwd(), 'public/assets');

const renames = {
    'img/about': [
        { old: 'capture-d-cran-87-.webp', new: 'about-hero.webp' },
        { old: 'received-869547856872390-3-edited.webp', new: 'about-profile.webp' }
    ],
    'img/music': [
        { prefix: '291712205', new: 'music-performance.webp' }
    ],
    'videos': [
        { old: '01-making-off-enregistrement-perceval.mp4', new: 'making-of-perceval.mp4' },
        { old: '02-making-of-regarde.mp4', new: 'making-of-regarde.mp4' },
        { old: '39-d-but-regarde.mp4', new: 'regarde-intro.mp4' }
    ]
};

// Helper: Rename sequential files in a directory
function renameSequential(dirPath, prefix, extFilter = null) {
    const fullPath = path.join(assetsDir, dirPath);
    if (!fs.existsSync(fullPath)) return;

    const files = fs.readdirSync(fullPath).filter(f => !extFilter || f.endsWith(extFilter));
    // Sort to ensure deterministic order
    files.sort();

    files.forEach((file, index) => {
        const ext = path.extname(file);
        const newName = `${prefix}-${String(index + 1).padStart(2, '0')}${ext}`;
        const oldPath = path.join(fullPath, file);
        const newPath = path.join(fullPath, newName);

        if (file !== newName) {
            fs.renameSync(oldPath, newPath);
            console.log(`Renamed: ${dirPath}/${file} -> ${newName}`);
        }
    });
}

// Helper: Apply specific renames
function applyRenames() {
    for (const [dir, list] of Object.entries(renames)) {
        const dirPath = path.join(assetsDir, dir);
        if (!fs.existsSync(dirPath)) continue;

        const files = fs.readdirSync(dirPath);

        list.forEach(item => {
            let match;
            if (item.old) {
                match = files.find(f => f === item.old);
            } else if (item.prefix) {
                match = files.find(f => f.startsWith(item.prefix));
            }

            if (match) {
                const oldPath = path.join(dirPath, match);
                const newPath = path.join(dirPath, item.new);
                fs.renameSync(oldPath, newPath);
                console.log(`Renamed: ${dir}/${match} -> ${item.new}`);
            }
        });
    }
}

// Execute
console.log('Starting asset renaming...');

// 1. Specific Renames
applyRenames();

// 2. Sequential Renames
renameSequential('img/paintings', 'painting');
renameSequential('img/projects/creation', 'creation', '.jpg'); // Only jpgs? or all images? files in list were jpg/png
renameSequential('img/projects/regarde', 'regarde', '.jpeg');
renameSequential('img/projects/regarde', 'regarde', '.png'); // Handle mixed types if needed, but sequential naming might conflict if not careful.
// Better to rename ALL files in folder sequentially regardless of extension?
// Let's modify renameSequential to handle all reasonable image extensions together

function renameSequentialAll(dirPath, prefix) {
    const fullPath = path.join(assetsDir, dirPath);
    if (!fs.existsSync(fullPath)) return;

    const files = fs.readdirSync(fullPath).filter(f => /\.(jpg|jpeg|png|webp|heic)$/i.test(f));
    files.sort();

    files.forEach((file, index) => {
        const ext = path.extname(file); // keep original extension
        const newName = `${prefix}-${String(index + 1).padStart(2, '0')}${ext}`;
        const oldPath = path.join(fullPath, file);
        const newPath = path.join(fullPath, newName);

        // Check if target exists (e.g. running script twice)
        if (fs.existsSync(newPath) && oldPath !== newPath) {
            console.log(`Skipping ${file} -> ${newName} (Target exists)`);
            return;
        }

        if (file !== newName) {
            fs.renameSync(oldPath, newPath);
            console.log(`Renamed: ${dirPath}/${file} -> ${newName}`);
        }
    });
}

renameSequentialAll('img/paintings', 'painting');
renameSequentialAll('img/projects/creation', 'creation');
renameSequentialAll('img/projects/regarde', 'regarde');
renameSequentialAll('img/projects/sunset', 'sunset');
renameSequentialAll('img/projects/triangle', 'triangle');

// Rename specific loose files in projects/ if needed
const projectsDir = path.join(assetsDir, 'img/projects');
if (fs.existsSync(projectsDir)) {
    const pFiles = fs.readdirSync(projectsDir);
    const hero = pFiles.find(f => f.includes('capture-d-cran-185'));
    if (hero) fs.renameSync(path.join(projectsDir, hero), path.join(projectsDir, 'projects-hero.png'));
}


console.log('Renaming complete.');
