const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const root = __dirname;
const port = Number(process.env.PORT || 3000);
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.eml':'message/rfc822','.json':'application/json','.' :'application/octet-stream'};
function safePath(p){const decoded=decodeURIComponent(p);const full=path.normalize(path.join(root,decoded)); return full.startsWith(root) ? full : null;}
const server=http.createServer((req,res)=>{try{
  const parsed=url.parse(req.url||'/'); let file=parsed.pathname==='/'?'/index.html':parsed.pathname; const full=safePath(file);
  if(!full){res.writeHead(403);return res.end('Forbidden');}
  fs.stat(full,(err,st)=>{if(err||!st.isFile()){res.writeHead(404);return res.end('Not found');} const ext=path.extname(full).toLowerCase();res.writeHead(200,{'Content-Type':mime[ext]||'application/octet-stream','Cache-Control':'no-store'});fs.createReadStream(full).pipe(res);});
}catch(e){res.writeHead(500);res.end('Server error');}});
server.listen(port,'0.0.0.0',()=>console.log(`MailTrace running at http://localhost:${port}`));
