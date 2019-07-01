const Data = [
    {
        type: "petition",
        id: 1,
        title: "Petition to install more recycling bins in hostels",
        recipient: "Office of Student Affairs",
        organizer: "De Xun",
        organizerID: 'e0309595',
        anonymity: true,
        date_started: new Date(2019, 0, 30),
        date_end: '',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ultricies ante, vitae molestie libero. In id cursus felis. Sed imperdiet vehicula ex, eget venenatis augue. Integer ornare, tellus non.",
        tags: ["Hostel Living", "Environment"],
        image: "https://www.recycleaway.com/assets/images/product-photos/Iowa%20Rotocast/RB-1_Triple.jpg",
        targetNum: 300,
        numSupporters: 130,
        numFollowing: 100,
        finished: false,
    },
    {  
        type: "campaign",
        id: 2,
        title: "OCIP Fundraising Project",
        recipient: "All Students",
        organizer: "Xiao Ming",
        organizerID: 'admin',
        anonymity: false,
        date_started: new Date(2019, 5, 20),
        date_end: new Date(2019, 9, 30),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec dui id eros congue mollis ac ac tortor. Duis eget ligula quis magna viverra malesuada ac non odio. Cras libero.",
        tags: ["CIP", "Fundraising"],
        image: "http://www.rlafoundation.org.sg/Resources/EnrichingLives/Local-and-Overseas-Projects-Main-Page.aspx?width=716&height=475",
        targetNum: 200,
        numSupporters: 150,
        numFollowing: 300,
        finished: false,
    },
    {  
        type: "petition",
        id: 3,
        title: "Petition to repeal the straw ban",
        recipient: "NUS & OSA", 
        organizer: "Mike",
        organizerID: 'admin',
        anonymity: false,
        date_started: new Date(2019, 5, 19),
        date_end: '',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ligula rhoncus, vehicula sem ac, congue risus. Mauris eget quam nisi. Sed tortor velit, tincidunt ut neque vel, malesuada euismod.",
        tags: ["Student Life"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8Ud-aJvfnJf7TKbcUZkGdnvRlFzqPIK28J8iEXopNsfvN2arhg",
        targetNum: 1000,
        numSupporters: 250,
        numFollowing: 150,
        finished: false,
    },
    {  
        type: "campaign",
        id: 4,
        title: "Lorem Ipsum",
        recipient: "RC4 Residents", //Input form will only ask for Purpose
        organizer: "Phaedra",
        organizerID: 'e0322822',
        anonymity: false,
        date_started: new Date(2019, 5, 5),
        date_end: new Date(2019, 8, 20),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique rhoncus arcu, et suscipit massa facilisis sit amet. Sed semper mattis maximus. Sed varius nec tortor et tincidunt. Phasellus pretium.",
        tags: ["Hostel Living"],
        image: "https://seo-hacker.com/wp-content/uploads/2018/04/Elements-of-a-Viral-Social-Media-Campaign-1024x768.jpg",
        targetNum: 700,
        numSupporters: 700,
        numFollowing: 300,
        finished: true,
    },
    {  
        type: "petition",
        id: 5,
        title: "Petition for release of final paper results",
        recipient: "NUS Provost Office",
        organizer: "De Xun",
        organizerID: 'e0309595',
        anonymity: false,
        date_started: new Date(2019, 5, 7),
        date_end: '',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, ante ut dignissim scelerisque, nisi libero venenatis magna, id ullamcorper ante magna nec dolor. Suspendisse molestie ex justo, tempus luctus.",
        tags: ["Academic"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpjT_DHspqCI2JptaUg_L4fXlzHgoasHjIvbFljRckf_U2aVZOuA",
        targetNum: 250,
        numSupporters: 105,
        numFollowing: 200,
        finished: false,
    },
    {  
        type: "campaign",
        id: 6,
        title: "Recruitment of Volunteers",
        recipient: "Make a Wish Foundation",
        organizer: "Phaedra",
        organizerID: 'e0322822',
        anonymity: false,
        date_started: new Date(2019, 5, 11),
        date_end: new Date(2019, 12, 12),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus felis non nunc mollis egestas. Nunc bibendum molestie nisi sed vehicula. Donec sollicitudin tellus vitae dui euismod facilisis. Vestibulum ante.",
        tags: ["CIP"],
        image: "https://images.jg-cdn.com/image/60d60f4f-13d4-42f0-a96e-152772ed195c.jpg?template=FundraisingPageHeroImageM",
        targetNum: 1000,
        numSupporters: 200,
        numFollowing: 300,
        finished: false,
    },
];

module.exports = Data;
