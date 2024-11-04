const { RemixURLResolver } = require("@remix-project/remix-url-resolver");
const path = require('path');

const dependencies = {
  deps: {
    "forge-std": "github:foundry-rs/forge-std#v1.8.1",
    prettier: "^3.0.0",
    solhint: "^3.6.2"
  }
};

const resolver = new RemixURLResolver(() => {
  return dependencies;
});

(async () => {
  try {
    const imported = await resolver.resolve("forge-std/src/Test.sol");
    console.log('Resolved Import:', imported);
  } catch (error) {
    console.error('Failed to resolve import:', error);
  }
})();
