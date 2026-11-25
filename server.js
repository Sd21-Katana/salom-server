const http = require("http");

const PORT = process.env.PORT || 3000;
const MATN = process.env.SALOM_MATN || "Yangi versiya! GitHub'ga yukladim — Railway o'zi yangiladi";

const sahifa = () => `<!doctype html><html lang="uz"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1"><title>Salom server</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;font-family:system-ui,sans-serif;
background:linear-gradient(135deg,#0e2f2a,#0b6b5e);color:#fff;text-align:center}
.k{background:rgba(255,255,255,.08);padding:48px 64px;border-radius:28px}
h1{font-size:44px;margin:0 0 12px}p{font-size:20px;opacity:.85;margin:6px 0}b{color:#f2a93b}</style></head>
<body><div class="k"><h1>${MATN}</h1>
<p>Kod <b>GitHub</b>da turadi, server <b>Railway</b>da ishlaydi.</p>
<p>Server vaqti: <b>${new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" })}</b></p></div></body></html>`;

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(sahifa());
}).listen(PORT, () => console.log("Server ishga tushdi, port:", PORT));
