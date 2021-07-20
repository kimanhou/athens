import React from "react";

export enum Neighborhood {
    EXARCHIA = 'Exarchia',
    KOLONAKI = 'Kolonaki',
    HISTORICAL = 'Historical center',
    KERAMIKOS = 'Keramikos'
}

export default class FoodPlace {
    name : string;
    location : string;
    tags : string[];
    description : string;
    price : string;
    neighborhood : Neighborhood;
    link ?: string;

    constructor(name : string, location : string, tags : string[], description : string, price : string, neighborhood : Neighborhood, link ?: string) {
        this.name = name;
        this.location = location;
        this.tags = tags;
        this.description = description;
        this.price = price;
        this.neighborhood = neighborhood;
        this.link = link;
    }

    static getAllFoodPlaces = () => {
        return [ FoodPlace.ACHILLEAS, FoodPlace.FALAFELLAS, FoodPlace.KOSTAS, FoodPlace.MELT, FoodPlace.GRANELLO, FoodPlace.KAMPETHON, FoodPlace.NAKAMA ];
    }

    static ACHILLEAS = new FoodPlace('Achilleas', 'https://goo.gl/maps/DFPVfxtgXpRHAEhw7', [ 'Cheap eat', 'Local', 'Fast' ], 'Cheap, fast, good. Come here for the souvlaki store and plenty of other stuff.', '2.50€ / sandwich', Neighborhood.EXARCHIA);
    static FALAFELLAS = new FoodPlace('Falafellas', 'https://goo.gl/maps/DSXRYF9moQ4bZbZD8', [ 'Cheap eat', 'Fast' ], 'Good falafel or meat balls in pita bread.', '2.80€ for a falafel sandwich', Neighborhood.HISTORICAL);
    static KOSTAS = new FoodPlace('Kostas', 'https://goo.gl/maps/aAbhn3y4fLAZyMkF8', [ 'Cheap eat', 'Fast' ], 'Decent souvlaki gyros in historic center.', '3€ / sandwich', Neighborhood.HISTORICAL);
    static MELT = new FoodPlace('Melt', 'https://goo.gl/maps/aF1ba7WdkYjWkb8a6', [ 'Fast' ], 'Slightly overpriced but good, especially the Sicilian pistacchio flavor.', '2.20€ / one flavor', Neighborhood.HISTORICAL);
    static GRANELLO = new FoodPlace('Granello', 'https://g.page/granellopizza?share', [ 'Fast' ], 'Very good Neapoletan-style pizza, better to take away or delivery.', '<10€ / pizza', Neighborhood.HISTORICAL, 'https://granellopizza.gr/');
    static KAMPETHON = new FoodPlace('Kampethon', 'https://goo.gl/maps/W573AMCxBP17RfB47', [ 'Local' ], 'Local bar with dining options, tucked away in an empty area, good vibes.', '7.50€ for 200mL of pure Ouzo', Neighborhood.KERAMIKOS);
    static NAKAMA = new FoodPlace('Nakama', 'https://goo.gl/maps/Vy8K9SHCiHWFfaMAA', [ 'Local' ], 'Casual sushi bar in Kolonaki.', 'About 15€ / person', Neighborhood.KOLONAKI, 'https://www.nakama.gr/');
    
}