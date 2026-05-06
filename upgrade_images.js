const fs = require('fs');
const file = '/Users/deyd/Desktop/Portfolio-1/projectData.ts';
let content = fs.readFileSync(file, 'utf8');

// Replace standard quality directories with 'fs' (full size)
content = content.replace(/https:\/\/mir-s3-cdn-cf\.behance\.net\/project_modules\/(1400_webp|1400|disp_webp|disp)\//g, 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/');

fs.writeFileSync(file, content);
console.log('Images upgraded to full size (fs)');
