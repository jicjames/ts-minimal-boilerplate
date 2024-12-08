import { Args } from "./types";

function parseArgs(): Args {
  const args: Args = {};

  process.argv.slice(2).forEach((arg) => {
    if(arg.startsWith('--')) {
      const [key, value] = arg.slice(2).split('=');
      args[key] = value || true;
    } else if (arg.startsWith('-')) {
      const [key, value] = arg.slice(1).split('=');
      args[key] = value || true;
    }
  })

  return args;
}

async function main() {
  try {
    console.log('Application started');
    const args = parseArgs();

    if(Object.keys(args).length > 0) {
      console.log('running with args: ', args);
    }

    const result = await operations();
    console.log("operation result: ", result);
    
  } catch (err) {
    console.error('Error: ', err);
    process.exit(1);
  }
}

async function operations(): Promise<string> {
  return 'Hello World!';
}

main().catch(console.error);