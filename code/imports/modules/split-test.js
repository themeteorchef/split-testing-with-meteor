class SplitTest {
    constructor(testName, options) {
        this.testName = testName;
        let storageName = `split-test-${this.testName}`;
        
        // options is an array like this: ['big red button','small green button','no button']
        let option,
            defaultOption = options[0];

        // compatibility
        if (typeof(Storage) !== 'undefined') {
            // Hurrah. Local storage is supported
            // first we check if this test exists in the users' local storage
            if (!localStorage.getItem(storageName)) {
                // if the test doesn't exist in local storage then we have to
                // randomly assign them to a test bucket and then record this in local storage
                try{
                    option = this.getRandomOption(options);
                    localStorage.setItem(storageName, option);
                }catch(error){
                    // Safari private browsing issue: Local storage is available but you can't write to it
                    option = defaultOption;
                }

            } else {
                option = localStorage.getItem(storageName);
            }
        } else {
            // if the browser doesn't support local storage then we will always assign the first option
            // this is to provide consistency to the user, as if they revisit the page we don't want to give them a different split test category.
            option = defaultOption;
        }

        this.testOption = option;
    }

    getRandomIntInclusive(min, max) {
        // Returns a random integer between min (included) and max (included)
        // Using Math.round() will give you a non-uniform distribution!
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomOption(options) {
        let randomIndex = this.getRandomIntInclusive(0, options.length - 1);
        return options[randomIndex];
    }

    track() {
        analytics.track(`SplitTest: ${this.testName} - ${this.testOption}`);
    }

}

export default SplitTest;