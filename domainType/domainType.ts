function domainType(domains: string[]): string[] {

    return domains.map(url => {
        return typeofDomain(url);
    });
}

function typeofDomain(domain: string): string {
    if (domain.endsWith('.org')) {
        return 'organization';
    } else if (domain.endsWith('.com')) {
        return 'commercial';
    } else if (domain.endsWith('.net')) {
        return 'network';
    } else {
        return 'information';
    }
}

// ["organization", "commercial", "network", "information"]
console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));