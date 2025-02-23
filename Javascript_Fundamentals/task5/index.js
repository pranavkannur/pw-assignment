function deliveryTime(packageType) {
    let time;

    switch (packageType) {
        case "standard":
            time = "3-5 days";
            break;
        case "express":
            time = "1-2 days";
            break;
        case "overnight":
            time = "next day";
            break;
        default:
            time = "unknown package type";
    }

    console.log(`Estimated delivery time for ${packageType} package: ${time}`);
}

// Usage
deliveryTime("standard"); // Outputs: Estimated delivery time for standard package: 3-5 days
deliveryTime("express");  // Outputs: Estimated delivery time for express package: 1-2 days
deliveryTime("overnight"); // Outputs: Estimated delivery time for overnight package: next day
