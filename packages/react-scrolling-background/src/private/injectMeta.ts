declare global {
  const process: {
    env: {
      npm_package_name: string;
      npm_package_version: string;
    };
  };
}

function injectMeta() {
  const meta = document.createElement('meta');

  meta.setAttribute('name', `${process.env.npm_package_name}:version`);
  meta.setAttribute('content', process.env.npm_package_version);

  try {
    document.head.appendChild(meta);
  } catch (err) {
    // Continue if we cannot inject <meta> element.
  }
}

injectMeta();

export {};
