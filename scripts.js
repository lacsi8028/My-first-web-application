let currentPhoto = 0;

let imagesData = [{
    photo: "Images/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
    title: "This is a begining of a wonderfull time",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo dolor. Praesent convallis est ullamcorper risus tincidunt, eget viverra ante convallis. Duis rhoncus blandit accumsan.",
  },
  {
    photo: "Images/karim-manjra-QZv2PEXUk7c-unsplash.jpg",
    title: "Back to the starts",
    description: "Ut pretium molestie purus, vitae ornare tellus accumsan vel. Donec congue mi vitae rhoncus placerat. Nunc id tempus enim, at cursus tortor.",
  },
  {
    photo: "Images/daniel-vogel-sVothhm7iRI-unsplash.jpg",
    title: "The time machine",
    description: "Fusce ipsum sem, fermentum sed quam eget, vestibulum fermentum lacus. In posuere tellus sit amet volutpat tempor. Sed feugiat lectus orci, quis mattis augue luctus eget.",
  },
  {
    photo: "Images/nasa-U2uKrI4lci8-unsplash.jpg",
    title: "Small step ",
    description: "Donec pretium nunc ex, in iaculis ex scelerisque in. Pellentesque a tellus vel arcu cursus commodo a iaculis arcu.",
  },
  {
    photo: "Images/roman-kraft-g_gwdpsCVAY-unsplash.jpg",
    title: "Buildings in a cosy town",
    description: "Nunc vel convallis ipsum. Mauris luctus turpis orci, in consectetur nisi aliquet a. Duis vitae rhoncus eros.",
  },
  {
    photo:  "Images/subtle-cinematics-VHt_sWcj70I-unsplash.jpg",
    title: "Under pressure",
    description: "Praesent enim sapien, consequat sed congue vitae, semper et arcu. Sed vel ultrices ex, eu fermentum mi.",
  },
  {
    photo: "Images/troy-taylor-8Qvbsy3B7dE-unsplash.jpg",
    title: "Northern lights",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  }
];


let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[currentPhoto].photo);
  $('#photo-title').text(imagesData[currentPhoto].title);
  $('#photo-description').text(imagesData[currentPhoto].description);
}

$('#previus').click(() => {
    if(currentPhoto > 1) {
    currentPhoto--;
    }
    loadPhoto(currentPhoto);
  });

$('#next').click(() => {
    if(currentPhoto < 7) {
    currentPhoto++;
    }
    loadPhoto(currentPhoto);
  });

loadPhoto(currentPhoto);

var photo = [
    "Images/dariusz-sankowski-3OiYMgDKJ6k-unsplash.jpg",
    "Images/karim-manjra-QZv2PEXUk7c-unsplash.jpg",
    "Images/daniel-vogel-sVothhm7iRI-unsplash.jpg",
    "Images/nasa-U2uKrI4lci8-unsplash.jpg",
    "Images/roman-kraft-g_gwdpsCVAY-unsplash.jpg",
    "Images/subtle-cinematics-VHt_sWcj70I-unsplash.jpg",
    "Images/troy-taylor-8Qvbsy3B7dE-unsplash.jpg"
];

var titles = [
  "This is a begining of a wonderfull time",
  "Back to the starts",
  "The time machine",
  "Small steps ",
  "Buildings in a cosy town",
  "under pressure",
  "Northern lights"
];

var description = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo dolor. Praesent convallis est ullamcorper risus tincidunt, eget viverra ante convallis. Duis rhoncus blandit accumsan.",
  "Ut pretium molestie purus, vitae ornare tellus accumsan vel. Donec congue mi vitae rhoncus placerat. Nunc id tempus enim, at cursus tortor.",
  "Fusce ipsum sem, fermentum sed quam eget, vestibulum fermentum lacus. In posuere tellus sit amet volutpat tempor. Sed feugiat lectus orci, quis mattis augue luctus eget.",
  "Donec pretium nunc ex, in iaculis ex scelerisque in. Pellentesque a tellus vel arcu cursus commodo a iaculis arcu.",
  "Nunc vel convallis ipsum. Mauris luctus turpis orci, in consectetur nisi aliquet a. Duis vitae rhoncus eros.",
  "Praesent enim sapien, consequat sed congue vitae, semper et arcu. Sed vel ultrices ex, eu fermentum mi.",
  "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
]
