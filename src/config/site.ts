export default {
    title: "Gareth Ferguson",
    description:
        "Portfolio site for Gareth Ferguson, a full-stack engineer based in Newcastle. View my skills and project experience, or contact using the form.",
    siteUrl: "https://garethferguson.co.uk",
    author: "Gareth Ferguson",
    image: "/images/Logo.jpg",
    menuLinks: [
        {
            name: "Contact",
            slug: "/contact/",
        },
        {
            name: "Storybook",
            slug:
                process.env.NODE_ENV === "development"
                    ? "http://localhost:6006"
                    : "https://gareth-ferguson-storybook.netlify.app/",
        },
    ],
    basePath: "/",
}
