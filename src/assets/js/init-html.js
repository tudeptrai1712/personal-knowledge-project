const fs = require('fs');
const path = require('path');

// Root folder for HTML content
const baseDir = path.join(__dirname, '../src');

// Define structure
const structure = {
    'index.html': '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Home</title></head><body></body></html>',
    'math': {
        'index.html': '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Math</title></head><body></body></html>',
        'knowledge-1.html': '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Math Knowledge 1</title></head><body></body></html>'
    },
    'physics': {
        'index.html': '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Physics</title></head><body></body></html>',
        'knowledge-1.html': '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Physics Knowledge 1</title></head><body></body></html>'
    },
    'informatics': {
        'index.html': '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Informatics</title></head><body></body></html>',
        'knowledge-1.html': '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Informatics Knowledge 1</title></head><body></body></html>'
    }
};

// Recursive creation function
function createStructure(dir, obj) {
    for (const key in obj) {
        const fullPath = path.join(dir, key);
        if (typeof obj[key] === 'string') {
            if (!fs.existsSync(fullPath)) {
                fs.writeFileSync(fullPath, obj[key]);
                console.log(`Created file: ${fullPath}`);
            }
        } else {
            if (!fs.existsSync(fullPath)) {
                fs.mkdirSync(fullPath);
                console.log(`Created folder: ${fullPath}`);
            }
            createStructure(fullPath, obj[key]);
        }
    }
}

// Run
createStructure(baseDir, structure);
