import {defaultFeatures} from './features';
import {StoreSync} from './library/store-sync';

const storeSync = new StoreSync(window, 'refined:aws');

// Save default features option valude under chrome storage sync.
async function main() {
  try {
    const options = await storeSync.get(null);
    await storeSync.set({...options, ...defaultFeatures});
    console.log('✅', 'Saved default');
  } catch (error) {
    console.error('❓', 'Error saving default');
    // Handle error, retry sync or write to log file but put under logging option.
    console.log(error);
  }
}

main();
