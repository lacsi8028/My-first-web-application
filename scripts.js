let data = {
    photo: 'Images/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg',
    title: 'This is a begining of a wonderfull time',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo dolor. Praesent convallis est ullamcorper risus tincidunt, eget viverra ante convallis. Duis rhoncus blandit accumsan.'
  };

let currentPhoto = 2;

var images = [
    "Images/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
    "Images/karim-manjra-QZv2PEXUk7c-unsplash.jpg",
    "Images/daniel-vogel-sVothhm7iRI-unsplash.jpg",
    "Images/nasa-U2uKrI4lci8-unsplash.jpg",
    "Images/roman-kraft-g_gwdpsCVAY-unsplash.jpg",
    "Images/subtle-cinematics-VHt_sWcj70I-unsplash.jpg",
    "Images/troy-taylor-8Qvbsy3B7dE-unsplash.jpg"
];

var subtitles = [
    "This is a begining of a wonderfull time",
    "Back to the starts",
    "The time machine",
    "Small steps ",
    "Buildings in a cosy town",
    "under pressure",
    "Northern lights"
];

var explanations = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo dolor. Praesent convallis est ullamcorper risus tincidunt, eget viverra ante convallis. Duis rhoncus blandit accumsan.",
    "Ut pretium molestie purus, vitae ornare tellus accumsan vel. Donec congue mi vitae rhoncus placerat. Nunc id tempus enim, at cursus tortor.",
    "Fusce ipsum sem, fermentum sed quam eget, vestibulum fermentum lacus. In posuere tellus sit amet volutpat tempor. Sed feugiat lectus orci, quis mattis augue luctus eget.",
    "Donec pretium nunc ex, in iaculis ex scelerisque in. Pellentesque a tellus vel arcu cursus commodo a iaculis arcu.",
    "Nunc vel convallis ipsum. Mauris luctus turpis orci, in consectetur nisi aliquet a. Duis vitae rhoncus eros.",
    "Praesent enim sapien, consequat sed congue vitae, semper et arcu. Sed vel ultrices ex, eu fermentum mi.",
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
]


  $('#photo').attr('src', data.photo);
  $('#photo-title').text(data.title);
  $('#photo-description').text(data.description);
 
  
  $('#photo').attr('src', images[currentPhoto]);
  $('#photo-title').text(subtitles[currentPhoto]);
  $('#photo-description').text(explanations[currentPhoto]);

