const puppeteer = require('puppeteer');

//dom Element selectors 
const APPARTEMENT = '#react-tabs-1 > div > ul > li:nth-child(1) > a > section > p > span'
const LENGTH_SELECTOR_CLASS = '_3DFQ-';
const NUMERO = '#container > main > div > div > div > section > section > section._1_H-h > div._2-Dyg > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div > button';
const DESCRIPTION = '#container > main > div > div > div > section > section > section.OjX8R > div:nth-child(6) > div:nth-child(2) > div > div:nth-child(1) > span';
const DESCRIPTION2 = '#container > main > div > div > div > section > section > section.OjX8R > div:nth-child(6)';


async function run() {
    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', request => {
        if (request.resourceType() === 'image')
            request.abort();
        else 
            request.continue();
    });

    await page.goto('https://www.leboncoin.fr/colocations/offres/');

    // await page.waitForNavigation();
    // await page.screenshot({
    //     path: 'screenshots/leboncoin.png', fullPage: true
    // });

    // let listLength = await page.evaluate((sel) => {
    //     return document.getElementsByClassName(sel).length;
    // }, LENGTH_SELECTOR_CLASS);
    
    let appartement = APPARTEMENT;
    await page.click(appartement);
    let descirption = DESCRIPTION2;
    console.log('Description', description);

    // for (let i = 1; i <= 5; i++) {
        // change the index to the next child
        
        // let appartement = APPARTEMENT.replace("INDEX", i);
        // await page.click(appartement);

        // let description =  DESCRIPTION
        // await page.click(NUMERO);

        // console.log(i , ' -> ', description);

        // TODO save this user
    // }


    browser.close();
}

run();