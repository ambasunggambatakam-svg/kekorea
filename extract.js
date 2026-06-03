const fs = require('fs');
const lines = fs.readFileSync('C:\\Users\\guest 1\\.gemini\\antigravity-ide\\brain\\ddd6097b-27c1-4dd5-998d-6c0c991a19d6\\.system_generated\\logs\\transcript.jsonl', 'utf8').split('\n');
for(let i=lines.length-1; i>=0; i--){
  if(!lines[i]) continue;
  try {
    const obj = JSON.parse(lines[i]);
    if(obj.type === 'USER_INPUT' && obj.content.includes('client minta revisi LP nya jd kyk gini')) {
      const match = obj.content.match(/<!DOCTYPE html>[\s\S]*/);
      if(match) {
        fs.writeFileSync('client_revision.html', match[0]);
        console.log('Extracted to client_revision.html');
      }
      break;
    }
  } catch(e) {}
}
