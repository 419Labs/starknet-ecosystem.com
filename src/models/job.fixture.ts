import type { Project } from "../../data/ecosystem";

import type { Job } from "./job";

const AVNU_ID = "502b0dbc-5169-4db6-8796-36a968a798fd";
const AVNU_NAME = "AVNU";

export const aJob = (): Job => ({
  key: "1",
  title: "Senior / backend - developer",
  projectId: AVNU_ID,
  compensation: {
    from: 200,
    to: 600,
  },
  tags: ["DeFi", "NFT"],
  location: "Remote",
  remote: true,
  description:
    "<div>" +
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero ipsum, maximus eu commodo ut, bibendum quis nulla. Fusce ut eros vitae justo ornare blandit sed ultrices neque. Morbi molestie ligula dui, a dictum magna rutrum non. Etiam interdum orci at risus sollicitudin vehicula. Pellentesque condimentum tellus eget aliquam finibus. Morbi vitae nisi nec odio vehicula ultrices vel sit amet velit. Donec pellentesque lectus eget sapien elementum rutrum. Vestibulum dictum pharetra venenatis. Sed faucibus dignissim urna, sed porttitor elit volutpat in. Duis tempor lacus vel lacinia rutrum. Aenean suscipit vel dui sit amet eleifend.</p><br/>" +
    "<p>In a convallis elit, eget ornare magna. Vestibulum vitae dapibus lorem, vel ornare dui. Quisque rhoncus magna et urna fringilla sagittis. Phasellus et imperdiet ex. Duis maximus pretium massa eu imperdiet. Ut pellentesque nisl consequat massa pretium, eu porta augue semper. Integer vitae mattis lorem.</p><br/>" +
    "<p><strong>Required</strong></p><br/>" +
    "<ul>" +
    "<li>Duis interdum mollis finibus.</li>" +
    "<li>Donec porttitor est turpis, quis cursus dui posuere quis.</li>" +
    "<li>Proin ipsum justo, blandit sit amet est dapibus, sagittis commodo augue. Nam posuere ullamcorper tempor. Maecenas eget tellus mauris. Nullam ut enim ut risus rutrum hendrerit vitae sit amet quam. Phasellus consequat aliquam ultricies. Mauris porta nisi est, at convallis sapien elementum sollicitudin. Sed consequat tristique dictum. Sed dictum mi sed diam</li>" +
    "</ul>" +
    "</div>",
  applyLink: "https://google.com",
  createdOn: new Date("2022-04-11"),
});

export const aListOfJob = (): Job[] => [
  {
    ...aJob(),
    title: "Senior / backend - developer",
    projectId: AVNU_ID,
  },
  {
    ...aJob(),
    title: "Senior backend developer",
    projectId: AVNU_ID,
    remote: false,
  },
  {
    ...aJob(),
    title: "Backend developer",
    projectId: "502b0dbc-5169-4db6-8796-36a968a798f1",
    tags: ["test"],
  },
];

export const aProject = (): Project => ({
  id: "502b0dbc-5169-4db6-8796-36a968a798fd",
  name: AVNU_NAME,
  shortName: AVNU_NAME,
  description:
    "AVNU is a decentralized exchange protocol designed to offer the best execution.\n" +
    "\n" +
    "Our mission is to build the Liquidity Infrastructure that aims to empower traders and dApps with the best execution. We believe that the only way to serve our customers is to secure the most competitive prices for them, as well as access to the broadest range of assets while providing an exceptional user experience that sets the industry standard.\n",
  tags: ["defi", "infrastructure", "tools"],
  image: "avnu.png",
  network: {
    website: "https://app.avnu.fi",
    github: "",
    twitter: "https://twitter.com/avnu_fi",
    medium: "https://avnu-fi.medium.com/",
    discord: "https://discord.gg/avnu-fi",
    telegram: "https://t.me/avnu_fi",
  },
  isLive: false,
  isTestnetLive: true,
});

export const aListOfProject = (): Project[] => [
  { ...aProject(), name: "AVNU", id: "1" },
  { ...aProject(), name: "test", id: "2" },
];
