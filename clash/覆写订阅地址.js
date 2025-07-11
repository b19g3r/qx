// https://mihomo.party/docs/guide/override/javascript
function main(config) {
  config["proxy-providers"] = {
    "Subscribe": {
        // "url": "http://127.0.0.1:38324/download/collection/ssr1",
        // "url": "http://127.0.0.1:38324/download/ssr",
        "url": "http://127.0.0.1:38324/download/ouo",
        "type": "http",
        "interval": 86400,
        "health-check": {
            "enable": true,
            "url": "http://www.google.com/generate_204",
            "interval": 60
        },
        "path": "./proxy_provider/Providers.yaml"
    }
  };
  // config.rules.unshift("DOMAIN,apple.imap.mail.yahoo.com,DIRECT");
  // config.rules.unshift("DOMAIN,apple.smtp.mail.yahoo.com,DIRECT");
  // config.rules.unshift("DOMAIN,imap-mail.outlook.com,DIRECT");
  // config.rules.unshift("DOMAIN,outlook.office365.com,DIRECT");
  // config.rules.unshift("DOMAIN,smtp-mail.outlook.com,DIRECT");
  // config.rules.unshift("DOMAIN,smtp.office365.com,DIRECT");
  // config.rules.unshift("DOMAIN-SUFFIX,imap.yandex.com,DIRECT");
  // config.rules.unshift("DOMAIN-SUFFIX,m.hotmail.com,DIRECT");
  // config.rules.unshift("DOMAIN-SUFFIX,smtp.yandex.com,DIRECT");
  // config.rules.unshift("DOMAIN,openai.com,AI");
  // config.rules.unshift("DOMAIN,platform.openai.com,AI");
  // config.rules.unshift("domain-keyword,diabrowser,AI");
  return config;
}