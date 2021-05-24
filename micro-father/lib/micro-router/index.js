class MicroRouter extends HTMLElement {
  constructor() {
    super();

    const url = this.getAttribute("url");
    const path = this.getAttribute("path");

    if (!url) {
      return;
    }

    const myRequest = new Request(url);
    fetch(myRequest)
      .then((response) => {
        return response.text();
      })
      .then((html) => {
        this.parseCssLink(html);
        this.parseBody(html);
        this.parseScriptLink(html);
      });
  }


  parseCssLink(html) {
    const prefix = this.getAttribute("prefix") || '';
    let pageHead;
    html.replace(/<head>([\s\S]*)<\/head>/gm, (_, $1) => {
      pageHead = $1;
      return $1;
    });

    // css file
    let cssfiles = pageHead.match(/<link rel="stylesheet"([\s\S]*)>/g) || [];
    cssfiles = cssfiles.map((item) => item.replace('href="', `href="${prefix}`));
    const cssFrag = document.createRange().createContextualFragment(cssfiles.join(''));
    document.head.appendChild(cssFrag);
  }

  parseScriptLink(html) {
    const prefix = this.getAttribute("prefix") || '';
    let scripts = (html.match(/<script([\s\S]*?)\/script>/g) || []);

    console.log(scripts, 'scripts')
  
    scripts = scripts.map((item) => item.replace('src="', `src="${prefix}`));
    let frag = document.createRange().createContextualFragment(scripts.join(''));

    document.body.appendChild(frag);
    console.log('scripts inster');
  }

  parseBody(html) {
    let pageContent;
    html.replace(/<div id="root">([\s\S]*)<\/div>/m, (_, $1) => {
      pageContent = _;
    });
    const wrap = document.querySelector("micro-router");
    wrap.innerHTML = pageContent;
  }

  connectedCallback() {
    console.log(this, 99);
  }
}

export default MicroRouter;