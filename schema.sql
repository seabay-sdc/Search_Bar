DROP DATABASE IF EXISTS fec;

CREATE DATABASE fec;

USE fec;

CREATE TABLE searchterms (
  id SERIAL,
  searchterm varchar(169) NOT NULL,
  category varchar(169) NOT NULL
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

INSERT INTO searchterms (searchterm, category) VALUES ( "Moby Dick, or The Whale", "Sea Books"); 
INSERT INTO searchterms (searchterm, category) VALUES ( "The Old Man and The Sea", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ( "Twenty Thousand Leagues Under The Sea", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ( "Log From the Sea of Cortez", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ( "The Sea Around Us", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ( "The Silent World", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ( "The Soul of an Octopus", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ( "The Reef", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ( "The Secret Life of Lobsters", "Sea Books" );
INSERT INTO searchterms (searchterm, category) VALUES ( "Treasure Island", "Sea Books");

INSERT INTO searchterms (searchterm, category) VALUES ( "Gulliver's Travels", "Sea Books"); 
INSERT INTO searchterms (searchterm, category) VALUES ("Life of Pi", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ("Jaws", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ("Animporphs: The Message", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ("The Seawolf", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ("Call of Cthulhu", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ("Starfish", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ("The Little Mermaid", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ("Bioshock Rapture", "Sea Books");
INSERT INTO searchterms (searchterm, category) VALUES ("The Odyssey", "Sea Books");

INSERT INTO searchterms (searchterm, category) VALUES ('Vtg ROLOFF River Special R8 Small 8 # CAST IRON BOAT ANCHOR Kaukauna NICE PATINA', "Anchoring, Docking");
INSERT INTO searchterms (searchterm, category) VALUES ('Antique Fishermans Anchor Kedge Anchor Aprox 32" x 22" 13lbs', "Anchoring, Docking");
INSERT INTO searchterms (searchterm, category) VALUES ('Extreme Max Navy Anchor - 10 Ibs. Coated', "Anchoring, Docking");
INSERT INTO searchterms (searchterm, category) VALUES ('Danforth Utility Fluke Style Boat Marine Anchor Galvanized Seachoice 7E 41610', "Anchoring, Docking");
INSERT INTO searchterms (searchterm, category) VALUES ('Portable Folding 3lb Anchor Kit Canoe Kayak Raft Boat Sailboat Fishing Jet Ski', "Anchoring, Docking");
INSERT INTO searchterms (searchterm, category) VALUES ('Vintage Merriman Brothers Iron Kedge Anchor. Painted White.', "Anchoring, Docking");
INSERT INTO searchterms (searchterm, category) VALUES ('Conch Murex Spikey Shell Phone', "Shell Phones");
INSERT INTO searchterms (searchterm, category) VALUES ('Conch V70 shell phone rose gold NEW IN BOX', "Shell Phones");
INSERT INTO searchterms (searchterm, category) VALUES ('Conch v80+ shell phone', "Shell Phones");
INSERT INTO searchterms (searchterm, category) VALUES ('lagoon s10+ shell phone', "Shell Phones");

INSERT INTO searchterms (searchterm, category) VALUES ('2020 Deluxe Mobile Home 1BR 1BA 2"x3" (6"sq) MOBILE HOME-FOR ALL FLORIDA', "Mobile Homes and RVs");
INSERT INTO searchterms (searchterm, category) VALUES ('INDUSTRIAL SYLE deluxe mobile home (two colors available)', "Mobile Homes and RVs");
INSERT INTO searchterms (searchterm, category) VALUES ('3BR 3BA Mobile Home FLORIDA', "Mobile Homes and RVs");
INSERT INTO searchterms (searchterm, category) VALUES ('SPACIOUS 1BR 1BA mobile home GALVASTON TX', "Mobile Homes and RVs");
INSERT INTO searchterms (searchterm, category) VALUES ('mobile home 100% RECYCLED MATERIAL ENVIRONMENTALLY FRIENDLY', "Mobile Homes and RVs");
INSERT INTO searchterms (searchterm, category) VALUES ('Antique 18" Diving vintage BOSTON MARK V U.S Navy Deep Sea Divers Helmet', "Hats");
INSERT INTO searchterms (searchterm, category) VALUES ('Full Face Snorkel Mask Scuba Diving Swimming Easy Breath Underwater Anti Fog', "Hats");
INSERT INTO searchterms (searchterm, category) VALUES ('Underwater Diving Mask Scuba Snorkel Goggles Anti Fog Silicone Half Face Glasses', "Hats");
INSERT INTO searchterms (searchterm, category) VALUES ('RARE ANTIQUE Vintage Siebe Gorman Copper & Bras REPRODUCT Diving Helmet #1120', "Hats");
INSERT INTO searchterms (searchterm, category) VALUES ('Antique Brass Diving Helmet Us Navy Engineering Divers Helmet Vintage', "Hats");

INSERT INTO searchterms (searchterm, category) VALUES ('Mr. Eugene H. Krabs SpongeBob Squarepants Crab Plush Toy Stuffed Animal New 8"', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('NEW LEGO "SALTY SEA CAPTAIN" MINIFIG LOT seagull sailor figure minifigure pirate', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('LEGO City Coast Guard Sea Rescue Plane 60164 Building Kit (141 Piece)', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('NEW Spin Master 6040052 Paw Patrol Sea Patrol Sub Patroller Vehicle Playset', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('Spongebob Squarepants TCG Deep Sea Duel Aquatic Amigos Starter Deck', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('76027 BLACK MANTA DEEP SEA STRIKE lego legos set NEW sealed super heroes AQUAMAN', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('NEW Bundle of 7 Ocean-Themed Coloring & Activity Items w/ Stickers Bookmark+More', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('NEW Paw Patrol Sea Patrol Chase Transforming Vehicle & Figure Puppy Boat Toy', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('Paw Patrol Sea Patrol - Sea Patroller Transforming Vehicle w/ Lights and Sounds', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('8pcs Spongebob SquarePants Series Figure Toys Patrick Star Figurine Doll Gifts', "Toys");

INSERT INTO searchterms (searchterm, category) VALUES ('Deep Sea Adventure Board Game with English Instructions Cards Game 2-6 Player XR', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('Disney Authentic Finding Dory Nemo Plush BIG 15" Stuffed Animal Toy New', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('Record Your Own Plush 16 inch Bubbles the Dolphin - Ready To Love In A Few Easy', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('SpongeBob SquarePants: Creature from the Krusty Krab - Nintendo Wii Game', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('NEW LEGO CAPTAIN JACK SPARROW MINIFIG LOT potc pirates of the caribbean treasure', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('SpongeBob Squarepants Lego 4981 The Chum Bucket GET IT FAST ~ US SHIPPER', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('NEW LEGO PIRATE SPONGEBOB SQUAREPANTS MINIFIG figure minifigure 3817 dutchman', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('Thomas & Friends Track Master Boat and Sea Set - New', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('Fisher Price Thomas & Friends Adventures Sea Monster Pirate Set NEW', "Toys");
INSERT INTO searchterms (searchterm, category) VALUES ('SpongeBob SquarePants Patrick Chew with Rope Toy for Dogs', "Toys");

INSERT INTO searchterms (searchterm, category) VALUES ('Jimbo Jumbo Painting', "Equestrian");
INSERT INTO searchterms (searchterm, category) VALUES ('Swim Trainer', "Equestrian");
INSERT INTO searchterms (searchterm, category) VALUES ('Horse Life Jacket', "Equestrian");
INSERT INTO searchterms (searchterm, category) VALUES ('Non-Land Horse', "Equestrian");
INSERT INTO searchterms (searchterm, category) VALUES ('Sickly Sea Horse', "Equestrian");
INSERT INTO searchterms (searchterm, category) VALUES ('Labeled Sand Samples from Around The World Collected on 40+ Cruise Vacations', "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ('Hanauma Bay Beach Green Sand Sand Sample', "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ('USA Kaihalulu Beach Red sand Beach Coarse Red Sand Sample', "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ('Florida Cocoa Beach Florida Sand Sample', "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ('MISSION BAY ~ SAN DIEGO, CALIFORNIA - BEACH SAND Sample', "Sand");

INSERT INTO searchterms (searchterm, category) VALUES ('Diamond Head Lighthouse Beach Sand Sample', "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ('Lot of 14 Sand Samples from Various Beaches in the Bahamas', "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ('Lot of 34 Bulgaria Sand Beach Sample from Black sea 3 oz (86g) each bag', "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ("Ireland Bundoran Sand Sample", "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ("Alabama Dauphin Island Beach Sand Sample", "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ("STAR SAND - JAPAN - RARE - TAKETOMI - BEACH SAND SAMPLE", "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ("Magnetic BLACK SAND Sample Capistrano Beach, Dana Point, CA", "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ("IXTAPA, MEXICO ~ BEACH SAND Sample", "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ("Star Sand Okinawa Japan - star sand beach - Sand sample 50 grams (1.76 oz)", "Sand");
INSERT INTO searchterms (searchterm, category) VALUES ("CAPE COD, MASSACHUSETTS ~ BEACH SAND sample", "Sand");

INSERT INTO searchterms (searchterm, category) VALUES ('Deep Blue Sea DVD', "DVDs & Movies");
INSERT INTO searchterms (searchterm, category) VALUES ('Little Mermaid II, The: Return to the Sea (DVD, 2008, Special Edition)', "DVDs & Movies");
INSERT INTO searchterms (searchterm, category) VALUES ('By the Sea (DVD, 2016)', "DVDs & Movies");
INSERT INTO searchterms (searchterm, category) VALUES ('Oceans 11 (Widescreen) (2001, Clooney)', "DVDs & Movies");
INSERT INTO searchterms (searchterm, category) VALUES ('Oceans Twelve 12 DVD NEW Clooney, Pitt, Damon, Zeta- Jones, Roberts Widescreen', "DVDs & Movies");
INSERT INTO searchterms (searchterm, category) VALUES ('OCEANS 13 Ocean’s Thirteen (DVD Widescreen) Brad Pitt George Clooney', "DVDs & Movies");
INSERT INTO searchterms (searchterm, category) VALUES ('20,000 Leagues Under the Sea [New DVD] Special Edition', "DVDs & Movies");
INSERT INTO searchterms (searchterm, category) VALUES ('In the Heart of the Sea [New DVD] Full Frame, Subtitled, Ac-3/Dolby Digital', "DVDs & Movies");
INSERT INTO searchterms (searchterm, category) VALUES ('Godzilla vs The Sea Monster (DVD, 2014)', "DVDs & Movies");
INSERT INTO searchterms (searchterm, category) VALUES ('Manchester by the Sea (DVD, 2017)', "DVDs & Movies");

INSERT INTO searchterms (searchterm, category) VALUES ('Jack Black Double-Duty Face Moisturizer SPF20 w/Blue Algae Extract & Sea Parsley', "Health & Beauty");
INSERT INTO searchterms (searchterm, category) VALUES ('INIS ENERGY OF THE SEA Cologne Spray 1.7 Fluid Ounces', "Health & Beauty");
INSERT INTO searchterms (searchterm, category) VALUES ('BRAND NEW DEEP SEA COSMETICS DEEP BLUE DEAD SEA HAND AND BODY LOTION 6.8 Oz', "Health & Beauty");
INSERT INTO searchterms (searchterm, category) VALUES ('SAME DAY SHIP Aquage Sea Salt Texturizing Spray, 8 oz', "Health & Beauty");
INSERT INTO searchterms (searchterm, category) VALUES ('Fresh Skin Naturals Dead Sea Mud Mask Facial Cleanser, Anti-Aging, Tone, 8.9 oz', "Health & Beauty");
INSERT INTO searchterms (searchterm, category) VALUES ('Swanson Ancient Zechstein Sea Brine Magnesium Oil Liquid, 8 fl oz', "Health & Beauty");
INSERT INTO searchterms (searchterm, category) VALUES ('Natural Sea Sponge Foam Bath Pack of 3 Natural Feeling Smoother Skin Exfoliating', "Health & Beauty");
INSERT INTO searchterms (searchterm, category) VALUES ('Rastarafi® Whole Leaf Irish Moss Sea Moss 1 lb | Raw WildCrafted Superfood-16 Oz', "Health & Beauty");
INSERT INTO searchterms (searchterm, category) VALUES ('Alaska Deep Sea Fish Oil Omega 3 DHA/EPA 1000 mg 200 Softgels FRESH SHIPPING', "Health & Beauty");
INSERT INTO searchterms (searchterm, category) VALUES ("Puritan's Pride Sea Kelp - 250 Tablets (Free Shipping)", "Health & Beauty");