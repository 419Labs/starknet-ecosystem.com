import type { Company } from "./company";
import type { Job } from "./job";

export const aJob = (): Job => ({
  title: "Senior / backend - developer",
  companyId: 1,
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
  { ...aJob(), title: "Senior / backend - developer", companyId: 1 },
  { ...aJob(), title: "Senior backend developer", companyId: 1, remote: false },
  {
    ...aJob(),
    title: "Backend developer",
    companyId: 2,
    tags: ["test"],
  },
];

export const aCompany = (): Company => ({
  id: 1,
  name: "Alpha Road",
  network: {
    website: "https://alpharoad.fi",
    github: "",
    twitter: "https://twitter.com/alpharoad_fi",
    medium: "https://alpharoad.medium.com/",
    discord: "https://discord.gg/Bhfa3B2Gnq",
    telegram: "https://t.me/alpharoad_fi",
  },
  logo: "alpharoad.png",
});

export const aListOfCompany = (): Company[] => [
  { ...aCompany(), name: "Alpha Road", id: 1 },
  { ...aCompany(), name: "test", id: 2 },
];
