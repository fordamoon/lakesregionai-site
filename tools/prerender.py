#!/usr/bin/env python3
"""Bake a static snapshot of each page into <div id="root"> so crawlers and
social scrapers see real content before React runs. Re-run after editing any
page section (.js) or page shell (.html):

    python3 tools/prerender.py

Requires Google Chrome. Idempotent: replaces the previous snapshot."""
import http.server, os, re, socketserver, subprocess, sys, threading

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PAGES = ["index.html", "what-we-do.html", "shop-talk.html", "about.html", "contact.html", "404.html"]
BOUNDARY = re.compile(r'<div id="root">(.*)</div>\s*<script type="text/babel" src="icon\.js">', re.S)

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass

def main():
    os.chdir(ROOT)
    srv = socketserver.TCPServer(("127.0.0.1", 0), Quiet)
    port = srv.server_address[1]
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    ok = True
    for page in PAGES:
        dom = subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--no-first-run", "--window-size=1280,900",
                              "--virtual-time-budget=15000", "--dump-dom", f"http://127.0.0.1:{port}/{page}"],
                             capture_output=True, text=True, timeout=120).stdout
        m = BOUNDARY.search(dom)
        inner = m.group(1).strip() if m else ""
        if len(inner) < 2000 or "<nav" not in inner.lower() and "<header" not in inner.lower() and "<footer" not in inner.lower():
            print(f"!! {page}: render looks empty ({len(inner)} chars) — left unchanged"); ok = False; continue
        src = open(page, encoding="utf-8").read()
        new, n = BOUNDARY.subn(lambda _: '<div id="root">' + inner + '</div>\n<script type="text/babel" src="icon.js">', src, count=1)
        if n != 1:
            print(f"!! {page}: could not find #root boundary"); ok = False; continue
        open(page, "w", encoding="utf-8").write(new)
        print(f"ok {page}: {len(inner)//1024} KB snapshot")
    srv.shutdown()
    sys.exit(0 if ok else 1)

if __name__ == "__main__":
    main()
